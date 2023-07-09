import { API, URLS } from '@/utils/consts';
import { NextApiRequest, NextApiResponse } from 'next';

export const createBusiness = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	try {
		const { name, email, type, password, confirm_password } = req.body;
		console.log(API + URLS.business.auth.create);

		// Validate the form data
		if (!name || !email || !type || !password) {
			res.status(400).json({ error: 'Invalid form data' });
			return;
		}

		// Make the API request to create the business account
		const response = await fetch(API + URLS.business.auth.create, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				type,
				password,
				confirm_password,
			}),
		});

		// Check the status code of the response
		if (response.ok) {
			// The account was created successfully
			res.status(200).json({ success: true });
		} else {
			// There was an error creating the account
			const errorData = await response.json();
			res.status(response.status).json({
				error: errorData.message || 'Unknown error',
			});
		}
	} catch (error) {
		// Handle any unexpected errors
		res.status(500).json({ error: 'Internal server error' });
	}
};
