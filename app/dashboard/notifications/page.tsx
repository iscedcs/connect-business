'use client';
import Header from '@/components/dashboard/header';
import NotificationItem from '@/components/notifications/notification-item';
import NotificationList from '@/components/notifications/notification-list';
import { COMPANY_PROFILE } from '@/utils/data';
import React, { Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Notifications() {
	const sortedNotifications = [...COMPANY_PROFILE.notifications].sort(
		(a, b) => b.timestamp.getTime() - a.timestamp.getTime()
	);

	return (
		<Fragment>
			<Header />
			<NotificationList>
				<AnimatePresence>
					{sortedNotifications.map((notification, index) => (
						<motion.div
							key={notification.id}
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 100 }}
							transition={{
								duration: 0.3,
								delay: index * 0.1,
							}}
							className='w-full'
						>
							<NotificationItem item={notification} />
						</motion.div>
					))}
				</AnimatePresence>
			</NotificationList>
		</Fragment>
	);
}
