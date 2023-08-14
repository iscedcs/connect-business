'use client';
import React, { Fragment, useState } from 'react';
import AppointmentListItem from './appointment-list-item';
import useSWR from 'swr';

export default function AppointmentList({
	// selectedDate,
	appointmentData,
	showOptions = false,
}: {
	// selectedDate?: Date;
	appointmentData: AppointmentListItemProps[];
	showOptions?: boolean;
}) {
	const allAppointments = appointmentData;
	// const fetcher = (url: any) => fetch(url).then((res) => res.json());
	// const { data, error } = useSWR('/api/appointment', fetcher, {
	// 	refreshInterval: 1000,
	// });
	// if (error) return <>an error has occurred'</>;
	// return(data)

	const timestamp = new Date().setHours(1, 0, 0, 0);
	const d = new Date(timestamp);
	const [selectedDate, setSelectedDate] = useState(d);

	const targetDate = selectedDate.toISOString();

	const filteredAppointments = allAppointments.filter((appointment) => {
		return appointment.date === targetDate;
	});

	return (
		<Fragment>
			{filteredAppointments.length > 0 ? (
				filteredAppointments.map((appointment, i) => (
					<AppointmentListItem
						key={i}
						appointment_id={appointment.appointment_id!}
						attendees={appointment.attendees!}
						business_id={appointment.business_id!}
						createdAt={appointment.createdAt!}
						name={appointment.name!}
						date={appointment.date!}
						deleted={appointment.deleted!}
						description={appointment.description!}
						email={appointment.email!}
						end_time={appointment.end_time!}
						id={appointment.id!}
						location={appointment.location!}
						member_id={appointment.member_id!}
						onClick={appointment.onClick!}
						onDelete={appointment.onDelete!}
						onEdit={appointment.onEdit!}
						phone={appointment.phone!}
						showOptions={showOptions}
						start_time={appointment.start_time!}
						title={appointment.title!}
						updatedAt={appointment.updatedAt!}
					/>
				))
			) : (
				<div>No Appointment For Today</div>
			)}
		</Fragment>
	);
}
