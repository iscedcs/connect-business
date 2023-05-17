import React, { Fragment } from 'react';
import AppointmentListItem from './appointment-list-item';
import { APPOINTMENT_DETAILS } from '@/utils/data';

export default function AppointmentList() {
	return (
		<Fragment>
			{APPOINTMENT_DETAILS.map((appointment) => (
				<AppointmentListItem
					key={appointment.id}
					creator={appointment.creator}
					title={appointment.title}
					date={appointment.start}
				/>
			))}
		</Fragment>
	);
}
