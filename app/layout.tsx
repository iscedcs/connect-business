import './globals.css';
import { Mulish } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import Provider from '@/components/helpers/session-provider';

const mulish = Mulish({
	subsets: ['latin'],
});

export const metadata = {
	title: 'ISCE | Connect For Business',
	description: 'ISCE Connect for Businesses, Teams, Groups and many more.',
	viewport:
		'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
	manifest: '/manifest.json',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<Provider>
				<body className={`${mulish.className}`}>
					<NextTopLoader showSpinner={false} />
					{children}
				</body>
			</Provider>
		</html>
	);
}
