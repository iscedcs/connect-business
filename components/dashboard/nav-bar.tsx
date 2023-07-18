'use client';
import React, { Fragment } from 'react';
import NavBarLogo from './nav-bar-logo';
import NavBarList from './nav-bar-list';
import NavBarLogout from './nav-bar-logout';
import NavBarMobileButton from './nav-bar-mobile';
import { signOut } from 'next-auth/react';
import { COMPANY_PROFILE } from '@/utils/data';

export default function NavBar() {
	return (
		<Fragment>
			<div className='hidden max-w-[204px] overflow-y-scroll h-screen md:flex flex-col justify-between gap-3 overflow-hidden bg-black py-8'>
				<div className='flex flex-col gap-5'>
					<NavBarLogo />
					<NavBarList />
				</div>
				<NavBarLogout onClick={() => signOut()} />
			</div>
			<NavBarMobileButton
				imageSrc={COMPANY_PROFILE.logo}
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
						title: 'logout',
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
