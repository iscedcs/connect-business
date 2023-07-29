import Templates from '@/components/settings/templates';
import { CUSTOM_TEMPLATE_LIST } from '@/utils/data';
import React from 'react';

export default function CustomTemplate() {
	return (
		<div className='flex justify-start items-start flex-wrap relative gap-4'>
			<div className='w-96 h-[240px] rounded-3xl bg-gray-100 hover:bg-gray-200 transition-all duration-500 hover:shadow-mid'>
				<div className='flex flex-col justify-center items-center h-full w-full'>
					<svg
						width={64}
						height={64}
						viewBox='0 0 64 64'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='flex-grow-0 flex-shrink-0 w-16 h-16 relative'
						preserveAspectRatio='xMidYMid meet'
					>
						<path
							d='M48 33.5H16C15.1828 33.5 14.5 32.8172 14.5 32C14.5 31.1828 15.1828 30.5 16 30.5H48C48.8172 30.5 49.5 31.1828 49.5 32C49.5 32.8172 48.8172 33.5 48 33.5Z'
							fill='#292D32'
							stroke='#000001'
						/>
						<path
							d='M32 49.5C31.1828 49.5 30.5 48.8172 30.5 48V16C30.5 15.1828 31.1828 14.5 32 14.5C32.8172 14.5 33.5 15.1828 33.5 16V48C33.5 48.8172 32.8172 49.5 32 49.5Z'
							fill='#292D32'
							stroke='#000001'
						/>
					</svg>
					<p className='flex-grow-0 flex-shrink-0 w-44 h-7 text-base text-center text-[#555556]'>
						Add Custom Template
					</p>
				</div>
			</div>
			<Templates templates={CUSTOM_TEMPLATE_LIST} />
		</div>
	);
}
