import React from 'react';
import NavBar from '../../components/dashboard/nav-bar';
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
	title: 'Dashboard',
	description: 'The Dashboard For Connect For Business',
	viewport:
		'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='w-full min-h-screen md:h-screen relative flex overflow-hidden bg-black px-2 py-2'>
			<NextTopLoader showSpinner={false} />
			<NavBar />
			{/* <div className='w-full md:h-full flex flex-col gap-3 overflow-hidden rounded-2xl bg-white p-5 lg:p-10'> */}
			<div className='w-full md:h-full flex flex-col gap-3 overflow-hidden rounded-2xl bg-white'>
				{children}
			</div>
		</div>
	);
}
