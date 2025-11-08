export type AstroKalkiClientOptions = {
  apiKey: string;
  baseUrl?: string;
};

export class AstroKalkiClient {
  constructor(private options: AstroKalkiClientOptions) {}

  private get baseUrl() {
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
