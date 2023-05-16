import React, { Fragment } from 'react';
import AppointmentListItem from './appointment-list-item';

export default function ApointmentList() {
	return (
		<Fragment>
			<AppointmentListItem />
			<AppointmentListItem />
			<AppointmentListItem />
			<AppointmentListItem />
			<AppointmentListItem />
		</Fragment>
	);
}
