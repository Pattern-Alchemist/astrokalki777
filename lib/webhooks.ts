import crypto from 'crypto';

export function signWebhook(secret: string, payload: string) {
  return crypto.createHmac('sha256', secret).update(payload).digest('hex');
}

export function verifyWebhook(secret: string, payload: string, signature: string) {
  const expected = signWebhook(secret, payload);
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}
