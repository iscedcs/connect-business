'use client';
import ApointmentList from '@/components/appointment/appointment-list';
import Calendar from '@/components/appointment/calendar';
import Header from '@/components/dashboard/header';
import { APPOINTMENT_DETAILS } from '@/utils/data';
import React, { Fragment } from 'react';

export default function Appointments() {
	return (
		<Fragment>
			<Header
				profileImage='/img/avatar.jpeg'
				headerTitle='Appointments'
				profileName='Da Civic'
				notificationCount={10}
			/>
			<div className='flex flex-col w-full h-full gap-6 py-5 overflow-hidden overflow-y-scroll'>
				<div className='flex flex-col justify-start gap-5 mb-5'>
					<Calendar
						appointmentList={APPOINTMENT_DETAILS}
						type='large'
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
		</Fragment>
	);
}
