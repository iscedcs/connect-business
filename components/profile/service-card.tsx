'use client';
import React, { useState } from 'react';
import BlurImage from '../ui/blur-image';

export default function ServiceCard({
	image,
	title,
	description,
}: {
	image: string;
	title: string;
	description: string;
}) {
	const [hovered, setHovered] = useState<boolean>(false);
	return (
		<div
			className='flex-grow-0 flex-shrink-0 w-72 h-96 relative bg-white shadow-mid rounded-2xl cursor-pointer'
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			// onClick={}
		>
			<BlurImage
				src={image}
				height={384}
				width={288}
				alt={title}
				className={`w-72 object-cover object-center transition-all duration-500 ${
					hovered ? 'h-96 rounded-2xl' : 'h-80 rounded-t-2xl'
				} overflow-hidden`}
			/>
			<div
				className={`w-full ${
					hovered ? 'h-0 p-0' : 'h-16 p-3'
				} text-left text-xl font-bold overflow-hidden transition-all duration-500`}
			>
				{title}
			</div>
			<div
				className={`absolute w-72 transition-all duration-500 ${
					hovered
						? 'h-96 left-6 top-6 opacity-100'
						: 'h-0 left-0 top-0 opacity-0'
				} rounded-2xl bg-black/80`}
			>
				<div className='flex flex-col justify-start items-start w-[248px] absolute left-4 top-10 gap-2'>
					<p className='flex-grow-0 flex-shrink-0 w-[248px] h-6 text-lg font-bold text-left text-[#fffffe]'>
						{title}
					</p>
					<div className='flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3'>
						<p className='flex-grow-0 flex-shrink-0 w-[248px] text-base text-left text-[#fffffe]'>
							{description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
