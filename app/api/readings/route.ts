import { NextResponse } from 'next/server';
import { readings } from '@/lib/demo-data';

export async function GET() {
  return NextResponse.json({ data: readings });
}
