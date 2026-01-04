import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  // Add signup logic here
  return NextResponse.json({ success: true, user: { id: '1', email: body.email } })
}
