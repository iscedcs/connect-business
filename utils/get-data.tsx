import axios from 'axios';
import { API, URLS, xApiKey } from './consts';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

export const getHeaderDetails = async () => {
	const session = await getServerSession(options);
	const accessToken = session?.user.access_token;

	const res = await axios.get(API + URLS.business.dashboard, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			'x-api-key': xApiKey,
		},
	});
	if (res.status === 200) {
		let headerDetails = res.data;
		return headerDetails;
	} else {
		console.log('something went wrong');
		return null;
	}
};
