import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Stripe webhook disabled sementara
  return NextResponse.json({ received: true });
}
