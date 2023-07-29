'use server';
import { API, URLS } from '@/utils/consts';
import axios from 'axios';
// import Cookies from 'js-cookie';

interface CreateBusinessP {
	name: string;
	email: string;
	type: string;
	password: string;
	confirm_password: string;
}

const createBusiness = async (data: CreateBusinessP): Promise<any> => {
	const headers = {
		'Content-Type': 'application/json',
		'x-api-key': process.env.X_API_KEY,
	};

	try {
		const response = await axios.post(
			API + URLS.business.auth.create,
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

export default createBusiness;
