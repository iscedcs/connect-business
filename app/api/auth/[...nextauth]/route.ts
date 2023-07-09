import { API, URLS } from '@/utils/consts';
import axios from 'axios';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
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
					}
				);
				try {
					if (res.status === 200) {
						console.log(res);
						return res.data;
					} else {
						console.log('something went wrong');
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
});

export { handler as GET, handler as POST };
