import Header from '@/components/admin/header';
import NavBar from '@/components/shared/nav-bar/nav-bar';
import { ADMIN_NAVLINKS } from '@/utils/data';
import { getData } from '../lib/server-functions';

export const metadata = {
	title: 'Dashboard',
	description: 'The Dashboard For Connect For Business',
};

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const data: DashboardDataP = await getData();
	const businessname = data.data.user?.name;
	return (
		<div className='w-full h-screen md:h-screen relative flex overflow-hidden bg-black px-2 py-2'>
			<NavBar links={ADMIN_NAVLINKS} />
			<div className='w-full h-full flex flex-col gap-3 overflow-hidden rounded-2xl bg-white'>
				<>
					<Header name={businessname} />
					<div className='h-full overflow-y-scroll mb-3'>
						{children}
					</div>
				</>
			</div>
		</div>
	);
}
