import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { API, URLS } from '@/utils/consts';
import { NextResponse } from 'next/server';

export async function getData() {
	const session = await getServerSession(options);
	const accessToken = session?.user.access_token;

	const headers = {
		'Content-Type': 'application/json',
		'x-api-key': process.env.X_API_KEY,
		Authorization: `Bearer ${accessToken}`,
	};
	const url = API + URLS.business.dashboard;
	const res = await fetch(url, {
		headers,
		// next: { revalidate: 1 },
	});
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
}

export async function getAppointments() {
	const session = await getServerSession(options);
	const accessToken = session?.user.access_token;

	const headers = {
		'Content-Type': 'application/json',
		'x-api-key': process.env.X_API_KEY,
		Authorization: `Bearer ${accessToken}`,
	};
	const url = API + URLS.business.appointments.all;
	const res = await fetch(url, {
		headers,
		// next: { revalidate: 1 },
	});

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
}

export async function getStaff() {
	const session = await getServerSession(options);
	const accessToken = session?.user.access_token;

	const headers = {
		'Content-Type': 'application/json',
		'x-api-key': process.env.X_API_KEY,
		Authorization: `Bearer ${accessToken}`,
	};
	const url = API + URLS.business.team.create;
	// console.log(accessToken);

	const response = await fetch(url, {
		method: 'GET',
		headers,
		// next: { revalidate: 1 },
	});

	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}
	return response.json();
}

// Get server business data
// _______________________________________________________________________________________________________________________
export const getServerProfileData = async () => {
	const session = await getServerSession(options);
	const accessToken = session?.user.access_token;
	const url = API + URLS.business.profile.all;

	const headers = {
		'Content-Type': 'application/json',
		'x-api-key': process.env.X_API_KEY,
		Authorization: `Bearer ${accessToken}`,
	};

	const response = await fetch(url, {
		method: 'GET',
		headers,
		// next: { revalidate: 1 },
	});

	if (response.status !== 200) {
		// console.log(NextResponse.json(response));
		throw new Error('Something Went wrong');
	} else {
		const serverProfileDataRaw = await response.json();
		const serverProfileData = serverProfileDataRaw.data;
		// console.log(serverProfileData);
		return serverProfileData;
	}
};
