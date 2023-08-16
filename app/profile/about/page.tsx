import BlurImage from '@/components/shared/ui/blur-image';
import React from 'react';

export default function About() {
	return (
		<>
			<p className='flex-grow-0 flex-shrink-0 max-w-2xl text-base text-black'>
				Event planning involves the process of organizing and
				coordinating various elements to create a successful event.
				This could include social gatherings, corporate conferences,
				weddings, trade shows, or any other type of event. The goal
				of event planning is to ensure that all aspects, such as
				venue selection, budgeting, logistics, catering,
				entertainment, and marketing, are carefully managed to meet
				the objectives and expectations of the event.
			</p>
			<div className='flex gap-3 flex-nowrap overflow-x-scroll pb-5 w-full justify-start lg:justify-center'>
				{[1, 2, 3, 4].map((i, k) => (
					<div
						className='w-60 shrink-0 overflow-hidden rounded-3xl'
						key={k}
					>
						<BlurImage
							src={`/img/about-${i}.jpg`}
							className='max-w-72 h-96 rounded-3xl object-cover'
							alt='About 1'
							height={384}
							width={288}
						/>
					</div>
				))}
			</div>
			<div className='absolute h-20 px-4  bottom-0 left-0 w-full flex gap-2 md:gap-10 justify-center items-center'>
				<div className='w-1/2 px-4 text-center py-3 max-w-[300px] text-[10px] bg-black text-white rounded-2xl'>
					Save Contact
				</div>
				<div className='w-1/2 px-4 text-center py-3 max-w-[300px] text-[10px] bg-black text-white rounded-2xl'>
					Exchange Contact
				</div>
			</div>
		</>
	);
}
