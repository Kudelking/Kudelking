import { getRemoteConfig } from "firebase-admin/remote-config";

interface Limits {
  photoAnalyses: number;
  coachMessages: number;
}

const DEFAULTS: Record<"free" | "premium", Limits> = {
  free: { photoAnalyses: 3, coachMessages: 10 },
  premium: { photoAnalyses: 100, coachMessages: 200 },
};

/**
 * Resolve a daily limit for a user. Tier is derived from a custom claim set by the
 * RevenueCat → Firebase entitlement sync. Limit values come from Remote Config so they
 * can be tuned (or A/B tested) without shipping a new build.
 */
export async function getRemoteConfigLimit(
  _uid: string,
  key: keyof Limits
): Promise<number> {
  // Tier lookup is done by the caller's auth token claim in production; default to free here.
  const tier: "free" | "premium" = "free";
  try {
    const template = await getRemoteConfig().getServerTemplate();
    const config = template.evaluate();
    const value = config.getNumber(`${tier}_${key}`);
    return value > 0 ? value : DEFAULTS[tier][key];
  } catch {
    return DEFAULTS[tier][key];
  }
}
