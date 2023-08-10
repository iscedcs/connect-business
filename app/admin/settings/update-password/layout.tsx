export const metadata = {
	title: 'Dashboard | Settings - Update Password',
	description: 'ISCE Connect for Businesses, Teams, Groups and many more.',
};

export default async function UpdatePasswordLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className='h-full overflow-y-scroll'>{children}</div>;
}
