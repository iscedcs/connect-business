import axios from 'axios';
import { API, URLS, xApiKey } from './consts';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export const getHeaderDetails = async () => {
	const session = await getServerSession(authOptions);
	const accessToken = session?.user.access_token;

	const res = await axios.get(API + URLS.business.dashboard, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			'x-api-key': xApiKey,
		},
	});
	if (res.status === 200) {
		let headerDetails = res.data;
		// headerDetails = {
		// 	...headerDetails,
		// 	token: accessToken,
		// };
		// console.log(headerDetails.data.user.business_id);
		return headerDetails;
	} else {
		console.log('something went wrong');
		return null;
	}
};
