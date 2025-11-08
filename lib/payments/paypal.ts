export type PayPalConfig = {
  clientId: string;
  secret: string;
  mode: 'sandbox' | 'live';
};

export class PayPalDriver {
  constructor(private config: PayPalConfig) {}

  async createOrder(amount: number, currency: string) {
    if (!this.config.clientId || !this.config.secret) {
      return {
        id: 'stub-order',
        status: 'CREATED',
        approvalUrl: '#paypal-stub'
      };
    }

    // Real integration would call PayPal REST API. Stubbed for demo.
    return {
      id: `order-${Date.now()}`,
      status: 'CREATED',
      approvalUrl: 'https://www.sandbox.paypal.com/checkoutnow?token=fake'
    };
  }
}
