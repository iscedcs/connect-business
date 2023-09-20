import NavBarHome from '@/components/homepage/home-nav-bar';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';

export default async function Home() {
	const session = await getServerSession(options);
	return (
		<div className='flex items-center justify-center flex-col'>
			<NavBarHome session={session} />
			Welcome to connect for business
			<p>Waiting for an home page</p>
		</div>
	);
}
