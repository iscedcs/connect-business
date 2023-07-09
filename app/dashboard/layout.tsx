import React from 'react';
import NavBar from '../../components/dashboard/nav-bar';

export const metadata = {
	title: 'Dashboard',
	description: 'The Dashboard For Connect For Business',
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='w-full min-h-screen md:h-screen relative flex overflow-hidden bg-black px-2 py-2'>
			<NavBar />
			{/* <div className='w-full md:h-full flex flex-col gap-3 overflow-hidden rounded-2xl bg-white p-5 lg:p-10'> */}
			<div className='w-full md:h-full flex flex-col gap-3 overflow-hidden rounded-2xl bg-white'>
				{children}
			</div>
		</div>
	);
}
