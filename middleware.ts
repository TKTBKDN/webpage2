import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { domain } from "./domain";

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.search.match(/fbclid/)
  ) {
    return NextResponse.redirect(
      domain + request.nextUrl.pathname + request.nextUrl.search
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}