import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Define public paths that don't require authentication
  const isPublicPath = path === '/auth/login' || 
                       path === '/auth/signup' || 
                       path === '/auth/forgot-password' ||
                       path === '/';
                       
  // Get the token from the cookies
  const token = request.cookies.get('next-auth.session-token')?.value || 
                request.cookies.get('__Secure-next-auth.session-token')?.value;
  
  // Redirect logic
  if (isPublicPath && token) {
    // If user is logged in and tries to access login/signup page, redirect to dashboard
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  if (!isPublicPath && !token) {
    // If user is not logged in and tries to access protected page, redirect to login
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
  
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/account/:path*',
    '/auth/login',
    '/auth/signup',
    '/auth/forgot-password'
  ],
}; 