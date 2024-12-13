import { NextRequest, NextResponse } from "next/server";

export default function middleware(request) {
  const token = request.cookies.get("next-auth.session-token")?.value;

  const path = request.nextUrl.pathname;
  console.log(path);

  if (!token && path !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/view/:path*", "/seller/:path*", "/service-provider/:path*"],
};
