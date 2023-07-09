import NavBarHome from '@/components/homepage/home-nav-bar';

export const metadata = {
	title: 'Connect For Business',
	description: 'The Business Version For Connect',
	viewport:
		'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
};

export default function Home() {
	return (
		<div className='flex items-center justify-center flex-col'>
			<NavBarHome />
			Welcome to connect for business
			<p>Waiting for an home page</p>
		</div>
	);
}
