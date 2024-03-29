import React, { Fragment } from 'react';
import TabMenu from '../profile/profile-tabs';
import { COMPANY_PROFILE, PROFILE_TAB } from '@/utils/data';
import BlurImage from '../shared/ui/blur-image';
import Link from 'next/link';

export default function TemplateOne({
	children,
	color,
}: {
	children: React.ReactNode;
	color: string;
}) {
	return (
		<Fragment>
			<div className='w-full h-[172px] relative'>
				<div className='overflow-hidden'>
					<BlurImage
						src={COMPANY_PROFILE.cardBanner}
						alt='header-image'
						width={1080}
						height={200}
						className='w-full h-[172px] object-center object-cover'
					/>
				</div>
				<Link
					href={'/admin/settings/edit-user'}
					className='flex justify-end items-center absolute right-0 md:right-10 top-5 gap-3 text-white'
				>
					<svg
						width={24}
						height={24}
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='flex-grow-0 flex-shrink-0 w-6 h-6 relative'
						preserveAspectRatio='none'
					>
						<path
							d='M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M16.0379 3.02025L8.15793 10.9003C7.85793 11.2003 7.55793 11.7903 7.49793 12.2203L7.06793 15.2303C6.90793 16.3203 7.67793 17.0803 8.76793 16.9303L11.7779 16.5003C12.1979 16.4403 12.7879 16.1403 13.0979 15.8403L20.9779 7.96025C22.3379 6.60025 22.9779 5.02025 20.9779 3.02025C18.9779 1.02025 17.3979 1.66025 16.0379 3.02025Z'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeMiterlimit={10}
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M14.9062 4.15039C15.5763 6.54039 17.4463 8.41039 19.8463 9.09039'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeMiterlimit={10}
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					<p className='flex-grow-0 flex-shrink-0 w-full text-base font-bold text-[#fffffe]'>
						Edit Profile
					</p>
				</Link>
				<div className='flex justify-start items-start absolute bottom-0 translate-y-1/2 left-4 md:left-10 gap-2'>
					<div className='flex-grow-0 flex-shrink-0 w-[120px] h-[120px] relative overflow-hidden rounded-full bg-gradient-to-b from-black/0 via-black/100 to-black/100 p-[2px]'>
						<BlurImage
							className='w-full h-full rounded-full object-center object-cover'
							src={COMPANY_PROFILE.adminPicture}
							alt='profile-image'
							height={110}
							width={110}
						/>
					</div>
					<div className='flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative'>
						<p className='flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-[#fffffe]'>
							{COMPANY_PROFILE.admin}
						</p>
						<p className='flex-grow-0 flex-shrink-0 text-xs text-left text-[#fffffe]'>
							{COMPANY_PROFILE.name} |{' '}
							{COMPANY_PROFILE.position}
						</p>
					</div>
				</div>
			</div>
			<div className='flex flex-col px-4 md:px-10 py-20 gap-6'>
				<TabMenu
					tabs={PROFILE_TAB}
					color={color}
				/>
				{children}
			</div>
		</Fragment>
	);
}
