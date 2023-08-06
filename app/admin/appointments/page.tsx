'use client';
import ApointmentList from '@/components/admin/appointment/appointment-list';
import Calendar from '@/components/admin/appointment/calendar';
import { COMPANY_PROFILE } from '@/utils/data';
import { NextResponse } from 'next/server';
import React, { Fragment, useState } from 'react';

export default function Appointments() {
	const d = new Date();
	const [selectedDate, setSelectedDate] = useState(d);
	const [appointmentData, setAppointmentData] = useState([]);
	const sd = selectedDate.toDateString();
	console.log(selectedDate);
	// console.log(appointmentData);
	console.log(sd);

	React.useEffect(() => {
		const getAppointmentData = async () => {
			const response = await fetch('/api/appointment', {
				// next: { revalidate: 60 },
			});
			if (response.status !== 200) {
				console.log(NextResponse.json(response));
				throw new Error('Something Went wrong');
			} else {
				const appointmentData = await response.json();
				setAppointmentData(
					appointmentData?.data.business.business_appointments
				);
				console.log(
					appointmentData?.data.business.business_appointments
				);
				return NextResponse.json(appointmentData);
			}
		};
		getAppointmentData();
	}, []);

	return (
		<Fragment>
			<div className='flex flex-col w-full h-full gap-6 py-5 px-4 md:px-10 overflow-hidden overflow-y-scroll'>
				<div className='flex flex-col justify-start gap-5 mb-5'>
					<Calendar
						appointmentList={COMPANY_PROFILE.appointments}
						type='large'
						onSelectDate={(date) => {
							setSelectedDate(date);
						}}
					/>
				</div>
				<div className='flex flex-col justify-start items-start gap-4'>
					<p className='flex-grow-0 flex-shrink-0 text-base font-bold text-left text-black'>
						Today’s Appointment
					</p>
					<ApointmentList
						appointmentData={appointmentData}
						selectedDate={selectedDate}
					/>
				</div>
			</div>
		</Fragment>
	);
}
