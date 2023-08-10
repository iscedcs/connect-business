export const metadata = {
	title: 'Dashboard | Settings | Socials',
	description: 'ISCE Connect for Businesses, Teams, Groups and many more.',
};

export default async function EditSocialLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className='h-full overflow-y-scroll'>{children}</div>;
}
