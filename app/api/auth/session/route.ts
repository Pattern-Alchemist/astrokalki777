import { NextResponse } from 'next/server';
import { getDemoUser } from '@/lib/auth';

export async function GET() {
  return NextResponse.json({ user: getDemoUser() });
}
