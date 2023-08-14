'use client';
import React, { useState } from 'react';
import BlurImage from '../shared/ui/blur-image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ServiceCard({
	image,
	title,
	description,
	link,
}: {
	image: string;
	title: string;
	description: string;
	link?: string;
}) {
	const [hovered, setHovered] = useState<boolean>(false);
	const router = useRouter();
	return (
		<div
			className='flex-grow-0 flex-shrink-0 w-48 md:w-72 aspect-[3/5] relative bg-white shadow-mid rounded-2xl cursor-pointer overflow-hidden'
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<BlurImage
				src={image}
				height={384}
				width={288}
				alt={title}
				className={`w-48 md:w-72 object-cover object-center transition-all duration-500 ${
					hovered
						? 'aspect-[3/5] rounded-2xl'
						: 'aspect-[4/6] rounded-t-2xl'
				} overflow-hidden`}
			/>
			<div
				className={`w-full ${
					hovered ? 'h-0 p-0' : 'h-10 md:h-16 p-1 md:p-3'
				} text-left text-sm md:text-xl font-bold overflow-hidden transition-all duration-500`}
			>
				{title}
			</div>
			<div
				className={`absolute w-48 md:w-72 aspect-[3/4] transition-all duration-500 ${
					hovered
						? 'h-full left-2 md:left-6 top-6 opacity-100'
						: 'h-0 left-0 top-0 opacity-0'
				} rounded-2xl bg-black/80`}
			>
				<div className='flex flex-col justify-start items-start w-full absolute left-2 md:left-4 top-3 md:top-10 gap-2'>
					<p className='flex-grow-0 flex-shrink-0 w-full text-sm md:text-lg font-bold text-white text-left'>
						{title}
					</p>
					<div className='text-xs md:text-sm'>
						<p className='w-full text-white text-left'>
							{description}
						</p>
					</div>
				</div>
			</div>
			{link && link !== '' && (
				<Link
					href={link}
					className='absolute top-0 right-0 w-full text-white flex text-xs md:text-base  items-center justify-center bg-gradient-to-b from-black via-black to-black/0 h-10'
				>
					Vist Link
				</Link>
			)}
		</div>
	);
}
