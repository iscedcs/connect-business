import { API, URLS } from '@/utils/consts';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
	const headers = {
		'Content-Type': 'application/json',
		'x-api-key': process.env.X_API_KEY,
	};
	const id = req.nextUrl.searchParams.get('id');
	const type = req.nextUrl.searchParams.get('type');
	console.log('ID.......', id);
	console.log('TYPE.......', type);

	try {
		const url = `${API}${URLS.business.card.profile}?id=${id}&type=${type}`;
		console.log(url);

		const response = await fetch(url, {
			method: 'GET',
			headers,
		});

		if (response.status !== 200) {
			console.log(
				`${response.status} => ${response.statusText}: 'Something went wrong`
			);
			throw new Error(
				`${response.status} => ${response.statusText}: 'Something went wrong`
			);
		} else {
			const serverData = await response.json();

			return NextResponse.json(serverData);
		}
	} catch (error: any) {
		return error?.message;
	}
}
