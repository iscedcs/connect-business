import TabMenu from '@/components/profile/profile-tabs';
import BlurImage from '@/components/ui/blur-image';
import { CUSTOMER_TAB } from '@/utils/data';
import React, { Fragment } from 'react';

export default function CustomerView({
	children,
	color,
}: {
	children: React.ReactNode;
	color: string;
}) {
	return (
		<Fragment>
			<div className='w-full relative flex gap-4 md:gap-8 p-4 md:p-8'>
				<div className='flex shrink-0 flex-col justify-center items-center p-2 gap-4 w-[150px] md:w-[200px] h-[250px] bg-white rounded-2xl shadow-mid'>
					<div className='flex-grow-0 flex-shrink-0 w-[100px] md:w-[120px] h-[100px] md:h-[120px] relative overflow-hidden rounded-full bg-gradient-to-b from-black/0 via-black/100 to-black/100 p-[2px]'>
						<BlurImage
							className='w-full h-full rounded-full object-center object-cover'
							src='/img/profile-image.jpg'
							alt='profile-image'
							height={110}
							width={110}
						/>
					</div>
					<div className='flex flex-col gap-2 justify-center items-start flex-grow-0 flex-shrink-0 relative'>
						<p className='flex-grow-0 flex-shrink-0 text-xl md:text-2xl font-bold text-center w-full'>
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
			</div>
			<div className='flex flex-col items-center justify-center text-center px-10 py-8 gap-10'>
				<TabMenu
					tabs={CUSTOMER_TAB}
					color={color}
				/>
				{children}
			</div>
		</Fragment>
	);
}
