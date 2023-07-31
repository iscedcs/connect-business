// import { NextRequest, NextResponse } from 'next/server';

export { default } from 'next-auth/middleware';

export const config = { matcher: ['/admin/:path*', '/staff/:path*'] };

// export function middleware(req: NextRequest) {
// 	const response = NextResponse.next();
// 	const allCookies = req.cookies;

// 	response.cookies.set('accessToken', 'jnfindnondbjkfklbnfdkhjbkjhbfkjbf');
// 	console.log('response', response.cookies);
// 	console.log('allCookies', allCookies);
// 	return NextResponse.next();
// }
