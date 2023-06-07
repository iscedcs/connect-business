import Header from '@/components/dashboard/header';
import NotificationItem from '@/components/notifications/notification-item';
import NotificationList from '@/components/notifications/notification-list';
import { NOTIFICATIONS } from '@/utils/data';
import React, { Fragment } from 'react';

export default function Notifications() {
	const sortedNotifications = [...NOTIFICATIONS].sort(
		(a, b) => b.timestamp.getTime() - a.timestamp.getTime()
	);
	return (
		<Fragment>
			<Header
				profileImage='/img/avatar.jpeg'
				headerTitle='Notifications'
				profileName='Da Civic'
				notificationCount={10}
			/>
			<NotificationList>
				{sortedNotifications.map((notification) => (
					<NotificationItem
						key={notification.id}
						item={notification}
					/>
				))}
			</NotificationList>
		</Fragment>
	);
}
