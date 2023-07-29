'use client';
import { getTimeAgo } from '@/utils/function-helpers';
import { notificationIcon } from '@/utils/icons';
import React, { Fragment, useState } from 'react';

export default function NotificationItem({
	item,
	onClick,
}: NotificationItemProps) {
	const [hovered, setHovered] = useState(false);
	return (
		<Fragment>
			<div
				className={`cursor-auto relative flex gap-3 px-2 md:px-10 py-3 w-full overflow-hidden rounded-xl items-center justify-between shadow-mid ${
					hovered ? 'text-white' : 'text-black'
				}  transition-all duration-1000`}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<div
					className={`absolute shrink-0 grow-0 bg-black rounded-full top-1/2 -right-2 -translate-y-1/2 ${
						hovered ? 'h-20 w-[200%]' : 'h-96 w-0 '
					} transition-all duration-500`}
				></div>
				<div className='flex shrink-0 grow-0 items-center gap-3 relative'>
					<div className='w-6 shrink-0 grow-0'>
						{notificationIcon}
					</div>
					<div className='w-60 md:w-full'>
						<p className='flex-grow-0 text-base text-left truncate'>
							{item.message}
						</p>
						<p className='flex-grow-0 text-xs text-left'>
							{getTimeAgo(item.timestamp)}
						</p>
					</div>
				</div>
				{!item.read && (
					<div className='flex w-6 justify-end'>
						<div
							className={` w-2 h-2 shrink-0 grow-0 overflow-hidden rounded-[100px] ${
								hovered ? 'bg-white' : 'bg-black'
							} relative`}
						/>
					</div>
				)}
			</div>
		</Fragment>
	);
}
