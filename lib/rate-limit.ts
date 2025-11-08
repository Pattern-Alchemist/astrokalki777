const windowHits = new Map<string, { count: number; expiresAt: number }>();

export function rateLimit(identifier: string, limit = 60, windowMs = 60000) {
  const now = Date.now();
  const bucket = windowHits.get(identifier);
  if (!bucket || bucket.expiresAt < now) {
    windowHits.set(identifier, { count: 1, expiresAt: now + windowMs });
    return { success: true, remaining: limit - 1 };
  }

  if (bucket.count >= limit) {
    return { success: false, retryAfter: bucket.expiresAt - now };
  }

  bucket.count += 1;
  windowHits.set(identifier, bucket);
  return { success: true, remaining: limit - bucket.count };
}
