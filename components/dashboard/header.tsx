'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import IconButton from '../ui/button/icon-button';
import Link from 'next/link';
import BlurImage from '../ui/blur-image';
import { GetTitle } from '@/utils/function-helpers';
import { COMPANY_PROFILE } from '@/utils/data';
import { notificationIcon } from '@/utils/icons';
// import { useSession } from 'next-auth/react';

export default function Header() {
	const pathName = usePathname();

	if (
		pathName !== '/dashboard/profile' &&
		pathName !== '/dashboard/profile/services' &&
		pathName !== '/dashboard/profile/contact'
	) {
		return (
			<div className='w-full flex justify-between items-center p-4 md:px-10'>
				<div className='flex flex-col justify-start items-start gap-1'>
					<p className='flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black'>
						{GetTitle(pathName)}
					</p>
					{pathName === '/dashboard' && (
						<p className='flex-grow-0 flex-shrink-0 text-base text-left text-black'>
							Welcome back, {COMPANY_PROFILE.name}.
						</p>
					)}
				</div>
				<div className='flex justify-center items-center gap-8'>
					<IconButton
						notificationCount={
							COMPANY_PROFILE.notifications.length
						}
						href='/dashboard/notifications'
					>
						{notificationIcon}
					</IconButton>
					<div className='hidden md:flex justify-center items-center flex-grow-0 flex-shrink-0 w-fit relative gap-2'>
						<p className='flex-grow-0 flex-shrink-0 w-fit text-base font-bold text-left text-[#2b2b2b]'>
							{COMPANY_PROFILE.name}
						</p>
						<Link href={'/dashboard/profile'}>
							<div className='flex justify-center items-center overflow-hidden flex-grow-0 flex-shrink-0 w-11 h-11 rounded-full bg-black bg-cover bg-no-repeat bg-center'>
								<BlurImage
									src={COMPANY_PROFILE.logo}
									height={44}
									width={44}
									alt='profile image'
									className='w-full h-full object-center object-cover'
								/>
							</div>
						</Link>
					</div>
				</div>
			</div>
		);
	} else {
		return <></>;
	}
}
