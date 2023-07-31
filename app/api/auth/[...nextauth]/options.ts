import { API, URLS } from '@/utils/consts';
import axios from 'axios';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const config = {
	headers: {
		'x-api-key': process.env.X_API_KEY,
	},
};

export const options: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				const res = await axios.post(
					API + URLS.business.auth.signin,
					{
						email: credentials?.email,
						password: credentials?.password,
					},
					config
				);
				try {
					if (res.status === 200) {
						let user = res?.data?.data;
						console.log(user);
						return user;
					} else {
						console.log('something went wrong');
						return null;
					}
				} catch (error) {
					if (axios.isAxiosError(error)) {
						throw new Error(
							error.response?.data?.message ||
								'An error occurred during authentication.'
						);
					} else {
						throw new Error(
							'An error occurred during authentication.'
						);
					}
				}
			},
		}),
	],

	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/sign-in',
	},
	callbacks: {
		session: ({ session, token }) => {
			session.user.access_token = token.access_token as string;
			session.user.refresh_token = token.refresh_token as string;
			return session;
		},
		jwt: ({ token, user }) => {
			if (user) token.access_token = user.access_token;
			if (user) token.refresh_token = user.refresh_token;
			return token;
		},
	},
};
