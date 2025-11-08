export async function sendSms(to: string, message: string) {
  if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
    console.info('SMS stubbed', { to, message });
    return;
  }
  // Twilio client would send the SMS here.
}
