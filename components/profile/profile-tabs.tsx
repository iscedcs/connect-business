import React from 'react';
import TabItem from './tab-item';

export default function ProfileTab() {
	return (
		<div className='flex justify-start gap-5'>
			<TabItem
				text='About Us'
				href='/dashboard/profile'
			/>
			<TabItem
				text='Our Services'
				href='/dashboard/profile/services'
			/>
			<TabItem
				text='Contact Us'
				href='/dashboard/profile/contact'
			/>
		</div>
	);
}
