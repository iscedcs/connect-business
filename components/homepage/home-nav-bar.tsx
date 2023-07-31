'use client';

import React from 'react';
import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import NavBarLogo from '../shared/nav-bar/nav-bar-logo';
import { Session } from 'next-auth';

export default function NavBarHome({ session }: { session: Session | null }) {
	return (
		<div className='w-screen flex justify-between items-center bg-gray-300 px-5'>
			<NavBarLogo />
			<ul className='flex gap-3'>
				<li>
					<Link href='/admin'>Dashboard</Link>
				</li>
			</ul>
			<div>
				{session ? (
					<div className='flex gap-3'>
						<button onClick={() => signOut()}>Log Out</button>
					</div>
				) : (
					<button onClick={() => signIn()}>SignIn</button>
				)}
			</div>
		</div>
	);
}
