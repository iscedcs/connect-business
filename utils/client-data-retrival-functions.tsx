'use client';

import axios from 'axios';
import { useSession } from 'next-auth/react';
import { API, URLS } from './consts';

export const clientDashboardDetails = async () => {
	const session = useSession();
	const accessToken = session?.data?.user?.access_token;

	const res = await axios.get(API + URLS.business.dashboard, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			'x-api-key': process.env.X_API_KEY,
		},
	});

	if (res.status === 200) {
		let details = res.data;
		console.log;
		return details;
	} else {
		console.log('something went wrong');
		return null;
	}
};
