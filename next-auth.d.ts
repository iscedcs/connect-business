import { DefaultSession, DefaultUser } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
	interface Session {
		user: {
			id: string;
			access_token: string;
			refresh_token: string;
		} & DefaultSession;
	}
	interface User extends DefaultUser {
		token_type: string;
		expires_in: string;
		access_token: string;
		refresh_token: string;
		id: string;
	}
}
declare module 'next-auth' {
	interface JWT extends DefaultJWT {
		access_token: string;
		refresh_token: string;
		id: string;
	}
}
