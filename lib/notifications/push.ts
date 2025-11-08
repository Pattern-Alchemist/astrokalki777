export async function sendPushNotification(endpoint: string, payload: Record<string, unknown>) {
  if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
    console.info('Push stubbed', { endpoint, payload });
    return;
  }

  // Web Push integration would go here; stubbed for brevity.
}
