'use client';
import React, { useState, useEffect } from 'react';

const NetworkStatus = () => {
	const [isOnline, setIsOnline] = useState(true);

	useEffect(() => {
		setIsOnline(window.navigator.onLine);
		const handleOnline = () => {
			setIsOnline(true);
		};
		const handleOffline = () => {
			setIsOnline(false);
		};

		window.addEventListener('online', handleOnline);
		window.addEventListener('offline', handleOffline);

		return () => {
			window.removeEventListener('online', handleOnline);
			window.removeEventListener('offline', handleOffline);
		};
	}, []);

	return (
		<div
			className={`${
				isOnline ? 'bg-emerald-500' : 'bg-rose-500'
			} text-white transition-all`}
		>
			<p
				className={`text-white ${
					isOnline ? 'h-0' : 'h-10'
				} flex text-xs items-center justify-between px-5 transition-all delay-1000 duration-1000`}
			>
				{isOnline
					? 'You are back online!'
					: 'You are offline, check your internet connection!'}
			</p>
		</div>
	);
};

export default NetworkStatus;
