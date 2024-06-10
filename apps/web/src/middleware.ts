import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  if (url.pathname === "/" && process.env.USE_REDIRECT) {
    url.pathname = "/hoge";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|manifest.json|icons|mockServiceWorker.js|public|hotel/_next/images|hotel/_next/static|hotel/_next/data|hotel/_next/webpack-hmr).*)",
  ],
  missing: [
    { type: "header", key: "next-router-prefetch" },
    { type: "header", key: "purpose", value: "prefetch" },
  ],
};
