import BlurImage from '@/components/ui/blur-image';
import React, { Fragment } from 'react';

export default function ProfileAbout() {
	return (
		<Fragment>
			<div className='flex flex-col justify-start items-start gap-10'>
				<p className='flex-grow-0 flex-shrink-0 w-full text-base text-left text-black'>
					Event planning involves the process of organizing and
					coordinating various elements to create a successful
					event. This could include social gatherings, corporate
					conferences, weddings, trade shows, or any other type
					of event. The goal of event planning is to ensure that
					all aspects, such as venue selection, budgeting,
					logistics, catering, entertainment, and marketing, are
					carefully managed to meet the objectives and
					expectations of the event.
				</p>
				{/* <div className='flex-grow-0 flex-shrink-0 w-full bg-yellow-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'> */}
				<div className='flex-grow-0 flex-shrink-0 w-full flex justify-between'>
					<div className='w-72 h-96 overflow-hidden rounded-3xl'>
						<BlurImage
							src='/img/about-4.jpg'
							className='w-72 h-96 rounded-3xl object-cover'
							alt='About 1'
							height={384}
							width={288}
						/>
					</div>
					<div className='w-72 h-96 overflow-hidden rounded-3xl'>
						<BlurImage
							src='/img/about-3.jpg'
							className='w-72 h-96 rounded-3xl object-cover'
							alt='About 1'
							height={384}
							width={288}
						/>
					</div>
					<div className='w-72 h-96 overflow-hidden rounded-3xl'>
						<BlurImage
							src='/img/about-2.jpg'
							className='w-72 h-96 rounded-3xl object-cover'
							alt='About 1'
							height={384}
							width={288}
						/>
					</div>
					<div className='w-72 h-96 overflow-hidden rounded-3xl'>
						<BlurImage
							src='/img/about-1.jpg'
							className='w-72 h-96 rounded-3xl object-cover'
							alt='About 1'
							height={384}
							width={288}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
