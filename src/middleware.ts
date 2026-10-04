// Route protection. Runs BEFORE any page loads.
// - /admin/*  requires role === ADMIN
// - /couple/* requires role === COUPLE (or ADMIN, for support access)
// Anyone else is redirected to /login.
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const role = (req.nextauth.token as any)?.role;
    const path = req.nextUrl.pathname;

    if (path.startsWith("/admin") && role !== "ADMIN") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    if (path.startsWith("/couple") && role !== "COUPLE" && role !== "ADMIN") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  },
  { pages: { signIn: "/login" } }
);

export const config = {
  matcher: ["/admin/:path*", "/couple/:path*"],
};
