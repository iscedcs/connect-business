export { default } from 'next-auth/middleware';

export const config = { matcher: ['/dashboard/:path*'] };
// export const config = { matcher: ['/about/:path*'] };
