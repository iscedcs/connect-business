import { withAuth } from 'next-auth/middleware';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

export const config = { matcher: ['/admin/:path*', '/staff/:path*'] };

export default withAuth(
	function middleware(request) {
		const response = NextResponse.next();
		response.cookies.set(
			'accessToken',
			request.nextauth.token?.access_token as string
		);
		response.cookies.set('role', request.nextauth.token?.role as string);
		if (
			request.nextauth.token?.role !== 'admin' &&
			request.nextUrl.pathname.startsWith('/admin')
		) {
			return NextResponse.rewrite(new URL('/staff', request.url));
		}
	},
	{
		callbacks: { authorized: ({ token }) => !!token },
	}
);
