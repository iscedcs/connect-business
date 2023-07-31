import { options } from '@/app/api/auth/[...nextauth]/options';
import axios from 'axios';
import { getServerSession } from 'next-auth';
import { API, URLS } from './consts';

export const dashboardDetails = async () => {
	const session = await getServerSession(options);
	const accessToken = session?.user.access_token;

	const res = await axios.get(API + URLS.business.dashboard, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			'x-api-key': process.env.X_API_KEY,
		},
	});

	if (res.status === 200) {
		const details = res.data;
		console.log(details);
		return details;
	} else {
		console.log('something went wrong');
		return null;
	}
};

export const resetPassword = async (data: resetP): Promise<any> => {
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

export const createBusiness = async (data: CreateBusinessP): Promise<any> => {
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
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const addStaff = async (data: addStaffP): Promise<any> => {
	const session = await getServerSession(options);
	const accessToken = session?.user.access_token;

	const headers = {
		'Content-Type': 'application/json',
		'x-api-key': process.env.X_API_KEY,
		Authorization: `Bearer ${accessToken}`,
	};

	try {
		const response = await axios.post(
			API + URLS.business.team.create,
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

export const getTeammembers = async (): Promise<any> => {
	const session = await getServerSession(options);
	const accessToken = session?.user.access_token;

	const headers = {
		'Content-Type': 'application/json',
		'x-api-key': process.env.X_API_KEY,
		Authorization: `Bearer ${accessToken}`,
	};

	try {
		const response = await axios.get(API + URLS.business.team.create, {
			headers,
		});
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
