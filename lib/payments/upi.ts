export type UpiDriver = {
  createPaymentLink(amount: number): Promise<{ upiLink: string; qr: string }>;
};

export class CashfreeDriver implements UpiDriver {
  constructor(private opts: { clientId?: string; clientSecret?: string; env: 'sandbox' | 'prod' }) {}

  async createPaymentLink(amount: number) {
    if (!this.opts.clientId || !this.opts.clientSecret) {
      return {
        upiLink: `upi://pay?pa=astrokalki@upi&pn=AstroKalki&am=${amount / 100}&cu=INR`,
        qr: ''
      };
    }

    return {
      upiLink: `upi://pay?pa=cashfree-demo@upi&pn=AstroKalki&am=${amount / 100}&cu=INR`,
      qr: ''
    };
  }
}

export class DeepLinkDriver implements UpiDriver {
  constructor(private opts: { handle: string; name: string }) {}

  async createPaymentLink(amount: number) {
    const upiLink = `upi://pay?pa=${this.opts.handle}&pn=${encodeURIComponent(
      this.opts.name
    )}&am=${amount / 100}&cu=INR`;
    return { upiLink, qr: '' };
  }
}
