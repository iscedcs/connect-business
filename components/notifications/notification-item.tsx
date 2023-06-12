'use client';
import { getTimeAgo } from '@/utils/function-helpers';
import React, { Fragment, useState } from 'react';

export default function NotificationItem({
	item,
	onClick,
}: NotificationItemProps) {
	const [hovered, setHovered] = useState(false);
	return (
		<Fragment>
			<div
				className={`cursor-auto relative px-5 flex-grow-0 flex-shrink-0 flex h-20 w-full overflow-hidden rounded-xl gap-4 items-center justify-between shadow-mid ${
					hovered
						? 'text-white'
						: 'text-black transition-all duration-1000'
				}`}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<div
					className={`absolute bg-black rounded-full top-1/2 -right-2 -translate-y-1/2 ${
						hovered ? 'h-20 w-[200%]' : 'h-96 w-1 '
					} transition-all duration-1000`}
				></div>
				<svg
					width={24}
					height={24}
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='w-6 h-6 shrink-0 grow-0 m-5 relative'
					preserveAspectRatio='none'
				>
					<path
						d='M12.0225 2.90997C8.71253 2.90997 6.02253 5.59997 6.02253 8.90997V11.8C6.02253 12.41 5.76253 13.34 5.45253 13.86L4.30253 15.77C3.59253 16.95 4.08253 18.26 5.38253 18.7C9.69253 20.14 14.3425 20.14 18.6525 18.7C19.8625 18.3 20.3925 16.87 19.7325 15.77L18.5825 13.86C18.2825 13.34 18.0225 12.41 18.0225 11.8V8.90997C18.0225 5.60997 15.3225 2.90997 12.0225 2.90997Z'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeMiterlimit={10}
						strokeLinecap='round'
					/>
					<path
						d='M13.8719 3.2C13.5619 3.11 13.2419 3.04 12.9119 3C11.9519 2.88 11.0319 2.95 10.1719 3.2C10.4619 2.46 11.1819 1.94 12.0219 1.94C12.8619 1.94 13.5819 2.46 13.8719 3.2Z'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeMiterlimit={10}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M15.0234 19.06C15.0234 20.71 13.6734 22.06 12.0234 22.06C11.2034 22.06 10.4434 21.72 9.90344 21.18C9.36344 20.64 9.02344 19.88 9.02344 19.06'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeMiterlimit={10}
					/>
				</svg>
				<div className='flex flex-col justify-start items-start gap-5 w-full relative'>
					<div className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-1'>
						<p className='flex-grow-0 flex-shrink-0 text-base text-left]'>
							<span className='flex-grow-0 flex-shrink-0 text-base text-left]'>
								{item.message}
							</span>
						</p>
					</div>
					<div className='flex justify-center items-center flex-grow-0 flex-shrink-0 h-4 relative'>
						<p className='flex-grow-0 flex-shrink-0 text-xs text-left]'>
							{getTimeAgo(item.timestamp)}
						</p>
					</div>
				</div>
				{!item.read && (
					<div
						className={` w-2 h-2 m-5 overflow-hidden rounded-[100px] ${
							hovered ? 'bg-white' : 'bg-black'
						} relative`}
					/>
				)}
			</div>
		</Fragment>
	);
}
