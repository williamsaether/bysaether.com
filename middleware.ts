import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || '';

  const [subdomain] = host.split('.');

  if (subdomain === 'contact') {
    const url = req.nextUrl.clone();
    url.pathname = `/contact`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}