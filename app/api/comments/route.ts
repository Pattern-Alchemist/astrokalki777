import { NextResponse } from 'next/server';

const comments = [
  {
    id: 'comment-1',
    organization_id: 'org_demo_1',
    author_id: 'user_demo_owner',
    body: 'Looks great!'
  }
];

export async function GET() {
  return NextResponse.json({ data: comments });
}
