import TabMenu from '@/components/profile/profile-tabs';
import BlurImage from '@/components/shared/ui/blur-image';
import { CARD_VIEW, CUSTOMER_TAB } from '@/utils/data';
import { formatName } from '@/utils/function-helpers';
import React, { Fragment } from 'react';

export default function CustomerView({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Fragment>
			<div className='w-screen p-2 h-screen bg-black'>
				<div className='w-full overflow-x-clip overflow-y-scroll rounded-2xl bg-white h-full'>
					<div className='w-full h-[120px] xs:h-[192px] relative'>
						<div className='overflow-hidden rounded-t-2xl'>
							<BlurImage
								src={CARD_VIEW.company.banner}
								alt='header-image'
								width={1080}
								height={200}
								className='w-full h-[120px] xs:h-[192px] object-center object-cover'
							/>
						</div>
						<div className='flex flex-col justify-center items-center absolute top-3/4 p-5 md:p-10 left-1/2 -translate-x-1/2 gap-3 w-[92%] md:w-[80%] bg-white rounded-2xl shadow-mid overflow-hidden'>
							<div className='flex-grow-0 flex-shrink-0 w-[80px] md:w-[120px] h-[80px] md:h-[120px] overflow-hidden rounded-full bg-gradient-to-b from-black/0 via-black/100 to-black/100 p-[2px]'>
								<BlurImage
									className='w-full h-full rounded-full object-center object-cover'
									src={CARD_VIEW.user.image}
									alt='profile-image'
									height={110}
									width={110}
								/>
							</div>
							<div className='flex flex-col gap-2 justify-center items-center'>
								<p className='text-xl font-bold text-center'>
									{formatName(CARD_VIEW.user.name)}
								</p>
								<p className='flex-grow-0 flex-shrink-0 text-xs text-center w-full'>
									{CARD_VIEW.company.name} |{' '}
									{CARD_VIEW.user.position}
								</p>
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center mt-[80px] md:mt-[180px] text-center px-5 py-20 gap-5 md:gap-10'>
						<TabMenu
							tabs={CUSTOMER_TAB}
							color={CARD_VIEW.user.theme}
						/>
						{children}
					</div>
				</div>
			</div>
		</Fragment>
	);
}
