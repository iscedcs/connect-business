import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { options } from '../auth/[...nextauth]/options';
import { API, URLS } from '@/utils/consts';

export async function POST(req: NextRequest, res: NextResponse) {
	const body: BusinessFormP = await req.json();

	console.log(body);
	const session = await getServerSession(options);
	const accessToken = session?.user.access_token;

	const headers = {
		'Content-Type': 'application/json',
		'x-api-key': process.env.X_API_KEY,
		Authorization: `Bearer ${accessToken}`,
	};

	try {
		const url = `${API}${URLS.business.profile.business}`;
		console.log(url);
		const response = await fetch(url, {
			method: 'POST',
			headers,
			body: JSON.stringify({
				name: body.name,
				logo: body.logo,
				description: body.description,
				details: body.details,
				images: body.images,
			}),
		});

		if (response.status !== 200) {
			throw new Error(`Something Went wrong ${response.statusText}`);
		} else {
			const serverData = await response.json();
			return NextResponse.json(serverData);
		}
	} catch (error: any) {
		console.log(error?.message);
		return error?.message;
	}
}
