export const API = 'https://lobster-app-wxw8t.ondigitalocean.app/api';

export const URLS = {
	business: {
		auth: {
			create: '/business/auth/create',
			signin: '/business/auth/login',
			reset: '/business/auth/reset',
			// Add more routes under the 'auth' namespace if needed
		},
		dashboard: '/business/dashboard',
		appointments: {
			all: '/business/appointments',
		},
		team: {
			create: '/business/team-members',
		},

		// Add more namespaces or routes under 'business' if needed
	},
	// Add more top-level namespaces or routes as needed
};

export const xApiKey = process.env.X_API_KEY;
