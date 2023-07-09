'use client';

import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import NavBarLogo from '../dashboard/nav-bar-logo';
import Link from 'next/link';

export default function NavBarHome() {
	const { data: session } = useSession();
	return (
		<div className='w-screen flex justify-between items-center bg-gray-300 px-5'>
			<NavBarLogo />
			<ul className='flex gap-3'>
				<li>
					<Link href='/dashboard'>Dashboard</Link>
				</li>
			</ul>
			<div>
				{session?.user ? (
					<div className='flex gap-3'>
						{session.user.email}
						<button onClick={() => signOut()}>Log Out</button>
					</div>
				) : (
					<button onClick={() => signIn()}>SignIn</button>
				)}
			</div>
		</div>
	);
}
