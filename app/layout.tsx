'use client';
import './globals.css';
import { SessionProvider } from 'next-auth/react';
import { Mulish } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
// import { Session } from 'next-auth';

const mulish = Mulish({
	weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

// interface NextAuthSession extends Session {
// 	user: {
// 		id: string;
// 		name: string;
// 		email: string;
// 	};
// }

export default function RootLayout({
	children,
	session,
}: {
	children: React.ReactNode;
	session: any;
	// session: NextAuthSession;
}) {
	return (
		<html lang='en'>
			<SessionProvider session={session}>
				<body className={`${mulish.className}`}>
					<NextTopLoader showSpinner={false} />
					{children}
				</body>
			</SessionProvider>
		</html>
	);
}
