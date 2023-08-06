import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { options } from '../auth/[...nextauth]/options';
import { API, URLS } from '@/utils/consts';

export async function GET(req: NextRequest, res: NextResponse) {
	const session = await getServerSession(options);
	const accessToken = session?.user.access_token;

	const headers = {
		'Content-Type': 'application/json',
		'x-api-key': process.env.X_API_KEY,
		Authorization: `Bearer ${accessToken}`,
	};

	try {
		const url = API + URLS.business.dashboard;

		const response = await fetch(url, {
			headers,
			// next: { revalidate: 10 },
		});

		if (response.status !== 200) {
			throw new Error('Something Went wrong');
		} else {
			const dd = await response.json();
			return NextResponse.json(dd);
		}
	} catch (error: any) {
		return error?.message;
	}
}
