'use client';
import React from 'react';
import NavBarItem from './nav-bar-item';
import { usePathname } from 'next/navigation';

export default function NavBarList() {
	const pathname = usePathname();
	return (
		<div>
			<NavBarItem
				name='Dashboard'
				href='/dashboard'
				activeIcon='/icons/dashboard-active.svg'
				icon='/icons/dashboard.svg'
				active={pathname === '/dashboard'}
			/>

			<NavBarItem
				name='Employees'
				href='/dashboard/employees'
				activeIcon='/icons/employees-active.svg'
				icon='/icons/employees.svg'
				active={pathname === '/dashboard/employees'}
			/>

			<NavBarItem
				name='Appointments'
				href='/dashboard/appointments'
				activeIcon='/icons/appointments-active.svg'
				icon='/icons/appointments.svg'
				active={pathname === '/dashboard/appointments'}
			/>

			<NavBarItem
				name='Invoices'
				href='/dashboard/invoices'
				activeIcon='/icons/invoices-active.svg'
				icon='/icons/invoices.svg'
				active={pathname === '/dashboard/invoices'}
			/>

			<NavBarItem
				name='Chat'
				href='/dashboard/chat'
				activeIcon='/icons/chat-active.svg'
				icon='/icons/chat.svg'
				active={pathname === '/dashboard/chat'}
			/>

			<NavBarItem
				name='Settings'
				href='/dashboard/settings'
				activeIcon='/icons/settings-active.svg'
				icon='/icons/settings.svg'
				active={pathname === '/dashboard/settings'}
			/>
		</div>
	);
}
