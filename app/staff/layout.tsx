import Header from '@/components/admin/header';
import NavBar from '@/components/shared/nav-bar/nav-bar';
import { STAFF_NAVLINKS } from '@/utils/data';
import { getHeaderDetails } from '@/utils/get-data';

export const metadata = {
	title: 'Dashboard',
	description: 'The Dashboard For Connect For Business',
};

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='w-full h-screen md:h-screen relative flex overflow-hidden bg-black px-2 py-2'>
			<NavBar links={STAFF_NAVLINKS} />
			<div className='w-full h-full flex flex-col gap-3 overflow-hidden rounded-2xl bg-white'>
				<Header />
				<div className='h-full overflow-y-scroll'>{children}</div>
			</div>
		</div>
	);
}
