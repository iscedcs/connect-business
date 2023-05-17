import React from 'react';
import ApointmentList from './apointment-list';
import Calendar from './calendar';

export default function Appointment() {
	return (
		<div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 w-full h-full overflow-y-scroll rounded-2xl bg-white border border-gray-200 relative p-3 shadow-mid'>
			<div className='flex flex-col justify-start gap-5 mb-5'>
				<Calendar
					onSelectDate={(date) => {
						alert('You selected ' + date);
					}}
				/>
			</div>
			<div className='flex flex-col justify-start items-start gap-4'>
				<p className='flex-grow-0 flex-shrink-0 text-base font-bold text-left text-black'>
					Today’s Appointment
				</p>
				<ApointmentList />
			</div>
		</div>
	);
}
