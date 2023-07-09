'use client';
import './globals.css';
import { SessionProvider } from 'next-auth/react';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { Session } from 'next-auth';

const inter = Inter({ subsets: ['latin'] });

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
				<body className={inter.className}>
					<NextTopLoader showSpinner={false} />
					{children}
				</body>
			</SessionProvider>
		</html>
	);
}
