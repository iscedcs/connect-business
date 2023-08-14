export const API = 'https://monolith.isce.app/api';
export const APII = 'https://developer.isce.app/v1';

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
			onboard: '/business/team-members/onboard/',
		},
		profile: {
			all: '/business/profile',
			business: '/business/profile/business',
			personal: '/business/profile/personal',
			socials: '/business/profile/business/socials',
			services: '/business/profile/business/services',
		},

		// Add more namespaces or routes under 'business' if needed
	},
	images: {
		upload: '/spaces/api/uploadFile',
	},
	// Add more top-level namespaces or routes as needed
};

export const xApiKey = process.env.X_API_KEY;
