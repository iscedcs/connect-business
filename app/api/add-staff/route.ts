import { API, URLS } from '@/utils/consts';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { options } from '../auth/[...nextauth]/options';

export async function POST(req: NextRequest, res: NextResponse) {
	const body = await req.json();

	const session = await getServerSession(options);
	const accessToken = session?.user.access_token;

	const headers = {
		'Content-Type': 'application/json',
		'x-api-key': process.env.X_API_KEY,
		Authorization: `Bearer ${accessToken}`,
	};

	try {
		const url = API + URLS.business.team.create;

		const response = await fetch(url, {
			method: 'POST',
			headers,
			body: JSON.stringify(body),
		});

		const serverData = await response.json();

		return NextResponse.json(serverData);
	} catch (error: any) {
		return error?.message;
	}
}
