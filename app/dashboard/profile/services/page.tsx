import ServiceCard from '@/components/profile/service-card';
import BlurImage from '@/components/ui/blur-image';
import { COMPANY_PROFILE } from '@/utils/data';
import React, { Fragment } from 'react';

export default function ProfileServices() {
	return (
		<Fragment>
			<div className='flex gap-10'>
				{COMPANY_PROFILE.services.map((service, index) => (
					<ServiceCard
						key={index}
						image={service.image}
						title={service.title}
						description={service.description}
					/>
				))}
			</div>
		</Fragment>
	);
}
