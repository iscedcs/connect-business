import { API, URLS } from '@/utils/consts';
import { extractLastPartFromUrl } from '@/utils/function-helpers';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { options } from '../../auth/[...nextauth]/options';

export async function DELETE(req: NextRequest) {
	const session = await getServerSession(options);
	const accessToken = session?.user.access_token;

	const headers = {
		'Content-Type': 'application/json',
		'x-api-key': process.env.X_API_KEY,
		Authorization: `Bearer ${accessToken}`,
	};

	try {
		const memberId = extractLastPartFromUrl(req.url);
		const apiUrl = `${API}${URLS.business.team.create}/${memberId}`;
		console.log(apiUrl);
		const response = await fetch(apiUrl, {
			method: 'DELETE',
			headers,
		});

		if (response.status !== 200) {
			throw new Error(`${response.statusText}`);
		} else {
			const deleteData = await response.json();

			return NextResponse.json(deleteData);
		}
	} catch (error) {
		// Handle the error when parsing JSON data
		console.error(error);
		return NextResponse.json(
			JSON.stringify({
				status: 400,
				error: error,
			}),
			{ status: 400 }
		);
	}
}
