export const metadata = {
	title: 'Dashboard | Settings - Edit Services',
	description: 'ISCE Connect for Businesses, Teams, Groups and many more.',
};

export default async function BusinessServicesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className='h-full overflow-y-scroll'>{children}</div>;
}
