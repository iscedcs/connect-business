'use client';
import { useState, useEffect } from 'react';

const IS_ONLINE = () => {
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

	return isOnline;
};

export default IS_ONLINE;
