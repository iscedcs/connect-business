import ServiceCard from '@/components/profile/service-card';
import { CARD_VIEW } from '@/utils/data';
import Link from 'next/link';
import React from 'react';

export default function Connect() {
	return (
		<>
			<div className='grid grid-cols-2 xxs:grid-cols-3 xs:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 lg:gap-6'>
				{CARD_VIEW.socials.map((social) => (
					<Link
						key={social.id}
						href={social.link}
						className=' overflow-hidden hover:scale-105 transition-all'
						style={{ color: CARD_VIEW.user.theme }}
					>
						{social.svg}
					</Link>
				))}
			</div>
			<div className='flex flex-col gap-4'>
				<p className='font-bold'>Our Service</p>
				<div className='grid grid-cols-2'>
					{CARD_VIEW.services.map((service) => (
						<ServiceCard
							key={service.id}
							image={service.image}
							title={service.title}
							description={service.description}
						/>
					))}
				</div>
			</div>
		</>
	);
}
