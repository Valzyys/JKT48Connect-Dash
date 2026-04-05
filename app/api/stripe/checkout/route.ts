import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Stripe checkout disabled — redirect langsung ke dashboard
  return NextResponse.redirect(new URL('/dashboard', request.url));
}
