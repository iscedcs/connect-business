import { API, URLS } from '@/utils/consts';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { options } from '../auth/[...nextauth]/options';

export async function POST(req: NextRequest, res: NextResponse) {
	const body = await req.json();

	const session = await getServerSession(options);
	const accessToken = session?.user.access_token;
	const bid = session?.user.business_id;

	const modifiedBody = {
		business_id: bid,
		gender: '',
		...body,
	};
	console.log(modifiedBody);

	const headers = {
		'Content-Type': 'application/json',
		'x-api-key': process.env.X_API_KEY,
		Authorization: `Bearer ${accessToken}`,
	};

	const url = API + URLS.business.team.create;

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers,
			body: JSON.stringify(modifiedBody),
		});

		const serverData = await response.json();

		if (response.ok) {
			console.log(serverData);
			return NextResponse.json(serverData);
		} else {
			const errorMessage =
				serverData.errors[0].message ||
				serverData.message ||
				'Unknown Error';
			console.log(errorMessage);
			throw new Error(errorMessage);
		}
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 }
		);
	}
}

export async function GET(req: NextRequest, res: NextResponse) {
	const session = await getServerSession(options);
	const accessToken = session?.user.access_token;

	const headers = {
		'Content-Type': 'application/json',
		'x-api-key': process.env.X_API_KEY,
		Authorization: `Bearer ${accessToken}`,
	};
	try {
		const url = API + URLS.business.team.create;
		console.log(accessToken);

		const response = await fetch(url, {
			method: 'GET',
			headers,
			// next: { revalidate: 10 },
		});

		if (response.status !== 200) {
			console.log(NextResponse.json(response));
			throw new Error('Something Went wrong');
		} else {
			const serverData = await response.json();

			return NextResponse.json(serverData);
		}
	} catch (error: any) {
		return error?.message;
	}
}
