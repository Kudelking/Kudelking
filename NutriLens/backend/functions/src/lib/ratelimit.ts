import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { HttpsError } from "firebase-functions/v2/https";
import { getRemoteConfigLimit } from "./config";

/**
 * Atomic per-user, per-day rate limiter. Counters live at users/{uid}/usage/{yyyy-MM-dd}.
 * Limits (free vs premium) come from Remote Config so they change without a redeploy.
 */
export async function enforceRateLimit(uid: string, key: "photoAnalyses" | "coachMessages") {
  const db = getFirestore();
  const day = new Date().toISOString().slice(0, 10);
  const ref = db.doc(`users/${uid}/usage/${day}`);
  const limit = await getRemoteConfigLimit(uid, key);

  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const used = (snap.exists ? snap.get(key) : 0) ?? 0;
    if (used >= limit) {
      throw new HttpsError("resource-exhausted", "Daily limit reached.", { key, limit });
    }
    tx.set(ref, { [key]: FieldValue.increment(1) }, { merge: true });
  });
}
