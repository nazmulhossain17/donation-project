import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    console.log('Token:', token);

    const { pathname } = req.nextUrl;
    console.log('Pathname:', pathname);

    // Check if the user is authenticated
    if (token as object) {
      const userRole = (token?.user as { role?: string })?.role;


      // Check the user's role and redirect accordingly
      if (userRole === 'admin') {
        // Allow access to /dashboard, /create, /all
        if (pathname.startsWith('/dashboard') || pathname.startsWith('/create') || pathname.startsWith('/all')) {
          console.log('Allowed access for admin');
          return NextResponse.next();
        }
      } else if (userRole === 'user') {
        if (pathname.startsWith('/profile')) {
          console.log('Allowed access for user');
          return NextResponse.next();
        } else {
          console.log('Redirecting user to home page');
          return NextResponse.redirect(`${process.env.NEXTAUTH_URL}`);
        }
      }
    }

    // Redirect unauthenticated users to the home page
    console.log('Redirecting unauthenticated user to home page');
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}`);
  } catch (error) {
    console.error('Error in middleware:', error);
    return NextResponse.error();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  // Adjust the paths based on your routing structure
  matcher: ['/dashboard/:path*', '/create/:path*', '/all/:path*', '/profile/:path*'],
};
