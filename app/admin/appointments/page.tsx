import { getAppointments } from '@/app/lib/server-functions';
import ApointmentList from '@/components/admin/appointment/appointment-list';
import Calendar from '@/components/admin/appointment/calendar';
import React, { Fragment, useState } from 'react';

export default async function Appointments() {
	const appointmentDataRaw = await getAppointments();
	const appointmentData: AppointmentListItemProps[] =
		appointmentDataRaw.data.business.business_appointments;

	return (
		<Fragment>
			<div className='flex flex-col w-full h-full gap-6 py-5 px-4 md:px-10 overflow-hidden overflow-y-scroll'>
				<div className='flex flex-col justify-start gap-5 mb-5'>
					<Calendar
						appointmentList={appointmentData}
						type='large'
					/>
				</div>
				<div className='flex flex-col justify-start items-start gap-4'>
					<p className='flex-grow-0 flex-shrink-0 text-base font-bold text-left text-black'>
						Today’s Appointment
					</p>
					<ApointmentList
						showOptions={true}
						appointmentData={appointmentData}
						// selectedDate={selectedDate}
					/>
				</div>
			</div>
		</Fragment>
	);
}
