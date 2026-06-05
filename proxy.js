import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const authRoutes = ["/login", "/register"];

// protected routes
const protectedRoutes = ["/dev"];

export async function proxy(request) {
  const { pathname, search } = request.nextUrl;

  // sesstion token checking
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isLoggedIn = Boolean(token?.sub);

  // checking if the current path is an auth route or a protected route
  const isAuthRoute = authRoutes.some((route) => pathname === route);
  const isProtectedRoute = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  // if the user is trying to access an auth route (like /login or /register) while already logged in
  if (isAuthRoute && isLoggedIn) {
    // তাকে সরাসরি হোমে (/) পাঠিয়ে দেওয়া হবে
    return NextResponse.redirect(new URL("/", request.url));
  }

  //  if the user is trying to access a protected route without being logged in
  if (isProtectedRoute && !isLoggedIn) {
    const loginUrl = new URL("/login", request.url);
    const nextPath = pathname + search;
    loginUrl.searchParams.set("next", nextPath);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
