import { API, URLS } from '@/utils/consts';
import axios from 'axios';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const config = {
	headers: {
		'x-api-key': process.env.X_API_KEY,
	},
};

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
					},
					config
				);
				try {
					if (res.status === 200) {
						const user = res.data;
						// console.log(user);
						return user;
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
	callbacks: {
		async jwt({ token, account }) {
			// Persist the OAuth access_token to the token right after signin
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		// async session({ session, token, user }) {
		// 	// Send properties to the client, like an access_token from a provider.
		// 	session.accessToken = token.accessToken;
		// 	return session;
		// },
	},
});

export { handler as GET, handler as POST };

// 'Authorization': `Bearer ${session.accessToken}`
