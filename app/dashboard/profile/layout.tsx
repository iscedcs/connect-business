import TabMenu from '@/components/profile/profile-tabs';
import BlurImage from '@/components/ui/blur-image';
import { COMPANY_PROFILE, PROFILE_TAB } from '@/utils/data';
import Link from 'next/link';
import React, { Fragment } from 'react';

export default function ProfileLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const activeTemplate = COMPANY_PROFILE.templates.find(
		(template) => template.active
	);
	const defaultTemplate = COMPANY_PROFILE.templates.find(
		(template) => template.default
	);
	const template = activeTemplate ? activeTemplate : defaultTemplate;

	let layout;
	switch (template?.name) {
		case 'Template-1':
			layout = (
				// Layout for Template-1
				<Fragment>
					<div className='w-full h-[172px] relative'>
						<div className='overflow-hidden'>
							<BlurImage
								src={'/img/header-image.jpg'}
								alt='header-image'
								width={1080}
								height={200}
								className='w-full h-[172px] object-center object-cover'
							/>
						</div>
						<div className='flex justify-end items-center absolute right-10 bottom-10 gap-3 text-white'>
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
						</div>
						<div className='flex justify-start items-start absolute bottom-0 translate-y-1/2 left-10 gap-2'>
							<div className='flex-grow-0 flex-shrink-0 w-[120px] h-[120px] relative overflow-hidden rounded-full bg-gradient-to-b from-black/0 via-black/100 to-black/100 p-[2px]'>
								<BlurImage
									className='w-full h-full rounded-full object-center object-cover'
									src='/img/profile-image.jpg'
									alt='profile-image'
									height={110}
									width={110}
								/>
							</div>
							<div className='flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative'>
								<p className='flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-[#fffffe]'>
									Seun Babs
								</p>
								<p className='flex-grow-0 flex-shrink-0 text-xs text-left text-[#fffffe]'>
									Da Civic Events | CEO
								</p>
							</div>
						</div>
					</div>
					<div className='flex flex-col px-10 py-20 gap-10'>
						<TabMenu
							tabs={PROFILE_TAB}
							color={template.themeColor}
						/>
						{children}
					</div>
				</Fragment>
			);
			break;
		case 'Template-2':
			layout = (
				// Layout for Template-2
				<Fragment>
					<div className='w-full h-[192px] relative'>
						<div className='overflow-hidden'>
							<BlurImage
								src={'/img/header-image.jpg'}
								alt='header-image'
								width={1080}
								height={200}
								className='w-full h-[192px] object-center object-cover'
							/>
						</div>
						<div className='flex justify-end items-center absolute right-10 bottom-10 gap-3 text-white'>
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
						</div>
						<div className='flex flex-col justify-center items-center absolute top-3/4 p-10 left-1/2 -translate-x-1/2 gap-4 w-[800px] bg-white rounded-2xl shadow-mid'>
							<div className='flex-grow-0 flex-shrink-0 w-[120px] h-[120px] relative overflow-hidden rounded-full bg-gradient-to-b from-black/0 via-black/100 to-black/100 p-[2px]'>
								<BlurImage
									className='w-full h-full rounded-full object-center object-cover'
									src='/img/profile-image.jpg'
									alt='profile-image'
									height={110}
									width={110}
								/>
							</div>
							<div className='flex flex-col gap-2 justify-center items-start flex-grow-0 flex-shrink-0 relative'>
								<p className='flex-grow-0 flex-shrink-0 text-2xl font-bold text-center w-full'>
									Seun Babs
								</p>
								<p className='flex-grow-0 flex-shrink-0 text-xs text-center w-full'>
									Da Civic Events | CEO
								</p>
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center mt-[180px] text-center px-10 py-20 gap-10'>
						<TabMenu
							tabs={PROFILE_TAB}
							color={template.themeColor}
						/>
						{children}
					</div>
				</Fragment>
			);
			break;
		case 'Template-3':
			layout = (
				// Layout for Template-3
				<Fragment>
					<div className='w-full relative flex gap-8 p-8'>
						<div className='flex flex-col justify-center items-center p-5 gap-4 w-[200px] h-[250px] bg-white rounded-2xl shadow-mid'>
							<div className='flex-grow-0 flex-shrink-0 w-[120px] h-[120px] relative overflow-hidden rounded-full bg-gradient-to-b from-black/0 via-black/100 to-black/100 p-[2px]'>
								<BlurImage
									className='w-full h-full rounded-full object-center object-cover'
									src='/img/profile-image.jpg'
									alt='profile-image'
									height={110}
									width={110}
								/>
							</div>
							<div className='flex flex-col gap-2 justify-center items-start flex-grow-0 flex-shrink-0 relative'>
								<p className='flex-grow-0 flex-shrink-0 text-2xl font-bold text-center w-full'>
									Seun Babs
								</p>
								<p className='flex-grow-0 flex-shrink-0 text-xs text-center w-full'>
									Da Civic Events | CEO
								</p>
							</div>
						</div>
						<div className='overflow-hidden rounded-2xl shadow-mid w-full'>
							<BlurImage
								src={'/img/header-image.jpg'}
								alt='header-image'
								width={1080}
								height={200}
								className='w-full h-[250px] object-center object-cover'
							/>
						</div>
						<Link
							href={'/dashboard/settings/edit-profile'}
							className='flex justify-end items-center absolute right-10 top-12 gap-3 text-white'
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
					</div>
					<div className='flex flex-col items-center justify-center text-center px-10 py-8 gap-10'>
						<TabMenu
							tabs={PROFILE_TAB}
							color={template.themeColor}
						/>
						{children}
					</div>
				</Fragment>
			);
			break;
		default:
			layout = (
				// Default layout when template is not found
				<div>
					{/* Add your default layout components here */}
					{children}
				</div>
			);
			break;
	}

	return (
		<div className='w-full h-full relative overflow-y-scroll rounded-2xl'>
			{/* Render the selected layout */}
			<Link
				href={'dashboard/settings/customize-profile'}
				className='w-[200px] h-10 absolute bottom-10 right-10 bg-black rounded-full flex justify-center items-center gap-2 z-[1000]'
			>
				<div className='flex-grow-0 flex-shrink-0 relative'>
					<svg
						width={25}
						height={24}
						viewBox='0 0 25 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='flex-grow-0 flex-shrink-0 w-6 h-6 relative'
						preserveAspectRatio='none'
					>
						<path
							d='M3.9975 20.5004C4.8275 21.3304 6.1675 21.3304 6.9975 20.5004L19.9975 7.50043C20.8275 6.67043 20.8275 5.33043 19.9975 4.50043C19.1675 3.67043 17.8275 3.67043 16.9975 4.50043L3.9975 17.5004C3.1675 18.3304 3.1675 19.6704 3.9975 20.5004Z'
							stroke='#FFFFFE'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M18.5078 8.98999L15.5078 5.98999'
							stroke='#FFFFFE'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M9 2.44L10.5 2L10.06 3.5L10.5 5L9 4.56L7.5 5L7.94 3.5L7.5 2L9 2.44Z'
							stroke='#FFFFFE'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M5 8.44L6.5 8L6.06 9.5L6.5 11L5 10.56L3.5 11L3.94 9.5L3.5 8L5 8.44Z'
							stroke='#FFFFFE'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M20 13.44L21.5 13L21.06 14.5L21.5 16L20 15.56L18.5 16L18.94 14.5L18.5 13L20 13.44Z'
							stroke='#FFFFFE'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
				<p className='flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#fffffe]'>
					Customize Profile
				</p>
			</Link>
			{layout}
		</div>
	);
}
