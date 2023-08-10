import React from 'react';
import BlurImage from '../blur-image';
import { appointmentDeleteIcon } from '@/utils/icons';

const ServiceCardLandscape = ({
	image,
	name,
	description,
}: {
	image: string;
	name: string;
	description: string;
}) => {
	return (
		<div className='w-full bg-gray-100 rounded-2xl overflow-hidden flex gap-2 relative'>
			<div className='w-[60px] h-[60px] shrink-0 overflow-hidden rounded-2xl'>
				<BlurImage
					src={image}
					alt={name}
					height={60}
					width={60}
					className='object-cover object-center w-full h-full'
				/>
			</div>
			<div className='h-[60px] overflow-hidden p-2'>
				<h3 className='font-bold text-xl'>{name}</h3>
				<p className='text-sm'>{description}</p>
			</div>

			<div className='absolute top-0 right-0 text-rose-500 p-2'>
				{appointmentDeleteIcon}
			</div>
		</div>
	);
};

export default ServiceCardLandscape;
