import React from 'react';
import ApointmentList from './apointment-list';

export default function Appointment() {
	return (
		<div className='flex flex-col justify-start items-start gap-4'>
			<p className='flex-grow-0 flex-shrink-0 text-base font-bold text-left text-black'>
				Today’s Appointment
			</p>
			<ApointmentList />
		</div>
	);
}
