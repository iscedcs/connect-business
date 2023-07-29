import React, { Fragment } from 'react';
import AppointmentListItem from './appointment-list-item';
import { COMPANY_PROFILE } from '@/utils/data';

export default function AppointmentList() {
	return (
		<Fragment>
			{COMPANY_PROFILE.appointments.map((appointment) => (
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
