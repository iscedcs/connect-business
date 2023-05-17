'use client';
import Header from '@/components/dashboard/header';
import React, { Fragment } from 'react';

export default function Logout() {
	return (
		<Fragment>
			<Header
				profileImage='/img/avatar.jpeg'
				headerTitle='Logout'
				profileName='Da Civic'
				notificationCount={10}
			/>
			<div className='grid grid-cols-12 w-full h-full gap-6 py-5 overflow-hidden'></div>
		</Fragment>
	);
}
