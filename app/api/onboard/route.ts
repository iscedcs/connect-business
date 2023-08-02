import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { options } from '../auth/[...nextauth]/options';
import { API, URLS } from '@/utils/consts';

export async function POST(req: NextRequest, res: NextResponse) {
	const body = await req.json();
	const id = body.id;
	const wl: string = body.waitlist.toString();

	const session = await getServerSession(options);
	const accessToken = session?.user.access_token;

	const headers = {
		'Content-Type': 'application/json',
		'x-api-key': process.env.X_API_KEY,
		Authorization: `Bearer ${accessToken}`,
	};

	try {
		const url = `${API}${URLS.business.team.onboard}${id}`;
		console.log(url);
		const response = await fetch(url, {
			method: 'POST',
			headers,
			body: JSON.stringify({ waitlist: wl }),
			next: { revalidate: 10 },
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
