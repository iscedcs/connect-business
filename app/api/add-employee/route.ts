'use server';
import { API, URLS, xApiKey } from '@/utils/consts';
import axios from 'axios';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
// import Cookies from 'js-cookie';

interface addEmployeeP {
	business_id: string;
	name: string;
	email: string;
	phone: string;
	role: string;
	gender: string;
}

const addEmployee = async (data: addEmployeeP): Promise<any> => {
	const session = await getServerSession(authOptions);
	const accessToken = session?.user.access_token as string;

	const headers = {
		'Content-Type': 'application/json',
		'x-api-key': xApiKey,
		Autorization: accessToken,
	};

	try {
		const response = await axios.post(
			API + URLS.business.team.create,
			data,
			{
				headers,
			}
		);
		// Save JWT access token to cookies
		// Cookies.set('access_token', response.data.data.access_token);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export default addEmployee;
