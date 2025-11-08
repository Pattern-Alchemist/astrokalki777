import { NextRequest, NextResponse } from 'next/server';

const WILDCARD_DOMAIN = process.env.WILDCARD_DOMAIN ?? '.astrokalki.test';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? '';
  const headers = new Headers(request.headers);
  if (host.endsWith(WILDCARD_DOMAIN)) {
    const subdomain = host.replace(WILDCARD_DOMAIN, '');
    headers.set('x-astrokalki-org', subdomain);
  }
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ['/((?!_next|api|developer/openapi.json).*)']
};
