import { PayPalDriver, PayPalConfig } from './paypal';
import { CashfreeDriver, DeepLinkDriver, UpiDriver } from './upi';

export function createPayPalDriver() {
  const config: PayPalConfig = {
    clientId: process.env.PAYPAL_CLIENT_ID ?? '',
    secret: process.env.PAYPAL_SECRET ?? '',
    mode: (process.env.PAYPAL_MODE as 'sandbox' | 'live') ?? 'sandbox'
  };
  return new PayPalDriver(config);
}

export function createUpiDriver(): UpiDriver {
  if (process.env.CASHFREE_CLIENT_ID && process.env.CASHFREE_CLIENT_SECRET) {
    return new CashfreeDriver({
      clientId: process.env.CASHFREE_CLIENT_ID,
      clientSecret: process.env.CASHFREE_CLIENT_SECRET,
      env: (process.env.CASHFREE_ENV as 'sandbox' | 'prod') ?? 'sandbox'
    });
  }

  return new DeepLinkDriver({
    handle: process.env.UPI_HANDLE ?? 'astrokalki@upi',
    name: process.env.UPI_BENEFICIARY_NAME ?? 'AstroKalki'
  });
}
