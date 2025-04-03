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

  if (url.pathname === '/home') return redirectHome(url)

  if (subdomain === 'contact') {
    if (url.pathname === '/') {
      url.pathname = `/contact`;
      return NextResponse.redirect(url);
    } else return redirectHome(url,false)
  }

  if (subdomain === 'codecore') {
    if (['/','/privacy-policy'].includes(url.pathname)) {
      url.pathname = `/codecore${url.pathname}`;
      return NextResponse.rewrite(url);
    }
    return redirectHome(url,false)
  }

  return NextResponse.next();
}

function redirectHome(url: NextURL, removePath: boolean = true) {
  const targetUrl = new URL(url);
  targetUrl.host = 'localhost:3000'; // Use full domain

  if (removePath) {
    targetUrl.pathname = '/';
    return NextResponse.redirect(targetUrl.toString());
  }
  return NextResponse.rewrite(targetUrl.toString());
}