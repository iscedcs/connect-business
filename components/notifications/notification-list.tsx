import React, { Fragment } from 'react';

export default function NotificationList({ children }: NotificationListProps) {
	return (
		<Fragment>
			<div className='flex flex-col justify-start items-start h-[840px] relative gap-4 overflow-y-scroll py-10 px-10'>
				{children}
			</div>
		</Fragment>
	);
}
