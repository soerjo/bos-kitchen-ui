import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(_req: NextRequest) {
  // Public application: no login walls or authentication redirects
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/|api/).*)'],
};
