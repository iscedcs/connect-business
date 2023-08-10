import { options } from '@/app/api/auth/[...nextauth]/options';
import EditProfileform from '@/components/shared/form/edit-business-about-form';
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
	const profileData: ProfileFormP = {
		name: sd.business.name || '',
		logo: sd.business.base_image || '',
		profile_image: sd.user.profile_image || '',
		description: sd.business.description || '',
		details: sd.business.details || '',
		images: sd.business.images || [],
		services: sd.business.services || [],
		features: sd.business.features || [],
	};
	return (
		<div>
			<EditProfileform profileData={profileData} />
		</div>
	);
};

export default EditUser;
