import React from 'react';
import BlurImage from '../blur-image';
import { AppointmentDeleteIcon, AppointmentEditIcon } from '@/utils/icons';

const ServiceCardLandscape = ({
	image,
	name,
	description,
	link,
	handleClick,
	handleDelete,
}: {
	image: string;
	name: string;
	description: string;
	link?: string;
	handleClick?: () => void;
	handleDelete?: () => void;
}) => {
	return (
		<div className='w-full h-20 bg-gray-100 rounded-2xl overflow-hidden flex gap-2 relative cursor-pointer'>
			<div className='w-16 aspect-[3/2] shrink-0 overflow-hidden rounded-2xl'>
				<BlurImage
					src={image}
					alt={name}
					height={60}
					width={60}
					className='object-cover object-center w-full h-full'
				/>
			</div>
			<div className='overflow-hidden p-2'>
				<h3 className='font-bold text-sm md:text-xl'>{name}</h3>
				<p className='text-xs md:text-sm'>{description}</p>
			</div>

			<div className='absolute top-0 right-0 flex gap-3 p-2'>
				<div
					className='text-rose-500'
					onClick={handleDelete}
				>
					{<AppointmentDeleteIcon />}
				</div>
				<div
					className='text-blue-500'
					onClick={handleClick}
				>
					{<AppointmentEditIcon />}
				</div>
			</div>
		</div>
	);
};

export default ServiceCardLandscape;
