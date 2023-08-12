import React from 'react';
import StaffMessage from './staff-message';

const StaffMessages = () => {
	return (
		<div className='mt-5 flex flex-col gap-5'>
			<div className='flex justify-between items-center'>
				<p className='flex-grow-0 flex-shrink-0 text-lg lg:text-xl font-bold'>
					Messages
				</p>
				<p className='flex-grow-0 flex-shrink-0 text-xs lg:text-sm font-bold text-right text-[#000001]'>
					View All
				</p>
			</div>
			<StaffMessage
				senderImage='/img/10.jpeg'
				senderName='Shola Allison'
				time='10:45 AM'
				messageSubject='New Music Release'
				messageBody={`One of the greated songs of our time is the Sinach's Wonderful Love`}
			/>
			<StaffMessage />
			<StaffMessage />
			<StaffMessage />
		</div>
	);
};

export default StaffMessages;
