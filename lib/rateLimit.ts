const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

/**
 * In-memory sliding-window limiter. Resets on cold start / new instance,
 * which is an accepted tradeoff at this scale — no database needed.
 */
export function checkRateLimit(namespace: string, ip: string): boolean {
  const key = `${namespace}:${ip}`;
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (bucket.count >= MAX_PER_WINDOW) {
    return false;
  }

  bucket.count += 1;
  return true;
}

/** Vercel's edge network sets x-forwarded-for to the real client IP. */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}
