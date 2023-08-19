import ServiceCard from '@/components/profile/service-card';
import { CARD_VIEW } from '@/utils/data';
import Link from 'next/link';
import React from 'react';

export default function Connect() {
	return (
		<>
			<div className='w-screen flex flex-col justify-start py-2 lg:justify-center md:flex-row flex-wrap md:flex-nowrap h-[160px] md:h-fit gap-3 md:gap-5 overflow-x-scroll px-4 lg:px-10'>
				{CARD_VIEW.socials.map((social, i) => (
					<Link
						key={i}
						href={social.link}
						className='hover:scale-105 transition-all h-16 w-16 md:h-24 md:w-24'
						style={{ color: CARD_VIEW.user.theme }}
					>
						{social.svg}
					</Link>
				))}
			</div>
			<div className='flex flex-col gap-4 w-full'>
				<p className='font-bold'>Our Service</p>
				<div className='flex gap-3 flex-nowrap overflow-x-scroll pb-5 w-full'>
					{CARD_VIEW.services.map((service, k) => (
						<ServiceCard
							key={k}
							image={service.image}
							title={service.title}
							description={service.description}
							link={service.link}
						/>
					))}
				</div>
			</div>
		</>
	);
}
