import { NextResponse } from 'next/server';
import { organizations } from '@/lib/demo-data';

export async function GET() {
  return NextResponse.json({ data: organizations });
}
