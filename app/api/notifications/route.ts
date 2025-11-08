import { NextResponse } from 'next/server';

const notifications = [
  { id: 'notif-1', title: 'Report ready', channel: 'email' }
];

export async function GET() {
  return NextResponse.json({ data: notifications });
}
