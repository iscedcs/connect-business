'use client';
import React, { Fragment } from 'react';
import NavBarList from '../../admin/nav-bar-list';
import NavBarLogout from '../../admin/nav-bar-logout';
import NavBarMobileButton from '../../admin/nav-bar-mobile';
import { signOut } from 'next-auth/react';
import { COMPANY_PROFILE } from '@/utils/data';
import NavBarLogo from './nav-bar-logo';

export default function NavBar({ links }: { links: Link[] }) {
	return (
		<Fragment>
			<div className='hidden max-w-[204px] overflow-y-scroll h-screen md:flex flex-col justify-between gap-3 overflow-hidden bg-black py-8'>
				<div className='flex flex-col gap-5'>
					<NavBarLogo />
					<NavBarList links={links} />
				</div>
				<NavBarLogout onClick={() => signOut()} />
			</div>
			<NavBarMobileButton
				imageSrc={COMPANY_PROFILE.logo}
				links={links}
			/>
		</Fragment>
	);
}
