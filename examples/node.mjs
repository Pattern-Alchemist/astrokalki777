import { AstroKalkiClient } from '../sdk/js/index.mjs';

const client = new AstroKalkiClient({ apiKey: process.env.ASTROKALKI_KEY ?? 'demo-key' });
const readings = await client.listReadings();
console.log(readings);
