import { options } from '@/app/api/auth/[...nextauth]/options';
import EditUserForm from '@/components/shared/form/edit-user-form';
import { API, URLS } from '@/utils/consts';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import React from 'react';
const getServerProfileData = async () => {
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
		next: { revalidate: 10 },
	});

	if (response.status !== 200) {
		console.log(NextResponse.json(response));
		throw new Error('Something Went wrong');
	} else {
		const serverProfileDataRaw = await response.json();
		const serverProfileData = serverProfileDataRaw.data;
		return serverProfileData;
	}
};
const EditUser = async () => {
	const sd = await getServerProfileData();
	console.log('server....', sd);
	const userData: UserFormP = {
		name: sd.user.name || '',
		email: sd.user.email || '',
		phone: sd.user.phone || '',
		profile_image: sd.user.profile_image || '',
		gender: sd.user.gender || '',
	};
	return (
		<div>
			<EditUserForm userData={userData} />
		</div>
	);
};

export default EditUser;
