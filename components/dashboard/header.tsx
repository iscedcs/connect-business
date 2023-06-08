'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';
import IconButton from '../ui/button/icon-button';
import Link from 'next/link';

export default function Header({
	headerTitle,
	profileName,
	profileImage,
	notificationCount,
}: HeaderProps) {
	const pathName = usePathname();
	return (
		<div className='w-full flex justify-between items-center h-8 md:h-[60px]'>
			<div className='flex flex-col justify-start items-start gap-1'>
				<p className='flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black'>
					{headerTitle}
				</p>
				{pathName === '/dashboard' && (
					<p className='flex-grow-0 flex-shrink-0 text-base text-left text-black'>
						Welcome back, {profileName}.
					</p>
				)}
			</div>
			<div className='flex justify-center items-center gap-8'>
				<IconButton
					notificationCount={notificationCount}
					href='/dashboard/notifications'
				>
					<svg
						width={20}
						height={20}
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='flex-grow-0 flex-shrink-0 w-5 h-5'
						preserveAspectRatio='none'
					>
						<path
							d='M12.0206 2.90997C8.71058 2.90997 6.02058 5.59997 6.02058 8.90997V11.8C6.02058 12.41 5.76058 13.34 5.45058 13.86L4.30058 15.77C3.59058 16.95 4.08058 18.26 5.38058 18.7C9.69058 20.14 14.3406 20.14 18.6506 18.7C19.8606 18.3 20.3906 16.87 19.7306 15.77L18.5806 13.86C18.2806 13.34 18.0206 12.41 18.0206 11.8V8.90997C18.0206 5.60997 15.3206 2.90997 12.0206 2.90997Z'
							stroke='#000001'
							strokeWidth='1.5'
							strokeMiterlimit={10}
							strokeLinecap='round'
						/>
						<path
							d='M13.8699 3.2C13.5599 3.11 13.2399 3.04 12.9099 3C11.9499 2.88 11.0299 2.95 10.1699 3.2C10.4599 2.46 11.1799 1.94 12.0199 1.94C12.8599 1.94 13.5799 2.46 13.8699 3.2Z'
							stroke='#000001'
							strokeWidth='1.5'
							strokeMiterlimit={10}
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M15.0195 19.06C15.0195 20.71 13.6695 22.06 12.0195 22.06C11.1995 22.06 10.4395 21.72 9.89953 21.18C9.35953 20.64 9.01953 19.88 9.01953 19.06'
							stroke='#000001'
							strokeWidth='1.5'
							strokeMiterlimit={10}
						/>
					</svg>
				</IconButton>
				<div className='hidden md:flex justify-center items-center flex-grow-0 flex-shrink-0 w-[124px] relative gap-2'>
					<p className='flex-grow-0 flex-shrink-0 w-[72px] text-base font-bold text-left text-[#2b2b2b]'>
						{profileName}
					</p>
					<Link href={'/dashboard/profile'}>
						<div className='flex justify-center items-center overflow-hidden flex-grow-0 flex-shrink-0 w-11 h-11 rounded-full bg-black bg-cover bg-no-repeat bg-center'>
							<Image
								src={profileImage}
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
}
