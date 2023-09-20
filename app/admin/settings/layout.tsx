export const metadata = {
	title: 'Dashboard | Settings',
	description: 'ISCE Connect for Businesses, Teams, Groups and many more.',
};

export default async function SettingsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className='h-full overflow-y-scroll'>{children}</div>;
}
