'use client';
import React, { Fragment } from 'react';
import NavBarLogo from './nav-bar-logo';
import NavBarList from './nav-bar-list';
import NavBarLogout from './nav-bar-logout';
import NavBarMobileButton from './nav-bar-mobile';
import { signOut } from 'next-auth/react';

export default function NavBar() {
	return (
		<Fragment>
			<div className='hidden max-w-[204px] overflow-y-scroll h-full md:flex flex-col justify-between overflow-hidden bg-black py-8'>
				<div className=''>
					<NavBarLogo />
					<NavBarList />
				</div>
				<NavBarLogout onClick={() => signOut()} />
			</div>
			<NavBarMobileButton
				imageSrc='/img/avatar.jpeg'
				links={[
					{
						title: 'Dashboard',
						href: '/dashboard',
						bgColor: 'bg-black',
						borderColor: 'border-white',
						icon: '/icons/dashboard-active.svg',
					},
					{
						title: 'Employees',
						href: '/dashboard/employees',
						bgColor: 'bg-black',
						borderColor: 'border-white',
						icon: '/icons/employees-active.svg',
					},
					{
						title: 'Appointments',
						href: '/dashboard/appointments',
						bgColor: 'bg-black',
						borderColor: 'border-white',
						icon: '/icons/appointments-active.svg',
					},
					{
						title: 'Invoices',
						href: '/dashboard/invoices',
						bgColor: 'bg-black',
						borderColor: 'border-white',
						icon: '/icons/invoices-active.svg',
					},
					{
						title: 'Chat',
						href: '/dashboard/chat',
						bgColor: 'bg-black',
						borderColor: 'border-white',
						icon: '/icons/chat-active.svg',
					},
					{
						title: 'Settings',
						href: '/dashboard/settings',
						bgColor: 'bg-black',
						borderColor: 'border-white',
						icon: '/icons/settings-active.svg',
					},
					{
						title: 'Logout',
						href: '/dashboard/logout',
						bgColor: 'bg-black',
						borderColor: 'border-white',
						icon: '/icons/logout-active.svg',
					},
				]}
			/>
		</Fragment>
	);
}
