import React from 'react';
import NavBarLogo from './nav-bar-logo';
import NavBarList from './nav-bar-list';
import NavBarLogout from './nav-bar-logout';

export default function NavBar() {
	return (
		<div className='max-w-[204px] overflow-y-scroll h-full flex flex-col justify-between overflow-hidden bg-black py-8'>
			<div className=''>
				<NavBarLogo />
				<NavBarList />
			</div>
			<NavBarLogout />
		</div>
	);
}
