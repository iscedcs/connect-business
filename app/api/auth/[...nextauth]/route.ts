import { API, URLS } from '@/utils/consts';
import axios from 'axios';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const config = {
	headers: {
		'x-api-key': process.env.X_API_KEY,
	},
};

export const authOptions: NextAuthOptions = {
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
						const user = res.data.data;
						console.log(user);
						return {
							...user,
							token_type: user.token_type,
							expires_in: user.expires_in,
							access_token: user.access_token,
							refresh_token: user.refresh_token,
						};
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
		session: ({ session, token }) => {
			return {
				...session,
				user: {
					...session.user,
					access_token: token.access_token,
				},
			};
		},
		jwt: ({ token, user }) => {
			if (user) {
				const u = user as unknown as any;
				return {
					...token,
					id: u.id,
					access_token: u.access_token,
				};
			}
			return token;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// 'Authorization': `Bearer ${session.accessToken}`
