import React from 'react';
import BlurImage from '../blur-image';
import { appointmentDeleteIcon, appointmentEditIcon } from '@/utils/icons';

const ServiceCardLandscape = ({
	image,
	name,
	description,
	handleClick,
	handleDelete,
}: {
	image: string;
	name: string;
	description: string;
	handleClick?: () => void;
	handleDelete?: () => void;
}) => {
	return (
		<div className='w-full bg-gray-100 rounded-2xl overflow-hidden flex gap-2 relative cursor-pointer'>
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

			<div className='absolute top-0 right-0 flex gap-3 p-2'>
				<div
					className='text-rose-500'
					onClick={handleDelete}
				>
					{appointmentDeleteIcon}
				</div>
				<div
					className='text-blue-500'
					onClick={handleClick}
				>
					{appointmentEditIcon}
				</div>
			</div>
		</div>
	);
};

export default ServiceCardLandscape;
