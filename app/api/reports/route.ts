import { NextResponse } from 'next/server';
import { reports } from '@/lib/demo-data';

export async function GET() {
  return NextResponse.json({ data: reports });
}
