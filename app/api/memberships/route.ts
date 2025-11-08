import { NextResponse } from 'next/server';

const memberships = [
  { id: 'm-1', user_id: 'user_demo_owner', organization_id: 'org_demo_1', role: 'owner' }
];

export async function GET() {
  return NextResponse.json({ data: memberships });
}
