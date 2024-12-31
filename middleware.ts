import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || '';

  const [subdomain] = host.split('.');

  if (subdomain === 'support') {
    const url = req.nextUrl.clone();
    url.pathname = `/support${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}