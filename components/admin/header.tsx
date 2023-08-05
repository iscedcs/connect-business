'use client';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';
import { GetTitle } from '@/utils/function-helpers';
import { COMPANY_PROFILE } from '@/utils/data';
import { notificationIcon } from '@/utils/icons';
import IconButton from '@/components/shared/ui/button/icon-button';
import BlurImage from '@/components/shared/ui/blur-image';
import { NextResponse } from 'next/server';

const Header = () => {
	const [dashboardD, setDashboardD] = useState('');
	let pathName = usePathname();

	React.useEffect(() => {
		const getData = async () => {
			const response = await fetch('/api/dashboard', {
				// next: { revalidate: 60 },
			});
			if (response.status !== 200) {
				console.log(NextResponse.json(response));
				throw new Error('Something Went wrong');
			} else {
				const dd = await response.json();
				setDashboardD(dd?.data?.user?.name);
				console.log(dd);
				return NextResponse.json(dd);
			}
		};
		getData();
	}, []);

	if (
		pathName !== '/admin/profile' &&
		pathName !== '/admin/profile/services' &&
		pathName !== '/admin/profile/contact'
	) {
		return (
			<div className='w-full flex justify-between items-center p-4 md:px-10'>
				<div className='flex flex-col justify-start items-start gap-1'>
					<p className='flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black'>
						{GetTitle(pathName)}
					</p>
					{pathName === '/admin' && (
						<p className='flex-grow-0 flex-shrink-0 text-base text-left text-black'>
							Welcome back, {dashboardD}.
						</p>
					)}
				</div>
				<div className='flex justify-center items-center gap-8'>
					<IconButton
						notificationCount={
							COMPANY_PROFILE.notifications.length
						}
						href='/admin/notifications'
					>
						{notificationIcon}
					</IconButton>
					<div className='hidden md:flex justify-center items-center flex-grow-0 flex-shrink-0 w-fit relative gap-2'>
						<p className='flex-grow-0 flex-shrink-0 w-fit text-base font-bold text-left text-[#2b2b2b]'>
							{dashboardD}
						</p>
						<Link href={'/admin/profile'}>
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
};

export default Header;
