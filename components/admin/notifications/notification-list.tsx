'use client';
import { COMPANY_PROFILE } from '@/utils/data';
import { AnimatePresence, motion } from 'framer-motion';
import React, { Fragment } from 'react';
import NotificationItem from './notification-item';

export default function NotificationList() {
	const sortedNotifications = [...COMPANY_PROFILE.notifications].sort(
		(a, b) => b.timestamp.getTime() - a.timestamp.getTime()
	);
	return (
		<Fragment>
			<div className='flex flex-col justify-start items-start relative gap-4 overflow-y-scroll p-5 md:p-10'>
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
			</div>
		</Fragment>
	);
}
