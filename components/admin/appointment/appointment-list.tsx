import React, { Fragment } from 'react';
import AppointmentListItem from './appointment-list-item';

export default function AppointmentList({
	selectedDate,
	appointmentData,
}: {
	selectedDate?: string | number | Date;
	appointmentData: any;
}) {
	let allAppointments = appointmentData;
	// if (selectedDate) {
	// 	allAppointments = allAppointments.filter((appointment: any) =>
	// 		appointment.start.startsWith(selectedDate.toLocaleString())
	// 	);
	// }

	return (
		<Fragment>
			{allAppointments.length > 0 ? (
				allAppointments.map((appointment: any) => (
					<AppointmentListItem
						key={appointment.id}
						// creator={appointment.creator}
						title={appointment.title}
						date={appointment.start}
					/>
				))
			) : (
				<div>No Appointment For Today</div>
			)}
		</Fragment>
	);
}
