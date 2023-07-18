import ApointmentList from '@/components/appointment/appointment-list';
import Calendar from '@/components/appointment/calendar';
import { COMPANY_PROFILE } from '@/utils/data';
import React, { Fragment } from 'react';

export default function Appointments() {
	return (
		<Fragment>
			<div className='flex flex-col w-full h-full gap-6 py-5 px-4 md:px-10 overflow-hidden overflow-y-scroll'>
				<div className='flex flex-col justify-start gap-5 mb-5'>
					<Calendar
						appointmentList={COMPANY_PROFILE.appointments}
						type='large'
						// onSelectDate={(date) => {
						// 	alert('You selected ' + date);
						// }}
					/>
				</div>
				<div className='flex flex-col justify-start items-start gap-4'>
					<p className='flex-grow-0 flex-shrink-0 text-base font-bold text-left text-black'>
						Today’s Appointment
					</p>
					<ApointmentList />
				</div>
			</div>
		</Fragment>
	);
}
