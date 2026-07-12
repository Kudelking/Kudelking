import { getFirestore, Timestamp } from "firebase-admin/firestore";

const TTL_DAYS = 90;

/** Server-side analysis cache keyed by the image's perceptual hash. A hit costs $0. */
export async function getCachedAnalysis(pHash: string): Promise<Record<string, unknown> | null> {
  const ref = getFirestore().doc(`config/nutritionCacheKeys/${pHash}`);
  const snap = await ref.get();
  if (!snap.exists) return null;
  const data = snap.data()!;
  const expiresAt = data.expiresAt as Timestamp | undefined;
  if (expiresAt && expiresAt.toMillis() < Date.now()) return null;
  return data.result as Record<string, unknown>;
}

export async function putCachedAnalysis(pHash: string, result: unknown): Promise<void> {
  const expiresAt = Timestamp.fromMillis(Date.now() + TTL_DAYS * 86_400_000);
  await getFirestore()
    .doc(`config/nutritionCacheKeys/${pHash}`)
    .set({ result, expiresAt, createdAt: Timestamp.now() });
}
