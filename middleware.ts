import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|images/|[\\w-]+\\.\\w+).*)",
  ],
};

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || '';
  const [subdomain] = host.split('.');

  const url = req.nextUrl.clone();

  if (subdomain === 'contact') {
    if (url.pathname === '/') {
      url.pathname = `/contact`;
      return NextResponse.rewrite(url);
    } else {
      url.hostname = 'bysaether.com'
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}