'use client';
import React, { Fragment } from 'react';
import NavBarList from '../../admin/nav-bar-list';
import NavBarLogout from '../../admin/nav-bar-logout';
import NavBarMobileButton from '../../admin/nav-bar-mobile';
import { signOut } from 'next-auth/react';
import { COMPANY_PROFILE } from '@/utils/data';
import NavBarLogo from './nav-bar-logo';
import Button from '../ui/button/button';
import Modal from '@/components/shared/layouts/modal';

export default function NavBar({ links }: { links: Link[] }) {
	const [showLogOut, setShowLogOut] = React.useState<boolean>(false);
	const [isLoggingOut, setIsLoggingOut] = React.useState<boolean>(false);
	return (
		<Fragment>
			<div className='hidden max-w-[204px] overflow-y-scroll h-screen md:flex flex-col justify-between gap-3 overflow-hidden bg-black py-8'>
				<div className='flex flex-col gap-5'>
					<NavBarLogo />
					<NavBarList links={links} />
				</div>
				<NavBarLogout onClick={() => setShowLogOut(true)} />
			</div>
			<NavBarMobileButton
				imageSrc={COMPANY_PROFILE.logo}
				links={links}
			/>
			<Modal isOpen={showLogOut}>
				<div className='bg-white rounded-lg w-[512px] shadow-mid'>
					<div className='flex justify-center items-center w-full h-16 border-b text-large font-bold relative'>
						<button
							onClick={() => setShowLogOut(false)}
							className='w-16 h-16 rounded-full absolute left-0 top-0 px-6'
						>
							<svg
								width={24}
								height={24}
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								preserveAspectRatio='none'
							>
								<path
									d='M5 5L18.9991 18.9991'
									stroke='#000001'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M5.00094 18.9991L19 5'
									stroke='#000001'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
						Log Out
					</div>
					<div className='flex flex-col gap-16 w-full p-10'>
						<div className='flex flex-col gap-6'>
							<div className='flex flex-col justify-center items-center cursor-pointer text-blue-600'>
								<svg
									width={132}
									height={132}
									viewBox='0 0 132 132'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='flex-grow-0 flex-shrink-0 w-[132px] h-[132px] relative'
									preserveAspectRatio='xMidYMid meet'
								>
									<rect
										width={132}
										height={132}
										rx={66}
										fill='currentColor'
										fillOpacity='0.12'
									/>
									<path
										d='M66.0013 47.667C55.8996 47.667 47.668 55.8987 47.668 66.0003C47.668 76.102 55.8996 84.3337 66.0013 84.3337C76.103 84.3337 84.3346 76.102 84.3346 66.0003C84.3346 55.8987 76.103 47.667 66.0013 47.667ZM64.6263 58.667C64.6263 57.9153 65.2496 57.292 66.0013 57.292C66.753 57.292 67.3763 57.9153 67.3763 58.667V67.8337C67.3763 68.5853 66.753 69.2087 66.0013 69.2087C65.2496 69.2087 64.6263 68.5853 64.6263 67.8337V58.667ZM67.688 74.0303C67.5963 74.2687 67.468 74.452 67.303 74.6353C67.1196 74.8003 66.918 74.9287 66.698 75.0203C66.478 75.112 66.2396 75.167 66.0013 75.167C65.763 75.167 65.5246 75.112 65.3046 75.0203C65.0846 74.9287 64.883 74.8003 64.6996 74.6353C64.5346 74.452 64.4063 74.2687 64.3146 74.0303C64.223 73.8103 64.168 73.572 64.168 73.3337C64.168 73.0953 64.223 72.857 64.3146 72.637C64.4063 72.417 64.5346 72.2153 64.6996 72.032C64.883 71.867 65.0846 71.7387 65.3046 71.647C65.7446 71.4637 66.258 71.4637 66.698 71.647C66.918 71.7387 67.1196 71.867 67.303 72.032C67.468 72.2153 67.5963 72.417 67.688 72.637C67.7796 72.857 67.8346 73.0953 67.8346 73.3337C67.8346 73.572 67.7796 73.8103 67.688 74.0303Z'
										fill='currentColor'
									/>
								</svg>
							</div>
							<p className='text-center'>
								Are you sure you want to Logout?
							</p>
						</div>
						<div className='flex items-center justify-between'>
							<Button
								variant='secondary'
								className=' w-48'
								onClick={() => setShowLogOut(false)}
							>
								Cancel
							</Button>
							<Button
								isLoading={isLoggingOut}
								className=' w-48'
								variant='primary'
								onClick={() => {
									setIsLoggingOut(true);
									signOut();
								}}
							>
								Logout
							</Button>
						</div>
					</div>
				</div>
			</Modal>
		</Fragment>
	);
}
