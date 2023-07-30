import './globals.css';
import { Mulish } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import Provider from '@/components/helpers/session-provider';

const mulish = Mulish({
	subsets: ['latin'],
});

export const metadata = {
	title: 'Connect For Business',
	description: 'The Business Version For Connect',
	viewport:
		'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
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
