import { options } from '@/app/api/auth/[...nextauth]/options';
import EditServicesForm from '@/components/shared/form/edit-services-form';
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
const initialServices: ServiceP[] = [
	{
		id: 0,
		name: 'Service 1',
		description:
			'Description 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quos eum ipsam mollitia odit enim voluptas dignissimos quis nisi ab harum hic, consequuntur eligendi, inventore neque necessitatibus in, rem eveniet? ',
		image: '/img/1.jpeg',
	},
	{
		id: 1,
		name: 'Service 2',
		description: 'Description 2',
		image: '/img/2.jpeg',
	},
];

const EditServices = async () => {
	const sd = await getServerProfileData();
	console.log('server....', sd);
	const servicesData: ServiceP[] = sd.business.services || [];
	return (
		<div>
			<EditServicesForm servicesData={servicesData} />
			{/* <EditServicesForm servicesData={initialServices} /> */}
		</div>
	);
};

export default EditServices;
