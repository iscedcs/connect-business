import BlurImage from '@/components/ui/blur-image';
import React, { Fragment } from 'react';

export default function ProfileAbout() {
	return (
		<Fragment>
			<p className='flex-grow-0 flex-shrink-0 w-full text-base text-black'>
				Event planning involves the process of organizing and
				coordinating various elements to create a successful event.
				This could include social gatherings, corporate conferences,
				weddings, trade shows, or any other type of event. The goal
				of event planning is to ensure that all aspects, such as
				venue selection, budgeting, logistics, catering,
				entertainment, and marketing, are carefully managed to meet
				the objectives and expectations of the event.
			</p>
			<div className='flex-grow-0 flex-shrink-0 flex justify-start gap-10'>
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
		</Fragment>
	);
}
