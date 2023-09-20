export const API = 'https://monolith.isce.app/api';
export const APII = 'https://developer.isce.app/v1';

export const URLS = {
	business: {
		auth: {
			create: '/business/auth/create',
			reset: '/business/auth/reset',
			signin: '/business/auth/login',
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
			business: '/business/profile/b',
			personal: '/business/profile/personal',
			socials: '/business/profile/b/socials',
			services: '/business/profile/b/services',
		},
		card: {
			downloadCard: '/business/profile/card/download', //GET
			downloadContact: '/business/profile/contact/download', //GET
			profile: '/business/profile/card', //GET
			register: '/business/team-members/card', //POST
			share: '/business/profile/business/contact/share', //POST
		},

		// Add more namespaces or routes under 'business' if needed
	},
	images: {
		upload: '/spaces/api/uploadFile',
	},
	// Add more top-level namespaces or routes as needed
};

export const xApiKey = process.env.X_API_KEY;
