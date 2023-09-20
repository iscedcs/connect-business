export const metadata = {
	title: 'Dashboard | Settings | User Profile',
	description: 'ISCE Connect for Businesses, Teams, Groups and many more.',
};

export default async function EditUserLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className='h-full overflow-y-scroll'>{children}</div>;
}
