'use client';
import Header from '@/components/dashboard/header';
import SearchBar from '@/components/dashboard/search-bar';
import React, { Fragment } from 'react';

export default function Chat() {
	return (
		<Fragment>
			<Header
				profileImage='/img/avatar.jpeg'
				headerTitle='Chat'
				profileName='Da Civic'
				notificationCount={10}
			/>
			{/* <SearchBar /> */}
			<div className='grid grid-cols-12 w-full h-full gap-6 py-5 overflow-hidden'></div>
		</Fragment>
	);
}
