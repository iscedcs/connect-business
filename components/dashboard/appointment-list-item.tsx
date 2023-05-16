import React from 'react';

export default function AppointmentListItem() {
	return (
		<div className='flex-grow-0 flex-shrink-0 w-full h-14 overflow-hidden rounded-xl bg-gray-200/[0.84]'>
			<div className='flex justify-start items-start px-3 py-2 gap-3'>
				<div className='flex flex-grow-0 flex-shrink-0 w-10 h-10 relative overflow-hidden rounded-full bg-black items-center justify-center'>
					<p className='text-sm font-bold text-center text-white'>
						AK
					</p>
				</div>
				<div className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative'>
					<p className='flex-grow-0 flex-shrink-0 w-full text-sm font-bold text-left text-[#23262f]'>
						Events Booking By Ahmed
					</p>
					<p className='flex-grow-0 flex-shrink-0 w-full text-[10px] text-left text-[#808080]'>
						12:00 PM 26 April, 2023
					</p>
				</div>
			</div>
		</div>
	);
}
