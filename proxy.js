import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// public routes anyone can access
const publicRoutes = ["/", "/login", "/register"];

// protected routes (login required)
const protectedRoutes = ["/dev"];

export async function proxy(request) {
  const { pathname, search } = request.nextUrl;

  // getting the token to check if the user is logged in and to get their role
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isLoggedIn = Boolean(token?.sub);
  const isProtectedRoute = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  const isPublicRoute = publicRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  // 1. User is not logged in and tries to access protected routes
  if (isProtectedRoute && !isLoggedIn) {
    const loginUrl = new URL("/login", request.url);
    const nextPath = pathname + search;
    loginUrl.searchParams.set("next", nextPath);
    return NextResponse.redirect(loginUrl);
  }

  if (!isProtectedRoute && !isPublicRoute) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /* Protected routes */
    "/dev/:path*",
  ],
};
