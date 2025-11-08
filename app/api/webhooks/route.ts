import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.text();
  console.info('Webhook received', body);
  return NextResponse.json({ received: true });
}
