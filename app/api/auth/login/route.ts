import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  // Add login logic here
  return NextResponse.json({ success: true, token: 'sample-token' })
}
