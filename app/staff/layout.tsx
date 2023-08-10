import Header from '@/components/admin/header';
import NavBar from '@/components/shared/nav-bar/nav-bar';
import { STAFF_NAVLINKS } from '@/utils/data';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';

export const metadata = {
	title: 'ISCE | Connect For Business',
	description: 'ISCE Connect for Businesses, Teams, Groups and many more.',
};

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(options);
	return (
		<div className='w-full h-screen md:h-screen relative flex overflow-hidden bg-black px-2 py-2'>
			<NavBar links={STAFF_NAVLINKS} />
			<div className='w-full h-full flex flex-col gap-3 overflow-hidden rounded-2xl bg-white'>
				{session?.user.role !== 'admin' ? (
					<>
						<Header />
						<div className='h-full overflow-y-scroll'>
							{children}
						</div>
					</>
				) : (
					<div>You are not authorized </div>
				)}
			</div>
		</div>
	);
}
