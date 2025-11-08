import { NextResponse } from 'next/server';

const openapiDocument = {
  openapi: '3.0.3',
  info: {
    title: 'AstroKalki API',
    version: '1.0.0'
  },
  servers: [{ url: 'https://api.astrokalki.com' }],
  paths: {
    '/v1/readings': {
      get: {
        summary: 'List readings',
        responses: {
          '200': {
            description: 'Successful response'
          }
        }
      }
    }
  }
};

export function GET() {
  return NextResponse.json(openapiDocument);
}
