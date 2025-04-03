import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {NextURL} from "next/dist/server/web/next-url";

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

  if (url.pathname === '/home') return redirectHome(url,true)

  if (subdomain === 'contact') {
    if (url.pathname === '/') {
      url.pathname = `/contact`;
      return NextResponse.rewrite(url);
    } else return redirectHome(url,false)
  }

  if (subdomain === 'codecore') {
    if (['/','/privacy-policy'].includes(url.pathname)) {
      url.pathname = `/codecore${url.pathname}`;
      return NextResponse.rewrite(url);
    } else return redirectHome(url,false)
  }

  return NextResponse.next();
}

function redirectHome(url: NextURL, removePath: boolean) {
  url.host = 'bysaether'
  if (removePath) {
    url.pathname = ''
    return NextResponse.redirect(url);
  }
  return NextResponse.rewrite(url);
}