import TabMenu from '@/components/profile/profile-tabs';
import { CUSTOMIZE_TAB } from '@/utils/data';
import React, { Fragment } from 'react';

export const metadata = {
	title: 'Dashboard | Settings - Customize Profile',
	description: 'ISCE Connect for Businesses, Teams, Groups and many more.',
};

export default function CustomizeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Fragment>
			<div className='px-5 lg:px-10'>
				<TabMenu tabs={CUSTOMIZE_TAB} />
				<div className='mt-5'>{children}</div>
			</div>
		</Fragment>
	);
}
