export class AstroKalkiClient {
  constructor(options) {
    this.options = options;
  }

  get baseUrl() {
    return this.options.baseUrl ?? 'https://api.astrokalki.com';
  }

  async listReadings() {
    const response = await fetch(`${this.baseUrl}/v1/readings`, {
      headers: {
        Authorization: `Bearer ${this.options.apiKey}`
      }
    });
    return response.json();
  }
}
