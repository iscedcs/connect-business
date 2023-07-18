'use client';
import BlurImage from '@/components/ui/blur-image';
import React from 'react';

export default function Templates({ templates }: TemplatesProps) {
	return (
		<div className='flex justify-start items-start flex-wrap relative gap-10'>
			{templates.map((template, index) => (
				<div
					key={index}
					className='flex-grow-0 flex-shrink-0 w-96 h-[240] relative overflow-hidden rounded-xl bg-white border border-gray-100 hover:shadow-mid transition-all duration-500'
					onClick={() => alert()}
				>
					<BlurImage
						src={template.image}
						height={240}
						width={384}
						alt='template'
						className='h-full w-full object-center object-cover'
					/>
					{template.active && (
						<div className='absolute top-0 left-0 w-full h-full bg-gray-500/20'>
							<svg
								width={80}
								height={60}
								viewBox='0 0 80 60'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								preserveAspectRatio='none'
								className='absolute'
							>
								<path
									d='M0.000103791 60L80 -7.23224e-06L-5.24537e-06 -2.38418e-07L0.000103791 60Z'
									fill='#000001'
								/>
							</svg>
							<svg
								width={32}
								height={32}
								viewBox='0 0 32 32'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='w-8 h-8 absolute m-1'
								preserveAspectRatio='xMidYMid meet'
							>
								<path
									d='M14.1059 20.7735C13.8393 20.7735 13.5859 20.6668 13.3993 20.4801L9.62594 16.7068C9.23927 16.3201 9.23927 15.6801 9.62594 15.2935C10.0126 14.9068 10.6526 14.9068 11.0393 15.2935L14.1059 18.3601L20.9593 11.5068C21.3459 11.1201 21.9859 11.1201 22.3726 11.5068C22.7593 11.8935 22.7593 12.5335 22.3726 12.9201L14.8126 20.4801C14.6259 20.6668 14.3726 20.7735 14.1059 20.7735Z'
									fill='#FFFFFE'
								/>
							</svg>
						</div>
					)}
				</div>
			))}
		</div>
	);
}
