'use server';
import { API, URLS } from '@/utils/consts';
import axios from 'axios';

interface resetP {
	email: string;
}

const resetPassword = async (data: resetP): Promise<any> => {
	const headers = {
		'Content-Type': 'application/json',
		'x-api-key': process.env.X_API_KEY,
	};

	try {
		const response = await axios.post(
			API + URLS.business.auth.reset,
			data,
			{
				headers,
			}
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export default resetPassword;
