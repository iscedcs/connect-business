export const COMPANY_PROFILE = {
	id: 'IIC4BNIGLAGFES00001',
	name: 'ISCE Digital Concept',
	admin: 'Ayobami Oyeniran',
	position: 'CEO',
	logo: '/logo-white-on-black.png',
	// cardBanner: '/img/allcardcolors.png',
	cardBanner: '/img/header-image.jpg',
	adminPicture: '/img/profile-image.jpg',
	dashboard: [
		{
			id: '0',
			amount: '178',
			newAmount: '20',
			description: 'Total Patronizing Clients',
			newDescription: 'From last week',
			href: '/admin/clients',
		},
		{
			id: '1',
			amount: '64',
			newAmount: '20',
			description: 'Total Non Patronizing Clients',
			newDescription: 'From last week',
			href: '/admin',
		},
		{
			id: '2',
			amount: '200',
			newAmount: '20',
			description: 'Total Connected Clients',
			newDescription: 'From last week',
			href: '/admin',
		},
		{
			id: '3',
			amount: '54',
			newAmount: '20',
			description: 'Total Onboarded Employees',
			newDescription: 'From last week',
			href: '/admin',
		},
		{
			id: '4',
			amount: '178',
			newAmount: '20',
			description: 'Total Appointments',
			newDescription: 'From last week',
			href: '/admin',
		},
		{
			id: '5',
			amount: '329',
			newAmount: '20',
			description: 'Total Invoice',
			newDescription: 'From last week',
			href: '/admin',
		},
	],
	about: {
		text: `Event planning involves the process of organizing and coordinating various elements to create a successful event. This could include social gatherings, corporate conferences, weddings, trade shows, or any other type of event. The goal of event planning is to ensure that all aspects, such as venue selection, budgeting, logistics, catering, entertainment, and marketing, are carefully managed to meet the objectives and expectations of the event.`,
		images: [
			'/img/about-1.jpg',
			'/img/about-2.jpg',
			'/img/about-3.jpg',
			'/img/about-4.jpg',
		],
	},
	services: [
		{
			id: '0',
			title: 'Event Planning',
			image: '/img/about-1.jpg',
			description: `We provide the best planners and materials suited to meet all your occasions including birthdays, bridal and baby showers, wedding, burial, house opening events and lots more.`,
		},
		{
			id: '1',
			title: 'Hall Rentals',
			image: '/img/about-2.jpg',
			description: `We provide the best planners and materials suited to meet all your occasions including birthdays, bridal and baby showers, wedding, burial, house opening events and lots more.`,
		},
		{
			id: '2',
			title: 'Event Hosting',
			image: '/img/about-3.jpg',
			description: `We provide the best planners and materials suited to meet all your occasions including birthdays, bridal and baby showers, wedding, burial, house opening events and lots more.`,
		},
		{
			id: '0',
			title: 'Event Materials',
			image: '/img/about-4.jpg',
			description: `We provide the best planners and materials suited to meet all your occasions including birthdays, bridal and baby showers, wedding, burial, house opening events and lots more.`,
		},
	],
	notifications: [
		{
			id: '1',
			title: 'New Message',
			message: 'You have received a new message.',
			timestamp: new Date('2023-06-01T09:30:00Z'),
			read: false,
		},
		{
			id: '2',
			title: 'Reminder',
			message: "Don't forget to submit your report by end of day.",
			timestamp: new Date('2023-06-02T14:15:00Z'),
			read: true,
		},
		{
			id: '3',
			title: 'Meeting Reminder',
			message: 'You have a meeting scheduled at 2:00 PM.',
			timestamp: new Date('2023-06-03T13:45:00Z'),
			read: false,
		},
		{
			id: '4',
			title: 'New Task Assigned',
			message: 'You have been assigned a new task. Please review and complete it.',
			timestamp: new Date('2023-06-03T16:20:00Z'),
			read: false,
		},
		{
			id: '5',
			title: 'Payment Received',
			message: 'You have received a payment of $1000.',
			timestamp: new Date('2023-06-04T10:30:00Z'),
			read: true,
		},
		{
			id: '6',
			title: 'Upcoming Event',
			message: "Don't forget about the team building event tomorrow.",
			timestamp: new Date('2023-06-04T14:00:00Z'),
			read: false,
		},
		{
			id: '7',
			title: 'Task Deadline',
			message: 'The deadline for task #123 has been extended to tomorrow.',
			timestamp: new Date('2023-06-05T09:45:00Z'),
			read: true,
		},
		{
			id: '8',
			title: 'System Maintenance',
			message: 'There will be a scheduled system maintenance tonight at 11:00 PM.',
			timestamp: new Date('2023-06-05T17:30:00Z'),
			read: false,
		},
		{
			id: '9',
			title: 'New Announcement',
			message: 'Please read the latest company announcement on the intranet.',
			timestamp: new Date('2023-06-06T08:15:00Z'),
			read: false,
		},
		{
			id: '10',
			title: 'Product Update',
			message: 'A new version of the product is now available.',
			timestamp: new Date('2023-06-06T12:45:00Z'),
			read: true,
		},
		{
			id: '11',
			title: 'Task Completed',
			message: 'Task #789 has been completed by a team member.',
			timestamp: new Date('2023-06-07T10:00:00Z'),
			read: false,
		},
		{
			id: '12',
			title: 'Important Announcement',
			message: 'There is an important announcement regarding the upcoming office move.',
			timestamp: new Date('2023-06-07T15:30:00Z'),
			read: false,
		},
		{
			id: '13',
			title: 'New Feature Released',
			message: 'Check out the latest feature update in the application.',
			timestamp: new Date('2023-06-08T09:00:00Z'),
			read: true,
		},
		{
			id: '14',
			title: 'Feedback Request',
			message: 'Please provide your feedback on the recent training session.',
			timestamp: new Date('2023-06-08T11:45:00Z'),
			read: false,
		},
		{
			id: '15',
			title: 'Vacation Request Approved',
			message: 'Your vacation request has been approved. Enjoy your time off!',
			timestamp: new Date('2023-06-09T14:20:00Z'),
			read: false,
		},
	],
	employees: [
		{
			id: 1,
			name: 'Chaim Bailey',
			email: 'arcu.vestibulum.ante@icloud.ca',
			position: 'Graphics Designer',
			image: '/img/1.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA, America, Earth, Solar System, Milky Way Galaxy, Universe',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 2,
			name: 'Pascale Graham',
			email: 'mus.aenean.eget@hotmail.couk',
			position: 'Web Developer',
			status: 'waitlisted',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 3,
			name: 'Arsenio Wooten',
			email: 'risus.donec@google.ca',
			position: 'Media Manager',
			status: 'waitlisted',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 4,
			name: 'Michael Santos',
			email: 'porttitor@aol.net',
			position: 'Medical Assistant',
			image: '/img/4.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 5,
			name: 'Driscoll Cortez',
			email: 'morbi@icloud.com',
			position: 'Lawyer',
			image: '/img/5.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 6,
			name: 'Samantha Alvarado',
			email: 'lectus.pede@protonmail.ca',
			position: 'Laboratory Assistant',
			status: 'waitlisted',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 7,
			name: 'Solomon Cardenas',
			email: 'commodo@protonmail.edu',
			position: 'Social Worker',
			status: 'waitlisted',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 8,
			name: 'Cyrus Jackson',
			email: 'posuere.cubilia@icloud.org',
			position: 'Store Manager',
			status: 'waitlisted',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 9,
			name: 'Lila Hess',
			email: 'cum.sociis.natoque@google.net',
			position: 'Stockbroker',
			status: 'waitlisted',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 10,
			name: 'Josephine Tucker',
			email: 'posuere.cubilia@protonmail.ca',
			position: 'Judge',
			status: 'waitlisted',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 11,
			name: 'Tallulah Suarez',
			email: 'pede.et@icloud.edu',
			position: 'Devops Engineer',
			image: '/img/11.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 12,
			name: 'Orlando Knowles',
			email: 'aliquet.lobortis@hotmail.net',
			position: 'Comedy Writer',
			image: '/img/12.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 13,
			name: 'Bert Berger',
			email: 'purus@protonmail.ca',
			position: 'MC/Compere',
			image: '/img/13.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 14,
			name: 'Kiara Perry',
			email: 'quis@yahoo.ca',
			position: 'Police Officer',
			status: 'waitlisted',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 15,
			name: 'Rhiannon Henson',
			email: 'sit@outlook.net',
			position: 'Politician',
			image: '/img/15.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 16,
			name: 'Damian Vargas',
			email: 'adipiscing.non.luctus@outlook.couk',
			position: 'Medical Doctor',
			status: 'waitlisted',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 17,
			name: 'Emily Cooper',
			email: 'emily.cooper@example.com',
			position: 'Marketing Specialist',
			image: '/img/7.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Female',
		},
		{
			id: 18,
			name: 'Oliver Reed',
			email: 'oliver.reed@example.com',
			position: 'Software Engineer',
			status: 'waitlisted',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 19,
			name: 'Sophia Campbell',
			email: 'sophia.campbell@example.com',
			position: 'Human Resources Manager',
			image: '/img/9.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Female',
		},
		{
			id: 20,
			name: 'Maxwell Price',
			email: 'maxwell.price@example.com',
			position: 'Financial Analyst',
			status: 'waitlisted',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 21,
			name: 'Ava Richardson',
			email: 'ava.richardson@example.com',
			position: 'Customer Service Representative',
			image: '/img/11.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Female',
		},
		{
			id: 22,
			name: 'Henry Morgan',
			email: 'henry.morgan@example.com',
			position: 'Product Manager',
			image: '/img/12.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 23,
			name: 'Amelia Brooks',
			email: 'amelia.brooks@example.com',
			position: 'Sales Executive',
			status: 'waitlisted',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Female',
		},
		{
			id: 24,
			name: 'Daniel Turner',
			email: 'daniel.turner@example.com',
			position: 'Data Analyst',
			image: '/img/14.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 25,
			name: 'Mia Johnson',
			email: 'mia.johnson@example.com',
			position: 'Project Manager',
			status: 'waitlisted',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Female',
		},
		{
			id: 26,
			name: 'William Hughes',
			email: 'william.hughes@example.com',
			position: 'Business Development Manager',
			image: '/img/16.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 27,
			name: 'Charlotte Anderson',
			email: 'charlotte.anderson@example.com',
			position: 'Graphic Designer',
			status: 'waitlisted',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Female',
		},
		{
			id: 28,
			name: 'James Mitchell',
			email: 'james.mitchell@example.com',
			position: 'Software Developer',
			image: '/img/2.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 29,
			name: 'Grace Peterson',
			email: 'grace.peterson@example.com',
			position: 'Marketing Manager',
			status: 'waitlisted',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Female',
		},
		{
			id: 30,
			name: 'Benjamin Scott',
			email: 'benjamin.scott@example.com',
			position: 'Data Scientist',
			image: '/img/3.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 31,
			name: 'Emma Parker',
			email: 'emma.parker@example.com',
			position: 'Operations Manager',
			image: '/img/4.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Female',
		},
		{
			id: 32,
			name: 'Alexander Turner',
			email: 'alexander.turner@example.com',
			position: 'IT Specialist',
			status: 'waitlisted',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 33,
			name: 'Sophie Hill',
			email: 'sophie.hill@example.com',
			position: 'Customer Support Representative',
			image: '/img/5.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Female',
		},
		{
			id: 34,
			name: 'Jacob Ward',
			email: 'jacob.ward@example.com',
			position: 'Financial Advisor',
			status: 'waitlisted',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 35,
			name: 'Ella Morris',
			email: 'ella.morris@example.com',
			position: 'Sales Manager',
			image: '/img/6.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Female',
		},
		{
			id: 36,
			name: 'William Turner',
			email: 'william.turner@example.com',
			position: 'Business Analyst',
			image: '/img/8.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 37,
			name: 'Victoria Hughes',
			email: 'victoria.hughes@example.com',
			position: 'Public Relations Manager',
			status: 'waitlisted',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Female',
		},
		{
			id: 38,
			name: 'David Walker',
			email: 'david.walker@example.com',
			position: 'Technical Writer',
			image: '/img/10.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
		{
			id: 39,
			name: 'Sophia Turner',
			email: 'sophia.turner@example.com',
			position: 'HR Specialist',
			status: 'waitlisted',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Female',
		},
		{
			id: 40,
			name: 'John Carter',
			email: 'john.carter@example.com',
			position: 'Project Coordinator',
			image: '/img/13.jpeg',
			status: 'onboarded',
			address: '24, Grand Lane, New York City, USA',
			phone: '+23410989378',
			gender: 'Male',
		},
	],
	appointments: [
		{
			id: 'event-1',
			creator: 'John Doe',
			title: 'Team Meeting',
			start: '2023-05-05T10:00:00.000Z',
			end: '2023-05-05T11:30:00.000Z',
			location: 'Conference Room A',
			description:
				'Monthly team meeting to discuss project updates and goals.',
			attendees: ['john@example.com', 'jane@example.com'],
			isAllDay: false,
			recurrence: null,
		},
		{
			id: 'event-2',
			creator: 'John Doe',
			title: 'Client Presentation',
			start: '2023-05-10T14:00:00.000Z',
			end: '2023-05-10T15:30:00.000Z',
			location: 'Client Office',
			description:
				'Presenting the new product features to the client for feedback.',
			attendees: ['client@example.com'],
			isAllDay: false,
			recurrence: null,
		},
		{
			id: 'event-3',
			creator: 'John Doe',
			title: 'Project Deadline',
			start: '2023-05-15T09:00:00.000Z',
			end: '2023-05-15T17:00:00.000Z',
			location: 'Office',
			description:
				'Finalize and submit the project deliverables before the deadline.',
			attendees: [],
			isAllDay: false,
			recurrence: null,
		},
		{
			id: 'event-4',
			creator: 'John Doe',
			title: 'Team Lunch',
			start: '2023-05-18T12:30:00.000Z',
			end: '2023-05-18T13:30:00.000Z',
			location: 'Cafeteria',
			description:
				'Casual team lunch to celebrate recent achievements and boost team morale.',
			attendees: [],
			isAllDay: false,
			recurrence: {
				frequency: 'monthly',
				interval: 1,
				end: null,
			},
		},
		{
			id: 'event-5',
			creator: 'John Doe',
			title: 'Holiday - Memorial Day',
			start: '2023-05-31T00:00:00.000Z',
			end: '2023-05-31T23:59:59.999Z',
			location: '',
			description: 'Company holiday for Memorial Day. Office closed.',
			attendees: [],
			isAllDay: true,
			recurrence: null,
		},
		{
			id: 'event-6',
			creator: 'John Doe',
			title: 'Conference',
			start: '2023-05-08T09:00:00.000Z',
			end: '2023-05-11T17:00:00.000Z',
			location: 'Convention Center',
			description:
				'Annual industry conference featuring keynote speakers and workshops.',
			attendees: [],
			isAllDay: false,
			recurrence: null,
		},
		{
			id: 'event-7',
			creator: 'John Doe',
			title: 'Product Launch',
			start: '2023-05-12T15:00:00.000Z',
			end: '2023-05-12T17:00:00.000Z',
			location: 'Online',
			description:
				'Official launch of our new product with a live online event.',
			attendees: [],
			isAllDay: false,
			recurrence: null,
		},
		{
			id: 'event-8',
			creator: 'John Doe',
			title: 'Training Session',
			start: '2023-05-20T13:00:00.000Z',
			end: '2023-05-20T16:00:00.000Z',
			location: 'Training Room',
			description:
				'Training session on the new software tools for the development team.',
			attendees: ['developers@example.com'],
			isAllDay: false,
			recurrence: {
				frequency: 'weekly',
				interval: 2,
				end: '2023-06-30T00:00:00.000Z',
			},
		},
		{
			id: 'event-9',
			creator: 'John Doe',
			title: 'Team Building Activity',
			start: '2023-05-22T10:00:00.000Z',
			end: '2023-05-22T14:00:00.000Z',
			location: 'Outdoor Park',
			description:
				'Engaging team-building activity to foster teamwork and collaboration.',
			attendees: [],
			isAllDay: false,
			recurrence: {
				frequency: 'monthly',
				interval: 1,
				end: null,
			},
		},
		{
			id: 'event-10',
			creator: 'John Doe',
			title: 'Company Town Hall',
			start: '2023-05-25T15:30:00.000Z',
			end: '2023-05-25T17:00:00.000Z',
			location: 'Auditorium',
			description:
				'Quarterly town hall meeting to share company updates and address employee questions.',
			attendees: [],
			isAllDay: false,
			recurrence: {
				frequency: 'quarterly',
				interval: 1,
				end: null,
			},
		},
		{
			id: 'event-11',
			creator: 'John Doe',
			title: 'Marketing Campaign Meeting',
			start: '2023-05-03T14:00:00.000Z',
			end: '2023-05-03T15:30:00.000Z',
			location: 'Meeting Room B',
			description:
				'Planning meeting to discuss the upcoming marketing campaign strategies.',
			attendees: ['marketingteam@example.com'],
			isAllDay: false,
			recurrence: {
				frequency: 'weekly',
				interval: 1,
				end: '2023-06-30T00:00:00.000Z',
			},
		},
		{
			id: 'event-12',
			creator: 'John Doe',
			title: 'Product Demo',
			start: '2023-05-10T09:30:00.000Z',
			end: '2023-05-10T11:00:00.000Z',
			location: 'Client Office',
			description:
				'Presenting a demo of our product to potential clients for sales pitch.',
			attendees: ['sales@example.com'],
			isAllDay: false,
			recurrence: null,
		},
		{
			id: 'event-13',
			creator: 'John Doe',
			title: 'Project Kickoff',
			start: '2023-05-17T11:00:00.000Z',
			end: '2023-05-17T12:30:00.000Z',
			location: 'Conference Room A',
			description:
				'Initiating a new project with the project team, defining goals and deliverables.',
			attendees: [],
			isAllDay: false,
			recurrence: null,
		},
		{
			id: 'event-14',
			creator: 'John Doe',
			title: 'Team Training',
			start: '2023-05-22T09:00:00.000Z',
			end: '2023-05-22T12:00:00.000Z',
			location: 'Training Room',
			description:
				'Training session on new tools and techniques for the entire team.',
			attendees: [],
			isAllDay: false,
			recurrence: {
				frequency: 'monthly',
				interval: 1,
				end: null,
			},
		},
		{
			id: 'event-15',
			creator: 'John Doe',
			title: 'Company Social Event',
			start: '2023-05-26T17:30:00.000Z',
			end: '2023-05-26T21:00:00.000Z',
			location: 'Outdoor Venue',
			description:
				'Annual company social event to celebrate achievements and promote employee bonding.',
			attendees: [],
			isAllDay: false,
			recurrence: {
				frequency: 'yearly',
				interval: 1,
				end: null,
			},
		},
		{
			id: 'event-16',
			creator: 'Mary Soe',
			title: 'Product Dismissal',
			start: '2023-05-12T15:00:00.000Z',
			end: '2023-05-12T17:00:00.000Z',
			location: 'Offline',
			description:
				'Official dismissal of our new product with a live offline event.',
			attendees: [],
			isAllDay: false,
			recurrence: null,
		},
	],
	clients: [
		{
			fullName: 'Chinedu Okoro',
			jobTitle: 'Software Developer',
			phone: '+234-80-1234-5678',
			email: 'chinedu.okoro@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adaobi Nwosu',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-9876-5432',
			email: 'adaobi.nwosu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Emeka Okafor',
			jobTitle: 'Sales Manager',
			phone: '+234-70-5555-5555',
			email: 'emeka.okafor@example.com',
			patronizing: false,
		},
		{
			fullName: 'Bukola Adekunle',
			jobTitle: 'Accountant',
			phone: '+234-80-9876-5432',
			email: 'bukola.adekunle@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yusuf Ibrahim',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-1234-5678',
			email: 'yusuf.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Aisha Bello',
			jobTitle: 'HR Manager',
			phone: '+234-70-5678-1234',
			email: 'aisha.bello@example.com',
			patronizing: true,
		},
		{
			fullName: 'Tunde Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-80-5555-7777',
			email: 'tunde.adeleke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Lola Ogunlade',
			jobTitle: 'Public Relations Officer',
			phone: '+234-81-8765-4321',
			email: 'lola.ogunlade@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oluwaseun Oladipo',
			jobTitle: 'Project Manager',
			phone: '+234-70-2222-8888',
			email: 'oluwaseun.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Abimbola Adesina',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3456-7890',
			email: 'abimbola.adesina@example.com',
			patronizing: true,
		},
		{
			fullName: 'Segun Adegoke',
			jobTitle: 'IT Support Specialist',
			phone: '+234-81-6543-2109',
			email: 'segun.adegoke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folake Oni',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-9999-3333',
			email: 'folake.oni@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bamidele Okeke',
			jobTitle: 'Finance Manager',
			phone: '+234-80-8888-2222',
			email: 'bamidele.okeke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chioma Uzoma',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-3333-7777',
			email: 'chioma.uzoma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oladapo Adeniyi',
			jobTitle: 'Software Engineer',
			phone: '+234-70-7777-1111',
			email: 'oladapo.adeniyi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ngozi Ibe',
			jobTitle: 'Sales Representative',
			phone: '+234-80-1111-7777',
			email: 'ngozi.ibe@example.com',
			patronizing: true,
		},
		{
			fullName: 'Efe Okonkwo',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-7777-1111',
			email: 'efe.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chuka Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-2222-8888',
			email: 'chuka.eke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adeola Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-5555-7777',
			email: 'adeola.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ibrahim Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-8888-2222',
			email: 'ibrahim.abubakar@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amina Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-3456-7890',
			email: 'amina.mohammed@example.com',
			patronizing: false,
		},
		{
			fullName: 'Tolu Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-6543-2109',
			email: 'tolu.ojo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adetokunbo Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-9999-3333',
			email: 'adetokunbo.dosunmu@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chiamaka Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-8888-2222',
			email: 'chiamaka.obi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yakubu Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-3333-7777',
			email: 'yakubu.danjuma@example.com',
			patronizing: false,
		},
		{
			fullName: 'Halima Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-7777-1111',
			email: 'halima.musa@example.com',
			patronizing: true,
		},
		{
			fullName: 'Suleiman Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-1111-7777',
			email: 'suleiman.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yetunde Adebayo',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-7777-1111',
			email: 'yetunde.adebayo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Idris Bello',
			jobTitle: 'Sales Manager',
			phone: '+234-81-2222-8888',
			email: 'idris.bello@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folashade Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-70-5555-7777',
			email: 'folashade.adeleke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olumide Ajayi',
			jobTitle: 'Software Developer',
			phone: '+234-80-8888-2222',
			email: 'olumide.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Amara Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-3456-7890',
			email: 'amara.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Ikechukwu Nnamdi',
			jobTitle: 'Sales Representative',
			phone: '+234-70-6543-2109',
			email: 'ikechukwu.nnamdi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Nkechi Azubuike',
			jobTitle: 'Graphic Designer',
			phone: '+234-80-9999-3333',
			email: 'nkechi.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidi Ekwueme',
			jobTitle: 'Accountant',
			phone: '+234-81-8888-2222',
			email: 'chidi.ekwueme@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adebayo Oladimeji',
			jobTitle: 'Marketing Manager',
			phone: '+234-70-3333-7777',
			email: 'adebayo.oladimeji@example.com',
			patronizing: true,
		},
		{
			fullName: 'Funmilayo Osagie',
			jobTitle: 'Public Relations Officer',
			phone: '+234-80-7777-1111',
			email: 'funmilayo.osagie@example.com',
			patronizing: false,
		},
		{
			fullName: 'Temitope Ayodele',
			jobTitle: 'Project Manager',
			phone: '+234-81-1111-7777',
			email: 'temitope.ayodele@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olabisi Fashina',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-2222-8888',
			email: 'olabisi.fashina@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chika Onuoha',
			jobTitle: 'Finance Manager',
			phone: '+234-80-5555-7777',
			email: 'chika.onuoha@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nnamdi Okonkwo',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-8888-2222',
			email: 'nnamdi.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ezinne Uzo',
			jobTitle: 'Software Engineer',
			phone: '+234-70-3333-7777',
			email: 'ezinne.uzo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adegoke Oladipo',
			jobTitle: 'Sales Representative',
			phone: '+234-80-9999-3333',
			email: 'adegoke.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Obiageli Eze',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-3333-7777',
			email: 'obiageli.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chinwe Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-8888-2222',
			email: 'chinwe.eke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ayodele Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-3333-7777',
			email: 'ayodele.adeyemi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nafisat Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-7777-1111',
			email: 'nafisat.abubakar@example.com',
			patronizing: false,
		},
		{
			fullName: 'Isa Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-1111-7777',
			email: 'isa.mohammed@example.com',
			patronizing: true,
		},
		{
			fullName: 'Sadiq Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-7777-1111',
			email: 'sadiq.ojo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Femi Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-2222-8888',
			email: 'femi.dosunmu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidinma Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-5555-7777',
			email: 'chidinma.obi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Usman Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-8888-2222',
			email: 'usman.danjuma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Rahma Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-3333-7777',
			email: 'rahma.musa@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ahmed Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-9999-3333',
			email: 'ahmed.ibrahim@example.com',
			patronizing: true,
		},
		{
			fullName: 'Fatimah Adeyemi',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3333-7777',
			email: 'fatimah.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yusuf Azubuike',
			jobTitle: 'Sales Manager',
			phone: '+234-81-7777-1111',
			email: 'yusuf.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bolaji Ajayi',
			jobTitle: 'Business Analyst',
			phone: '+234-70-1111-7777',
			email: 'bolaji.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Oluwafunmilayo Okonkwo',
			jobTitle: 'Software Developer',
			phone: '+234-80-7777-1111',
			email: 'oluwafunmilayo.okonkwo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amaka Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-2222-8888',
			email: 'amaka.eze@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chinedu Okoro',
			jobTitle: 'Software Developer',
			phone: '+234-80-1234-5678',
			email: 'chinedu.okoro@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adaobi Nwosu',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-9876-5432',
			email: 'adaobi.nwosu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Emeka Okafor',
			jobTitle: 'Sales Manager',
			phone: '+234-70-5555-5555',
			email: 'emeka.okafor@example.com',
			patronizing: false,
		},
		{
			fullName: 'Bukola Adekunle',
			jobTitle: 'Accountant',
			phone: '+234-80-9876-5432',
			email: 'bukola.adekunle@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yusuf Ibrahim',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-1234-5678',
			email: 'yusuf.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Aisha Bello',
			jobTitle: 'HR Manager',
			phone: '+234-70-5678-1234',
			email: 'aisha.bello@example.com',
			patronizing: true,
		},
		{
			fullName: 'Tunde Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-80-5555-7777',
			email: 'tunde.adeleke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Lola Ogunlade',
			jobTitle: 'Public Relations Officer',
			phone: '+234-81-8765-4321',
			email: 'lola.ogunlade@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oluwaseun Oladipo',
			jobTitle: 'Project Manager',
			phone: '+234-70-2222-8888',
			email: 'oluwaseun.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Abimbola Adesina',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3456-7890',
			email: 'abimbola.adesina@example.com',
			patronizing: true,
		},
		{
			fullName: 'Segun Adegoke',
			jobTitle: 'IT Support Specialist',
			phone: '+234-81-6543-2109',
			email: 'segun.adegoke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folake Oni',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-9999-3333',
			email: 'folake.oni@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bamidele Okeke',
			jobTitle: 'Finance Manager',
			phone: '+234-80-8888-2222',
			email: 'bamidele.okeke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chioma Uzoma',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-3333-7777',
			email: 'chioma.uzoma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oladapo Adeniyi',
			jobTitle: 'Software Engineer',
			phone: '+234-70-7777-1111',
			email: 'oladapo.adeniyi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ngozi Ibe',
			jobTitle: 'Sales Representative',
			phone: '+234-80-1111-7777',
			email: 'ngozi.ibe@example.com',
			patronizing: true,
		},
		{
			fullName: 'Efe Okonkwo',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-7777-1111',
			email: 'efe.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chuka Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-2222-8888',
			email: 'chuka.eke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adeola Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-5555-7777',
			email: 'adeola.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ibrahim Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-8888-2222',
			email: 'ibrahim.abubakar@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amina Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-3456-7890',
			email: 'amina.mohammed@example.com',
			patronizing: false,
		},
		{
			fullName: 'Tolu Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-6543-2109',
			email: 'tolu.ojo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adetokunbo Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-9999-3333',
			email: 'adetokunbo.dosunmu@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chiamaka Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-8888-2222',
			email: 'chiamaka.obi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yakubu Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-3333-7777',
			email: 'yakubu.danjuma@example.com',
			patronizing: false,
		},
		{
			fullName: 'Halima Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-7777-1111',
			email: 'halima.musa@example.com',
			patronizing: true,
		},
		{
			fullName: 'Suleiman Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-1111-7777',
			email: 'suleiman.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yetunde Adebayo',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-7777-1111',
			email: 'yetunde.adebayo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Idris Bello',
			jobTitle: 'Sales Manager',
			phone: '+234-81-2222-8888',
			email: 'idris.bello@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folashade Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-70-5555-7777',
			email: 'folashade.adeleke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olumide Ajayi',
			jobTitle: 'Software Developer',
			phone: '+234-80-8888-2222',
			email: 'olumide.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Amara Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-3456-7890',
			email: 'amara.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Ikechukwu Nnamdi',
			jobTitle: 'Sales Representative',
			phone: '+234-70-6543-2109',
			email: 'ikechukwu.nnamdi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Nkechi Azubuike',
			jobTitle: 'Graphic Designer',
			phone: '+234-80-9999-3333',
			email: 'nkechi.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidi Ekwueme',
			jobTitle: 'Accountant',
			phone: '+234-81-8888-2222',
			email: 'chidi.ekwueme@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adebayo Oladimeji',
			jobTitle: 'Marketing Manager',
			phone: '+234-70-3333-7777',
			email: 'adebayo.oladimeji@example.com',
			patronizing: true,
		},
		{
			fullName: 'Funmilayo Osagie',
			jobTitle: 'Public Relations Officer',
			phone: '+234-80-7777-1111',
			email: 'funmilayo.osagie@example.com',
			patronizing: false,
		},
		{
			fullName: 'Temitope Ayodele',
			jobTitle: 'Project Manager',
			phone: '+234-81-1111-7777',
			email: 'temitope.ayodele@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olabisi Fashina',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-2222-8888',
			email: 'olabisi.fashina@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chika Onuoha',
			jobTitle: 'Finance Manager',
			phone: '+234-80-5555-7777',
			email: 'chika.onuoha@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nnamdi Okonkwo',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-8888-2222',
			email: 'nnamdi.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ezinne Uzo',
			jobTitle: 'Software Engineer',
			phone: '+234-70-3333-7777',
			email: 'ezinne.uzo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adegoke Oladipo',
			jobTitle: 'Sales Representative',
			phone: '+234-80-9999-3333',
			email: 'adegoke.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Obiageli Eze',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-3333-7777',
			email: 'obiageli.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chinwe Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-8888-2222',
			email: 'chinwe.eke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ayodele Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-3333-7777',
			email: 'ayodele.adeyemi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nafisat Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-7777-1111',
			email: 'nafisat.abubakar@example.com',
			patronizing: false,
		},
		{
			fullName: 'Isa Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-1111-7777',
			email: 'isa.mohammed@example.com',
			patronizing: true,
		},
		{
			fullName: 'Sadiq Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-7777-1111',
			email: 'sadiq.ojo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Femi Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-2222-8888',
			email: 'femi.dosunmu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidinma Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-5555-7777',
			email: 'chidinma.obi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Usman Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-8888-2222',
			email: 'usman.danjuma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Rahma Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-3333-7777',
			email: 'rahma.musa@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ahmed Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-9999-3333',
			email: 'ahmed.ibrahim@example.com',
			patronizing: true,
		},
		{
			fullName: 'Fatimah Adeyemi',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3333-7777',
			email: 'fatimah.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yusuf Azubuike',
			jobTitle: 'Sales Manager',
			phone: '+234-81-7777-1111',
			email: 'yusuf.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bolaji Ajayi',
			jobTitle: 'Business Analyst',
			phone: '+234-70-1111-7777',
			email: 'bolaji.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Oluwafunmilayo Okonkwo',
			jobTitle: 'Software Developer',
			phone: '+234-80-7777-1111',
			email: 'oluwafunmilayo.okonkwo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amaka Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-2222-8888',
			email: 'amaka.eze@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chinedu Okoro',
			jobTitle: 'Software Developer',
			phone: '+234-80-1234-5678',
			email: 'chinedu.okoro@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adaobi Nwosu',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-9876-5432',
			email: 'adaobi.nwosu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Emeka Okafor',
			jobTitle: 'Sales Manager',
			phone: '+234-70-5555-5555',
			email: 'emeka.okafor@example.com',
			patronizing: false,
		},
		{
			fullName: 'Bukola Adekunle',
			jobTitle: 'Accountant',
			phone: '+234-80-9876-5432',
			email: 'bukola.adekunle@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yusuf Ibrahim',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-1234-5678',
			email: 'yusuf.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Aisha Bello',
			jobTitle: 'HR Manager',
			phone: '+234-70-5678-1234',
			email: 'aisha.bello@example.com',
			patronizing: true,
		},
		{
			fullName: 'Tunde Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-80-5555-7777',
			email: 'tunde.adeleke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Lola Ogunlade',
			jobTitle: 'Public Relations Officer',
			phone: '+234-81-8765-4321',
			email: 'lola.ogunlade@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oluwaseun Oladipo',
			jobTitle: 'Project Manager',
			phone: '+234-70-2222-8888',
			email: 'oluwaseun.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Abimbola Adesina',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3456-7890',
			email: 'abimbola.adesina@example.com',
			patronizing: true,
		},
		{
			fullName: 'Segun Adegoke',
			jobTitle: 'IT Support Specialist',
			phone: '+234-81-6543-2109',
			email: 'segun.adegoke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folake Oni',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-9999-3333',
			email: 'folake.oni@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bamidele Okeke',
			jobTitle: 'Finance Manager',
			phone: '+234-80-8888-2222',
			email: 'bamidele.okeke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chioma Uzoma',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-3333-7777',
			email: 'chioma.uzoma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oladapo Adeniyi',
			jobTitle: 'Software Engineer',
			phone: '+234-70-7777-1111',
			email: 'oladapo.adeniyi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ngozi Ibe',
			jobTitle: 'Sales Representative',
			phone: '+234-80-1111-7777',
			email: 'ngozi.ibe@example.com',
			patronizing: true,
		},
		{
			fullName: 'Efe Okonkwo',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-7777-1111',
			email: 'efe.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chuka Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-2222-8888',
			email: 'chuka.eke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adeola Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-5555-7777',
			email: 'adeola.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ibrahim Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-8888-2222',
			email: 'ibrahim.abubakar@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amina Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-3456-7890',
			email: 'amina.mohammed@example.com',
			patronizing: false,
		},
		{
			fullName: 'Tolu Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-6543-2109',
			email: 'tolu.ojo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adetokunbo Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-9999-3333',
			email: 'adetokunbo.dosunmu@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chiamaka Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-8888-2222',
			email: 'chiamaka.obi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yakubu Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-3333-7777',
			email: 'yakubu.danjuma@example.com',
			patronizing: false,
		},
		{
			fullName: 'Halima Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-7777-1111',
			email: 'halima.musa@example.com',
			patronizing: true,
		},
		{
			fullName: 'Suleiman Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-1111-7777',
			email: 'suleiman.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yetunde Adebayo',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-7777-1111',
			email: 'yetunde.adebayo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Idris Bello',
			jobTitle: 'Sales Manager',
			phone: '+234-81-2222-8888',
			email: 'idris.bello@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folashade Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-70-5555-7777',
			email: 'folashade.adeleke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olumide Ajayi',
			jobTitle: 'Software Developer',
			phone: '+234-80-8888-2222',
			email: 'olumide.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Amara Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-3456-7890',
			email: 'amara.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Ikechukwu Nnamdi',
			jobTitle: 'Sales Representative',
			phone: '+234-70-6543-2109',
			email: 'ikechukwu.nnamdi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Nkechi Azubuike',
			jobTitle: 'Graphic Designer',
			phone: '+234-80-9999-3333',
			email: 'nkechi.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidi Ekwueme',
			jobTitle: 'Accountant',
			phone: '+234-81-8888-2222',
			email: 'chidi.ekwueme@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adebayo Oladimeji',
			jobTitle: 'Marketing Manager',
			phone: '+234-70-3333-7777',
			email: 'adebayo.oladimeji@example.com',
			patronizing: true,
		},
		{
			fullName: 'Funmilayo Osagie',
			jobTitle: 'Public Relations Officer',
			phone: '+234-80-7777-1111',
			email: 'funmilayo.osagie@example.com',
			patronizing: false,
		},
		{
			fullName: 'Temitope Ayodele',
			jobTitle: 'Project Manager',
			phone: '+234-81-1111-7777',
			email: 'temitope.ayodele@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olabisi Fashina',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-2222-8888',
			email: 'olabisi.fashina@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chika Onuoha',
			jobTitle: 'Finance Manager',
			phone: '+234-80-5555-7777',
			email: 'chika.onuoha@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nnamdi Okonkwo',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-8888-2222',
			email: 'nnamdi.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ezinne Uzo',
			jobTitle: 'Software Engineer',
			phone: '+234-70-3333-7777',
			email: 'ezinne.uzo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adegoke Oladipo',
			jobTitle: 'Sales Representative',
			phone: '+234-80-9999-3333',
			email: 'adegoke.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Obiageli Eze',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-3333-7777',
			email: 'obiageli.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chinwe Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-8888-2222',
			email: 'chinwe.eke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ayodele Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-3333-7777',
			email: 'ayodele.adeyemi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nafisat Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-7777-1111',
			email: 'nafisat.abubakar@example.com',
			patronizing: false,
		},
		{
			fullName: 'Isa Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-1111-7777',
			email: 'isa.mohammed@example.com',
			patronizing: true,
		},
		{
			fullName: 'Sadiq Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-7777-1111',
			email: 'sadiq.ojo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Femi Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-2222-8888',
			email: 'femi.dosunmu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidinma Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-5555-7777',
			email: 'chidinma.obi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Usman Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-8888-2222',
			email: 'usman.danjuma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Rahma Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-3333-7777',
			email: 'rahma.musa@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ahmed Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-9999-3333',
			email: 'ahmed.ibrahim@example.com',
			patronizing: true,
		},
		{
			fullName: 'Fatimah Adeyemi',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3333-7777',
			email: 'fatimah.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yusuf Azubuike',
			jobTitle: 'Sales Manager',
			phone: '+234-81-7777-1111',
			email: 'yusuf.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bolaji Ajayi',
			jobTitle: 'Business Analyst',
			phone: '+234-70-1111-7777',
			email: 'bolaji.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Oluwafunmilayo Okonkwo',
			jobTitle: 'Software Developer',
			phone: '+234-80-7777-1111',
			email: 'oluwafunmilayo.okonkwo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amaka Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-2222-8888',
			email: 'amaka.eze@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chinedu Okoro',
			jobTitle: 'Software Developer',
			phone: '+234-80-1234-5678',
			email: 'chinedu.okoro@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adaobi Nwosu',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-9876-5432',
			email: 'adaobi.nwosu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Emeka Okafor',
			jobTitle: 'Sales Manager',
			phone: '+234-70-5555-5555',
			email: 'emeka.okafor@example.com',
			patronizing: false,
		},
		{
			fullName: 'Bukola Adekunle',
			jobTitle: 'Accountant',
			phone: '+234-80-9876-5432',
			email: 'bukola.adekunle@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yusuf Ibrahim',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-1234-5678',
			email: 'yusuf.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Aisha Bello',
			jobTitle: 'HR Manager',
			phone: '+234-70-5678-1234',
			email: 'aisha.bello@example.com',
			patronizing: true,
		},
		{
			fullName: 'Tunde Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-80-5555-7777',
			email: 'tunde.adeleke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Lola Ogunlade',
			jobTitle: 'Public Relations Officer',
			phone: '+234-81-8765-4321',
			email: 'lola.ogunlade@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oluwaseun Oladipo',
			jobTitle: 'Project Manager',
			phone: '+234-70-2222-8888',
			email: 'oluwaseun.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Abimbola Adesina',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3456-7890',
			email: 'abimbola.adesina@example.com',
			patronizing: true,
		},
		{
			fullName: 'Segun Adegoke',
			jobTitle: 'IT Support Specialist',
			phone: '+234-81-6543-2109',
			email: 'segun.adegoke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folake Oni',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-9999-3333',
			email: 'folake.oni@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bamidele Okeke',
			jobTitle: 'Finance Manager',
			phone: '+234-80-8888-2222',
			email: 'bamidele.okeke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chioma Uzoma',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-3333-7777',
			email: 'chioma.uzoma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oladapo Adeniyi',
			jobTitle: 'Software Engineer',
			phone: '+234-70-7777-1111',
			email: 'oladapo.adeniyi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ngozi Ibe',
			jobTitle: 'Sales Representative',
			phone: '+234-80-1111-7777',
			email: 'ngozi.ibe@example.com',
			patronizing: true,
		},
		{
			fullName: 'Efe Okonkwo',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-7777-1111',
			email: 'efe.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chuka Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-2222-8888',
			email: 'chuka.eke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adeola Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-5555-7777',
			email: 'adeola.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ibrahim Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-8888-2222',
			email: 'ibrahim.abubakar@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amina Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-3456-7890',
			email: 'amina.mohammed@example.com',
			patronizing: false,
		},
		{
			fullName: 'Tolu Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-6543-2109',
			email: 'tolu.ojo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adetokunbo Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-9999-3333',
			email: 'adetokunbo.dosunmu@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chiamaka Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-8888-2222',
			email: 'chiamaka.obi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yakubu Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-3333-7777',
			email: 'yakubu.danjuma@example.com',
			patronizing: false,
		},
		{
			fullName: 'Halima Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-7777-1111',
			email: 'halima.musa@example.com',
			patronizing: true,
		},
		{
			fullName: 'Suleiman Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-1111-7777',
			email: 'suleiman.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yetunde Adebayo',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-7777-1111',
			email: 'yetunde.adebayo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Idris Bello',
			jobTitle: 'Sales Manager',
			phone: '+234-81-2222-8888',
			email: 'idris.bello@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folashade Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-70-5555-7777',
			email: 'folashade.adeleke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olumide Ajayi',
			jobTitle: 'Software Developer',
			phone: '+234-80-8888-2222',
			email: 'olumide.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Amara Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-3456-7890',
			email: 'amara.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Ikechukwu Nnamdi',
			jobTitle: 'Sales Representative',
			phone: '+234-70-6543-2109',
			email: 'ikechukwu.nnamdi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Nkechi Azubuike',
			jobTitle: 'Graphic Designer',
			phone: '+234-80-9999-3333',
			email: 'nkechi.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidi Ekwueme',
			jobTitle: 'Accountant',
			phone: '+234-81-8888-2222',
			email: 'chidi.ekwueme@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adebayo Oladimeji',
			jobTitle: 'Marketing Manager',
			phone: '+234-70-3333-7777',
			email: 'adebayo.oladimeji@example.com',
			patronizing: true,
		},
		{
			fullName: 'Funmilayo Osagie',
			jobTitle: 'Public Relations Officer',
			phone: '+234-80-7777-1111',
			email: 'funmilayo.osagie@example.com',
			patronizing: false,
		},
		{
			fullName: 'Temitope Ayodele',
			jobTitle: 'Project Manager',
			phone: '+234-81-1111-7777',
			email: 'temitope.ayodele@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olabisi Fashina',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-2222-8888',
			email: 'olabisi.fashina@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chika Onuoha',
			jobTitle: 'Finance Manager',
			phone: '+234-80-5555-7777',
			email: 'chika.onuoha@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nnamdi Okonkwo',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-8888-2222',
			email: 'nnamdi.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ezinne Uzo',
			jobTitle: 'Software Engineer',
			phone: '+234-70-3333-7777',
			email: 'ezinne.uzo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adegoke Oladipo',
			jobTitle: 'Sales Representative',
			phone: '+234-80-9999-3333',
			email: 'adegoke.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Obiageli Eze',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-3333-7777',
			email: 'obiageli.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chinwe Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-8888-2222',
			email: 'chinwe.eke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ayodele Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-3333-7777',
			email: 'ayodele.adeyemi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nafisat Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-7777-1111',
			email: 'nafisat.abubakar@example.com',
			patronizing: false,
		},
		{
			fullName: 'Isa Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-1111-7777',
			email: 'isa.mohammed@example.com',
			patronizing: true,
		},
		{
			fullName: 'Sadiq Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-7777-1111',
			email: 'sadiq.ojo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Femi Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-2222-8888',
			email: 'femi.dosunmu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidinma Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-5555-7777',
			email: 'chidinma.obi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Usman Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-8888-2222',
			email: 'usman.danjuma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Rahma Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-3333-7777',
			email: 'rahma.musa@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ahmed Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-9999-3333',
			email: 'ahmed.ibrahim@example.com',
			patronizing: true,
		},
		{
			fullName: 'Fatimah Adeyemi',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3333-7777',
			email: 'fatimah.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yusuf Azubuike',
			jobTitle: 'Sales Manager',
			phone: '+234-81-7777-1111',
			email: 'yusuf.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bolaji Ajayi',
			jobTitle: 'Business Analyst',
			phone: '+234-70-1111-7777',
			email: 'bolaji.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Oluwafunmilayo Okonkwo',
			jobTitle: 'Software Developer',
			phone: '+234-80-7777-1111',
			email: 'oluwafunmilayo.okonkwo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amaka Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-2222-8888',
			email: 'amaka.eze@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chinedu Okoro',
			jobTitle: 'Software Developer',
			phone: '+234-80-1234-5678',
			email: 'chinedu.okoro@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adaobi Nwosu',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-9876-5432',
			email: 'adaobi.nwosu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Emeka Okafor',
			jobTitle: 'Sales Manager',
			phone: '+234-70-5555-5555',
			email: 'emeka.okafor@example.com',
			patronizing: false,
		},
		{
			fullName: 'Bukola Adekunle',
			jobTitle: 'Accountant',
			phone: '+234-80-9876-5432',
			email: 'bukola.adekunle@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yusuf Ibrahim',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-1234-5678',
			email: 'yusuf.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Aisha Bello',
			jobTitle: 'HR Manager',
			phone: '+234-70-5678-1234',
			email: 'aisha.bello@example.com',
			patronizing: true,
		},
		{
			fullName: 'Tunde Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-80-5555-7777',
			email: 'tunde.adeleke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Lola Ogunlade',
			jobTitle: 'Public Relations Officer',
			phone: '+234-81-8765-4321',
			email: 'lola.ogunlade@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oluwaseun Oladipo',
			jobTitle: 'Project Manager',
			phone: '+234-70-2222-8888',
			email: 'oluwaseun.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Abimbola Adesina',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3456-7890',
			email: 'abimbola.adesina@example.com',
			patronizing: true,
		},
		{
			fullName: 'Segun Adegoke',
			jobTitle: 'IT Support Specialist',
			phone: '+234-81-6543-2109',
			email: 'segun.adegoke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folake Oni',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-9999-3333',
			email: 'folake.oni@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bamidele Okeke',
			jobTitle: 'Finance Manager',
			phone: '+234-80-8888-2222',
			email: 'bamidele.okeke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chioma Uzoma',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-3333-7777',
			email: 'chioma.uzoma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oladapo Adeniyi',
			jobTitle: 'Software Engineer',
			phone: '+234-70-7777-1111',
			email: 'oladapo.adeniyi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ngozi Ibe',
			jobTitle: 'Sales Representative',
			phone: '+234-80-1111-7777',
			email: 'ngozi.ibe@example.com',
			patronizing: true,
		},
		{
			fullName: 'Efe Okonkwo',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-7777-1111',
			email: 'efe.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chuka Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-2222-8888',
			email: 'chuka.eke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adeola Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-5555-7777',
			email: 'adeola.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ibrahim Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-8888-2222',
			email: 'ibrahim.abubakar@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amina Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-3456-7890',
			email: 'amina.mohammed@example.com',
			patronizing: false,
		},
		{
			fullName: 'Tolu Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-6543-2109',
			email: 'tolu.ojo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adetokunbo Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-9999-3333',
			email: 'adetokunbo.dosunmu@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chiamaka Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-8888-2222',
			email: 'chiamaka.obi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yakubu Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-3333-7777',
			email: 'yakubu.danjuma@example.com',
			patronizing: false,
		},
		{
			fullName: 'Halima Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-7777-1111',
			email: 'halima.musa@example.com',
			patronizing: true,
		},
		{
			fullName: 'Suleiman Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-1111-7777',
			email: 'suleiman.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yetunde Adebayo',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-7777-1111',
			email: 'yetunde.adebayo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Idris Bello',
			jobTitle: 'Sales Manager',
			phone: '+234-81-2222-8888',
			email: 'idris.bello@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folashade Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-70-5555-7777',
			email: 'folashade.adeleke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olumide Ajayi',
			jobTitle: 'Software Developer',
			phone: '+234-80-8888-2222',
			email: 'olumide.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Amara Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-3456-7890',
			email: 'amara.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Ikechukwu Nnamdi',
			jobTitle: 'Sales Representative',
			phone: '+234-70-6543-2109',
			email: 'ikechukwu.nnamdi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Nkechi Azubuike',
			jobTitle: 'Graphic Designer',
			phone: '+234-80-9999-3333',
			email: 'nkechi.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidi Ekwueme',
			jobTitle: 'Accountant',
			phone: '+234-81-8888-2222',
			email: 'chidi.ekwueme@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adebayo Oladimeji',
			jobTitle: 'Marketing Manager',
			phone: '+234-70-3333-7777',
			email: 'adebayo.oladimeji@example.com',
			patronizing: true,
		},
		{
			fullName: 'Funmilayo Osagie',
			jobTitle: 'Public Relations Officer',
			phone: '+234-80-7777-1111',
			email: 'funmilayo.osagie@example.com',
			patronizing: false,
		},
		{
			fullName: 'Temitope Ayodele',
			jobTitle: 'Project Manager',
			phone: '+234-81-1111-7777',
			email: 'temitope.ayodele@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olabisi Fashina',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-2222-8888',
			email: 'olabisi.fashina@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chika Onuoha',
			jobTitle: 'Finance Manager',
			phone: '+234-80-5555-7777',
			email: 'chika.onuoha@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nnamdi Okonkwo',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-8888-2222',
			email: 'nnamdi.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ezinne Uzo',
			jobTitle: 'Software Engineer',
			phone: '+234-70-3333-7777',
			email: 'ezinne.uzo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adegoke Oladipo',
			jobTitle: 'Sales Representative',
			phone: '+234-80-9999-3333',
			email: 'adegoke.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Obiageli Eze',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-3333-7777',
			email: 'obiageli.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chinwe Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-8888-2222',
			email: 'chinwe.eke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ayodele Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-3333-7777',
			email: 'ayodele.adeyemi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nafisat Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-7777-1111',
			email: 'nafisat.abubakar@example.com',
			patronizing: false,
		},
		{
			fullName: 'Isa Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-1111-7777',
			email: 'isa.mohammed@example.com',
			patronizing: true,
		},
		{
			fullName: 'Sadiq Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-7777-1111',
			email: 'sadiq.ojo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Femi Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-2222-8888',
			email: 'femi.dosunmu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidinma Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-5555-7777',
			email: 'chidinma.obi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Usman Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-8888-2222',
			email: 'usman.danjuma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Rahma Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-3333-7777',
			email: 'rahma.musa@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ahmed Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-9999-3333',
			email: 'ahmed.ibrahim@example.com',
			patronizing: true,
		},
		{
			fullName: 'Fatimah Adeyemi',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3333-7777',
			email: 'fatimah.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yusuf Azubuike',
			jobTitle: 'Sales Manager',
			phone: '+234-81-7777-1111',
			email: 'yusuf.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bolaji Ajayi',
			jobTitle: 'Business Analyst',
			phone: '+234-70-1111-7777',
			email: 'bolaji.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Oluwafunmilayo Okonkwo',
			jobTitle: 'Software Developer',
			phone: '+234-80-7777-1111',
			email: 'oluwafunmilayo.okonkwo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amaka Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-2222-8888',
			email: 'amaka.eze@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chinedu Okoro',
			jobTitle: 'Software Developer',
			phone: '+234-80-1234-5678',
			email: 'chinedu.okoro@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adaobi Nwosu',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-9876-5432',
			email: 'adaobi.nwosu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Emeka Okafor',
			jobTitle: 'Sales Manager',
			phone: '+234-70-5555-5555',
			email: 'emeka.okafor@example.com',
			patronizing: false,
		},
		{
			fullName: 'Bukola Adekunle',
			jobTitle: 'Accountant',
			phone: '+234-80-9876-5432',
			email: 'bukola.adekunle@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yusuf Ibrahim',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-1234-5678',
			email: 'yusuf.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Aisha Bello',
			jobTitle: 'HR Manager',
			phone: '+234-70-5678-1234',
			email: 'aisha.bello@example.com',
			patronizing: true,
		},
		{
			fullName: 'Tunde Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-80-5555-7777',
			email: 'tunde.adeleke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Lola Ogunlade',
			jobTitle: 'Public Relations Officer',
			phone: '+234-81-8765-4321',
			email: 'lola.ogunlade@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oluwaseun Oladipo',
			jobTitle: 'Project Manager',
			phone: '+234-70-2222-8888',
			email: 'oluwaseun.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Abimbola Adesina',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3456-7890',
			email: 'abimbola.adesina@example.com',
			patronizing: true,
		},
		{
			fullName: 'Segun Adegoke',
			jobTitle: 'IT Support Specialist',
			phone: '+234-81-6543-2109',
			email: 'segun.adegoke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folake Oni',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-9999-3333',
			email: 'folake.oni@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bamidele Okeke',
			jobTitle: 'Finance Manager',
			phone: '+234-80-8888-2222',
			email: 'bamidele.okeke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chioma Uzoma',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-3333-7777',
			email: 'chioma.uzoma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oladapo Adeniyi',
			jobTitle: 'Software Engineer',
			phone: '+234-70-7777-1111',
			email: 'oladapo.adeniyi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ngozi Ibe',
			jobTitle: 'Sales Representative',
			phone: '+234-80-1111-7777',
			email: 'ngozi.ibe@example.com',
			patronizing: true,
		},
		{
			fullName: 'Efe Okonkwo',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-7777-1111',
			email: 'efe.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chuka Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-2222-8888',
			email: 'chuka.eke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adeola Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-5555-7777',
			email: 'adeola.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ibrahim Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-8888-2222',
			email: 'ibrahim.abubakar@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amina Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-3456-7890',
			email: 'amina.mohammed@example.com',
			patronizing: false,
		},
		{
			fullName: 'Tolu Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-6543-2109',
			email: 'tolu.ojo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adetokunbo Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-9999-3333',
			email: 'adetokunbo.dosunmu@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chiamaka Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-8888-2222',
			email: 'chiamaka.obi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yakubu Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-3333-7777',
			email: 'yakubu.danjuma@example.com',
			patronizing: false,
		},
		{
			fullName: 'Halima Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-7777-1111',
			email: 'halima.musa@example.com',
			patronizing: true,
		},
		{
			fullName: 'Suleiman Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-1111-7777',
			email: 'suleiman.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yetunde Adebayo',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-7777-1111',
			email: 'yetunde.adebayo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Idris Bello',
			jobTitle: 'Sales Manager',
			phone: '+234-81-2222-8888',
			email: 'idris.bello@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folashade Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-70-5555-7777',
			email: 'folashade.adeleke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olumide Ajayi',
			jobTitle: 'Software Developer',
			phone: '+234-80-8888-2222',
			email: 'olumide.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Amara Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-3456-7890',
			email: 'amara.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Ikechukwu Nnamdi',
			jobTitle: 'Sales Representative',
			phone: '+234-70-6543-2109',
			email: 'ikechukwu.nnamdi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Nkechi Azubuike',
			jobTitle: 'Graphic Designer',
			phone: '+234-80-9999-3333',
			email: 'nkechi.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidi Ekwueme',
			jobTitle: 'Accountant',
			phone: '+234-81-8888-2222',
			email: 'chidi.ekwueme@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adebayo Oladimeji',
			jobTitle: 'Marketing Manager',
			phone: '+234-70-3333-7777',
			email: 'adebayo.oladimeji@example.com',
			patronizing: true,
		},
		{
			fullName: 'Funmilayo Osagie',
			jobTitle: 'Public Relations Officer',
			phone: '+234-80-7777-1111',
			email: 'funmilayo.osagie@example.com',
			patronizing: false,
		},
		{
			fullName: 'Temitope Ayodele',
			jobTitle: 'Project Manager',
			phone: '+234-81-1111-7777',
			email: 'temitope.ayodele@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olabisi Fashina',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-2222-8888',
			email: 'olabisi.fashina@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chika Onuoha',
			jobTitle: 'Finance Manager',
			phone: '+234-80-5555-7777',
			email: 'chika.onuoha@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nnamdi Okonkwo',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-8888-2222',
			email: 'nnamdi.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ezinne Uzo',
			jobTitle: 'Software Engineer',
			phone: '+234-70-3333-7777',
			email: 'ezinne.uzo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adegoke Oladipo',
			jobTitle: 'Sales Representative',
			phone: '+234-80-9999-3333',
			email: 'adegoke.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Obiageli Eze',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-3333-7777',
			email: 'obiageli.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chinwe Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-8888-2222',
			email: 'chinwe.eke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ayodele Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-3333-7777',
			email: 'ayodele.adeyemi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nafisat Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-7777-1111',
			email: 'nafisat.abubakar@example.com',
			patronizing: false,
		},
		{
			fullName: 'Isa Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-1111-7777',
			email: 'isa.mohammed@example.com',
			patronizing: true,
		},
		{
			fullName: 'Sadiq Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-7777-1111',
			email: 'sadiq.ojo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Femi Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-2222-8888',
			email: 'femi.dosunmu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidinma Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-5555-7777',
			email: 'chidinma.obi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Usman Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-8888-2222',
			email: 'usman.danjuma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Rahma Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-3333-7777',
			email: 'rahma.musa@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ahmed Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-9999-3333',
			email: 'ahmed.ibrahim@example.com',
			patronizing: true,
		},
		{
			fullName: 'Fatimah Adeyemi',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3333-7777',
			email: 'fatimah.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yusuf Azubuike',
			jobTitle: 'Sales Manager',
			phone: '+234-81-7777-1111',
			email: 'yusuf.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bolaji Ajayi',
			jobTitle: 'Business Analyst',
			phone: '+234-70-1111-7777',
			email: 'bolaji.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Oluwafunmilayo Okonkwo',
			jobTitle: 'Software Developer',
			phone: '+234-80-7777-1111',
			email: 'oluwafunmilayo.okonkwo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amaka Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-2222-8888',
			email: 'amaka.eze@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chinedu Okoro',
			jobTitle: 'Software Developer',
			phone: '+234-80-1234-5678',
			email: 'chinedu.okoro@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adaobi Nwosu',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-9876-5432',
			email: 'adaobi.nwosu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Emeka Okafor',
			jobTitle: 'Sales Manager',
			phone: '+234-70-5555-5555',
			email: 'emeka.okafor@example.com',
			patronizing: false,
		},
		{
			fullName: 'Bukola Adekunle',
			jobTitle: 'Accountant',
			phone: '+234-80-9876-5432',
			email: 'bukola.adekunle@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yusuf Ibrahim',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-1234-5678',
			email: 'yusuf.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Aisha Bello',
			jobTitle: 'HR Manager',
			phone: '+234-70-5678-1234',
			email: 'aisha.bello@example.com',
			patronizing: true,
		},
		{
			fullName: 'Tunde Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-80-5555-7777',
			email: 'tunde.adeleke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Lola Ogunlade',
			jobTitle: 'Public Relations Officer',
			phone: '+234-81-8765-4321',
			email: 'lola.ogunlade@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oluwaseun Oladipo',
			jobTitle: 'Project Manager',
			phone: '+234-70-2222-8888',
			email: 'oluwaseun.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Abimbola Adesina',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3456-7890',
			email: 'abimbola.adesina@example.com',
			patronizing: true,
		},
		{
			fullName: 'Segun Adegoke',
			jobTitle: 'IT Support Specialist',
			phone: '+234-81-6543-2109',
			email: 'segun.adegoke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folake Oni',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-9999-3333',
			email: 'folake.oni@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bamidele Okeke',
			jobTitle: 'Finance Manager',
			phone: '+234-80-8888-2222',
			email: 'bamidele.okeke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chioma Uzoma',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-3333-7777',
			email: 'chioma.uzoma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oladapo Adeniyi',
			jobTitle: 'Software Engineer',
			phone: '+234-70-7777-1111',
			email: 'oladapo.adeniyi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ngozi Ibe',
			jobTitle: 'Sales Representative',
			phone: '+234-80-1111-7777',
			email: 'ngozi.ibe@example.com',
			patronizing: true,
		},
		{
			fullName: 'Efe Okonkwo',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-7777-1111',
			email: 'efe.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chuka Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-2222-8888',
			email: 'chuka.eke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adeola Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-5555-7777',
			email: 'adeola.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ibrahim Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-8888-2222',
			email: 'ibrahim.abubakar@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amina Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-3456-7890',
			email: 'amina.mohammed@example.com',
			patronizing: false,
		},
		{
			fullName: 'Tolu Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-6543-2109',
			email: 'tolu.ojo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adetokunbo Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-9999-3333',
			email: 'adetokunbo.dosunmu@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chiamaka Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-8888-2222',
			email: 'chiamaka.obi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yakubu Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-3333-7777',
			email: 'yakubu.danjuma@example.com',
			patronizing: false,
		},
		{
			fullName: 'Halima Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-7777-1111',
			email: 'halima.musa@example.com',
			patronizing: true,
		},
		{
			fullName: 'Suleiman Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-1111-7777',
			email: 'suleiman.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yetunde Adebayo',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-7777-1111',
			email: 'yetunde.adebayo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Idris Bello',
			jobTitle: 'Sales Manager',
			phone: '+234-81-2222-8888',
			email: 'idris.bello@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folashade Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-70-5555-7777',
			email: 'folashade.adeleke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olumide Ajayi',
			jobTitle: 'Software Developer',
			phone: '+234-80-8888-2222',
			email: 'olumide.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Amara Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-3456-7890',
			email: 'amara.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Ikechukwu Nnamdi',
			jobTitle: 'Sales Representative',
			phone: '+234-70-6543-2109',
			email: 'ikechukwu.nnamdi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Nkechi Azubuike',
			jobTitle: 'Graphic Designer',
			phone: '+234-80-9999-3333',
			email: 'nkechi.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidi Ekwueme',
			jobTitle: 'Accountant',
			phone: '+234-81-8888-2222',
			email: 'chidi.ekwueme@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adebayo Oladimeji',
			jobTitle: 'Marketing Manager',
			phone: '+234-70-3333-7777',
			email: 'adebayo.oladimeji@example.com',
			patronizing: true,
		},
		{
			fullName: 'Funmilayo Osagie',
			jobTitle: 'Public Relations Officer',
			phone: '+234-80-7777-1111',
			email: 'funmilayo.osagie@example.com',
			patronizing: false,
		},
		{
			fullName: 'Temitope Ayodele',
			jobTitle: 'Project Manager',
			phone: '+234-81-1111-7777',
			email: 'temitope.ayodele@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olabisi Fashina',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-2222-8888',
			email: 'olabisi.fashina@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chika Onuoha',
			jobTitle: 'Finance Manager',
			phone: '+234-80-5555-7777',
			email: 'chika.onuoha@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nnamdi Okonkwo',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-8888-2222',
			email: 'nnamdi.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ezinne Uzo',
			jobTitle: 'Software Engineer',
			phone: '+234-70-3333-7777',
			email: 'ezinne.uzo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adegoke Oladipo',
			jobTitle: 'Sales Representative',
			phone: '+234-80-9999-3333',
			email: 'adegoke.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Obiageli Eze',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-3333-7777',
			email: 'obiageli.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chinwe Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-8888-2222',
			email: 'chinwe.eke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ayodele Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-3333-7777',
			email: 'ayodele.adeyemi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nafisat Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-7777-1111',
			email: 'nafisat.abubakar@example.com',
			patronizing: false,
		},
		{
			fullName: 'Isa Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-1111-7777',
			email: 'isa.mohammed@example.com',
			patronizing: true,
		},
		{
			fullName: 'Sadiq Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-7777-1111',
			email: 'sadiq.ojo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Femi Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-2222-8888',
			email: 'femi.dosunmu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidinma Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-5555-7777',
			email: 'chidinma.obi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Usman Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-8888-2222',
			email: 'usman.danjuma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Rahma Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-3333-7777',
			email: 'rahma.musa@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ahmed Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-9999-3333',
			email: 'ahmed.ibrahim@example.com',
			patronizing: true,
		},
		{
			fullName: 'Fatimah Adeyemi',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3333-7777',
			email: 'fatimah.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yusuf Azubuike',
			jobTitle: 'Sales Manager',
			phone: '+234-81-7777-1111',
			email: 'yusuf.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bolaji Ajayi',
			jobTitle: 'Business Analyst',
			phone: '+234-70-1111-7777',
			email: 'bolaji.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Oluwafunmilayo Okonkwo',
			jobTitle: 'Software Developer',
			phone: '+234-80-7777-1111',
			email: 'oluwafunmilayo.okonkwo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amaka Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-2222-8888',
			email: 'amaka.eze@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chinedu Okoro',
			jobTitle: 'Software Developer',
			phone: '+234-80-1234-5678',
			email: 'chinedu.okoro@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adaobi Nwosu',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-9876-5432',
			email: 'adaobi.nwosu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Emeka Okafor',
			jobTitle: 'Sales Manager',
			phone: '+234-70-5555-5555',
			email: 'emeka.okafor@example.com',
			patronizing: false,
		},
		{
			fullName: 'Bukola Adekunle',
			jobTitle: 'Accountant',
			phone: '+234-80-9876-5432',
			email: 'bukola.adekunle@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yusuf Ibrahim',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-1234-5678',
			email: 'yusuf.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Aisha Bello',
			jobTitle: 'HR Manager',
			phone: '+234-70-5678-1234',
			email: 'aisha.bello@example.com',
			patronizing: true,
		},
		{
			fullName: 'Tunde Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-80-5555-7777',
			email: 'tunde.adeleke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Lola Ogunlade',
			jobTitle: 'Public Relations Officer',
			phone: '+234-81-8765-4321',
			email: 'lola.ogunlade@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oluwaseun Oladipo',
			jobTitle: 'Project Manager',
			phone: '+234-70-2222-8888',
			email: 'oluwaseun.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Abimbola Adesina',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3456-7890',
			email: 'abimbola.adesina@example.com',
			patronizing: true,
		},
		{
			fullName: 'Segun Adegoke',
			jobTitle: 'IT Support Specialist',
			phone: '+234-81-6543-2109',
			email: 'segun.adegoke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folake Oni',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-9999-3333',
			email: 'folake.oni@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bamidele Okeke',
			jobTitle: 'Finance Manager',
			phone: '+234-80-8888-2222',
			email: 'bamidele.okeke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chioma Uzoma',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-3333-7777',
			email: 'chioma.uzoma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oladapo Adeniyi',
			jobTitle: 'Software Engineer',
			phone: '+234-70-7777-1111',
			email: 'oladapo.adeniyi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ngozi Ibe',
			jobTitle: 'Sales Representative',
			phone: '+234-80-1111-7777',
			email: 'ngozi.ibe@example.com',
			patronizing: true,
		},
		{
			fullName: 'Efe Okonkwo',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-7777-1111',
			email: 'efe.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chuka Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-2222-8888',
			email: 'chuka.eke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adeola Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-5555-7777',
			email: 'adeola.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ibrahim Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-8888-2222',
			email: 'ibrahim.abubakar@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amina Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-3456-7890',
			email: 'amina.mohammed@example.com',
			patronizing: false,
		},
		{
			fullName: 'Tolu Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-6543-2109',
			email: 'tolu.ojo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adetokunbo Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-9999-3333',
			email: 'adetokunbo.dosunmu@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chiamaka Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-8888-2222',
			email: 'chiamaka.obi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yakubu Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-3333-7777',
			email: 'yakubu.danjuma@example.com',
			patronizing: false,
		},
		{
			fullName: 'Halima Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-7777-1111',
			email: 'halima.musa@example.com',
			patronizing: true,
		},
		{
			fullName: 'Suleiman Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-1111-7777',
			email: 'suleiman.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yetunde Adebayo',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-7777-1111',
			email: 'yetunde.adebayo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Idris Bello',
			jobTitle: 'Sales Manager',
			phone: '+234-81-2222-8888',
			email: 'idris.bello@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folashade Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-70-5555-7777',
			email: 'folashade.adeleke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olumide Ajayi',
			jobTitle: 'Software Developer',
			phone: '+234-80-8888-2222',
			email: 'olumide.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Amara Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-3456-7890',
			email: 'amara.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Ikechukwu Nnamdi',
			jobTitle: 'Sales Representative',
			phone: '+234-70-6543-2109',
			email: 'ikechukwu.nnamdi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Nkechi Azubuike',
			jobTitle: 'Graphic Designer',
			phone: '+234-80-9999-3333',
			email: 'nkechi.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidi Ekwueme',
			jobTitle: 'Accountant',
			phone: '+234-81-8888-2222',
			email: 'chidi.ekwueme@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adebayo Oladimeji',
			jobTitle: 'Marketing Manager',
			phone: '+234-70-3333-7777',
			email: 'adebayo.oladimeji@example.com',
			patronizing: true,
		},
		{
			fullName: 'Funmilayo Osagie',
			jobTitle: 'Public Relations Officer',
			phone: '+234-80-7777-1111',
			email: 'funmilayo.osagie@example.com',
			patronizing: false,
		},
		{
			fullName: 'Temitope Ayodele',
			jobTitle: 'Project Manager',
			phone: '+234-81-1111-7777',
			email: 'temitope.ayodele@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olabisi Fashina',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-2222-8888',
			email: 'olabisi.fashina@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chika Onuoha',
			jobTitle: 'Finance Manager',
			phone: '+234-80-5555-7777',
			email: 'chika.onuoha@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nnamdi Okonkwo',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-8888-2222',
			email: 'nnamdi.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ezinne Uzo',
			jobTitle: 'Software Engineer',
			phone: '+234-70-3333-7777',
			email: 'ezinne.uzo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adegoke Oladipo',
			jobTitle: 'Sales Representative',
			phone: '+234-80-9999-3333',
			email: 'adegoke.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Obiageli Eze',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-3333-7777',
			email: 'obiageli.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chinwe Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-8888-2222',
			email: 'chinwe.eke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ayodele Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-3333-7777',
			email: 'ayodele.adeyemi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nafisat Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-7777-1111',
			email: 'nafisat.abubakar@example.com',
			patronizing: false,
		},
		{
			fullName: 'Isa Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-1111-7777',
			email: 'isa.mohammed@example.com',
			patronizing: true,
		},
		{
			fullName: 'Sadiq Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-7777-1111',
			email: 'sadiq.ojo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Femi Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-2222-8888',
			email: 'femi.dosunmu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidinma Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-5555-7777',
			email: 'chidinma.obi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Usman Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-8888-2222',
			email: 'usman.danjuma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Rahma Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-3333-7777',
			email: 'rahma.musa@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ahmed Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-9999-3333',
			email: 'ahmed.ibrahim@example.com',
			patronizing: true,
		},
		{
			fullName: 'Fatimah Adeyemi',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3333-7777',
			email: 'fatimah.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yusuf Azubuike',
			jobTitle: 'Sales Manager',
			phone: '+234-81-7777-1111',
			email: 'yusuf.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bolaji Ajayi',
			jobTitle: 'Business Analyst',
			phone: '+234-70-1111-7777',
			email: 'bolaji.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Oluwafunmilayo Okonkwo',
			jobTitle: 'Software Developer',
			phone: '+234-80-7777-1111',
			email: 'oluwafunmilayo.okonkwo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amaka Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-2222-8888',
			email: 'amaka.eze@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chinedu Okoro',
			jobTitle: 'Software Developer',
			phone: '+234-80-1234-5678',
			email: 'chinedu.okoro@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adaobi Nwosu',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-9876-5432',
			email: 'adaobi.nwosu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Emeka Okafor',
			jobTitle: 'Sales Manager',
			phone: '+234-70-5555-5555',
			email: 'emeka.okafor@example.com',
			patronizing: false,
		},
		{
			fullName: 'Bukola Adekunle',
			jobTitle: 'Accountant',
			phone: '+234-80-9876-5432',
			email: 'bukola.adekunle@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yusuf Ibrahim',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-1234-5678',
			email: 'yusuf.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Aisha Bello',
			jobTitle: 'HR Manager',
			phone: '+234-70-5678-1234',
			email: 'aisha.bello@example.com',
			patronizing: true,
		},
		{
			fullName: 'Tunde Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-80-5555-7777',
			email: 'tunde.adeleke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Lola Ogunlade',
			jobTitle: 'Public Relations Officer',
			phone: '+234-81-8765-4321',
			email: 'lola.ogunlade@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oluwaseun Oladipo',
			jobTitle: 'Project Manager',
			phone: '+234-70-2222-8888',
			email: 'oluwaseun.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Abimbola Adesina',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3456-7890',
			email: 'abimbola.adesina@example.com',
			patronizing: true,
		},
		{
			fullName: 'Segun Adegoke',
			jobTitle: 'IT Support Specialist',
			phone: '+234-81-6543-2109',
			email: 'segun.adegoke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folake Oni',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-9999-3333',
			email: 'folake.oni@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bamidele Okeke',
			jobTitle: 'Finance Manager',
			phone: '+234-80-8888-2222',
			email: 'bamidele.okeke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chioma Uzoma',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-3333-7777',
			email: 'chioma.uzoma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oladapo Adeniyi',
			jobTitle: 'Software Engineer',
			phone: '+234-70-7777-1111',
			email: 'oladapo.adeniyi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ngozi Ibe',
			jobTitle: 'Sales Representative',
			phone: '+234-80-1111-7777',
			email: 'ngozi.ibe@example.com',
			patronizing: true,
		},
		{
			fullName: 'Efe Okonkwo',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-7777-1111',
			email: 'efe.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chuka Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-2222-8888',
			email: 'chuka.eke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adeola Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-5555-7777',
			email: 'adeola.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ibrahim Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-8888-2222',
			email: 'ibrahim.abubakar@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amina Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-3456-7890',
			email: 'amina.mohammed@example.com',
			patronizing: false,
		},
		{
			fullName: 'Tolu Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-6543-2109',
			email: 'tolu.ojo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adetokunbo Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-9999-3333',
			email: 'adetokunbo.dosunmu@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chiamaka Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-8888-2222',
			email: 'chiamaka.obi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yakubu Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-3333-7777',
			email: 'yakubu.danjuma@example.com',
			patronizing: false,
		},
		{
			fullName: 'Halima Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-7777-1111',
			email: 'halima.musa@example.com',
			patronizing: true,
		},
		{
			fullName: 'Suleiman Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-1111-7777',
			email: 'suleiman.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yetunde Adebayo',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-7777-1111',
			email: 'yetunde.adebayo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Idris Bello',
			jobTitle: 'Sales Manager',
			phone: '+234-81-2222-8888',
			email: 'idris.bello@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folashade Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-70-5555-7777',
			email: 'folashade.adeleke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olumide Ajayi',
			jobTitle: 'Software Developer',
			phone: '+234-80-8888-2222',
			email: 'olumide.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Amara Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-3456-7890',
			email: 'amara.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Ikechukwu Nnamdi',
			jobTitle: 'Sales Representative',
			phone: '+234-70-6543-2109',
			email: 'ikechukwu.nnamdi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Nkechi Azubuike',
			jobTitle: 'Graphic Designer',
			phone: '+234-80-9999-3333',
			email: 'nkechi.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidi Ekwueme',
			jobTitle: 'Accountant',
			phone: '+234-81-8888-2222',
			email: 'chidi.ekwueme@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adebayo Oladimeji',
			jobTitle: 'Marketing Manager',
			phone: '+234-70-3333-7777',
			email: 'adebayo.oladimeji@example.com',
			patronizing: true,
		},
		{
			fullName: 'Funmilayo Osagie',
			jobTitle: 'Public Relations Officer',
			phone: '+234-80-7777-1111',
			email: 'funmilayo.osagie@example.com',
			patronizing: false,
		},
		{
			fullName: 'Temitope Ayodele',
			jobTitle: 'Project Manager',
			phone: '+234-81-1111-7777',
			email: 'temitope.ayodele@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olabisi Fashina',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-2222-8888',
			email: 'olabisi.fashina@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chika Onuoha',
			jobTitle: 'Finance Manager',
			phone: '+234-80-5555-7777',
			email: 'chika.onuoha@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nnamdi Okonkwo',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-8888-2222',
			email: 'nnamdi.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ezinne Uzo',
			jobTitle: 'Software Engineer',
			phone: '+234-70-3333-7777',
			email: 'ezinne.uzo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adegoke Oladipo',
			jobTitle: 'Sales Representative',
			phone: '+234-80-9999-3333',
			email: 'adegoke.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Obiageli Eze',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-3333-7777',
			email: 'obiageli.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chinwe Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-8888-2222',
			email: 'chinwe.eke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ayodele Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-3333-7777',
			email: 'ayodele.adeyemi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nafisat Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-7777-1111',
			email: 'nafisat.abubakar@example.com',
			patronizing: false,
		},
		{
			fullName: 'Isa Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-1111-7777',
			email: 'isa.mohammed@example.com',
			patronizing: true,
		},
		{
			fullName: 'Sadiq Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-7777-1111',
			email: 'sadiq.ojo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Femi Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-2222-8888',
			email: 'femi.dosunmu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidinma Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-5555-7777',
			email: 'chidinma.obi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Usman Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-8888-2222',
			email: 'usman.danjuma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Rahma Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-3333-7777',
			email: 'rahma.musa@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ahmed Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-9999-3333',
			email: 'ahmed.ibrahim@example.com',
			patronizing: true,
		},
		{
			fullName: 'Fatimah Adeyemi',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3333-7777',
			email: 'fatimah.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yusuf Azubuike',
			jobTitle: 'Sales Manager',
			phone: '+234-81-7777-1111',
			email: 'yusuf.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bolaji Ajayi',
			jobTitle: 'Business Analyst',
			phone: '+234-70-1111-7777',
			email: 'bolaji.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Oluwafunmilayo Okonkwo',
			jobTitle: 'Software Developer',
			phone: '+234-80-7777-1111',
			email: 'oluwafunmilayo.okonkwo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amaka Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-2222-8888',
			email: 'amaka.eze@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chinedu Okoro',
			jobTitle: 'Software Developer',
			phone: '+234-80-1234-5678',
			email: 'chinedu.okoro@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adaobi Nwosu',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-9876-5432',
			email: 'adaobi.nwosu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Emeka Okafor',
			jobTitle: 'Sales Manager',
			phone: '+234-70-5555-5555',
			email: 'emeka.okafor@example.com',
			patronizing: false,
		},
		{
			fullName: 'Bukola Adekunle',
			jobTitle: 'Accountant',
			phone: '+234-80-9876-5432',
			email: 'bukola.adekunle@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yusuf Ibrahim',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-1234-5678',
			email: 'yusuf.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Aisha Bello',
			jobTitle: 'HR Manager',
			phone: '+234-70-5678-1234',
			email: 'aisha.bello@example.com',
			patronizing: true,
		},
		{
			fullName: 'Tunde Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-80-5555-7777',
			email: 'tunde.adeleke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Lola Ogunlade',
			jobTitle: 'Public Relations Officer',
			phone: '+234-81-8765-4321',
			email: 'lola.ogunlade@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oluwaseun Oladipo',
			jobTitle: 'Project Manager',
			phone: '+234-70-2222-8888',
			email: 'oluwaseun.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Abimbola Adesina',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3456-7890',
			email: 'abimbola.adesina@example.com',
			patronizing: true,
		},
		{
			fullName: 'Segun Adegoke',
			jobTitle: 'IT Support Specialist',
			phone: '+234-81-6543-2109',
			email: 'segun.adegoke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folake Oni',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-9999-3333',
			email: 'folake.oni@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bamidele Okeke',
			jobTitle: 'Finance Manager',
			phone: '+234-80-8888-2222',
			email: 'bamidele.okeke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chioma Uzoma',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-3333-7777',
			email: 'chioma.uzoma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oladapo Adeniyi',
			jobTitle: 'Software Engineer',
			phone: '+234-70-7777-1111',
			email: 'oladapo.adeniyi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ngozi Ibe',
			jobTitle: 'Sales Representative',
			phone: '+234-80-1111-7777',
			email: 'ngozi.ibe@example.com',
			patronizing: true,
		},
		{
			fullName: 'Efe Okonkwo',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-7777-1111',
			email: 'efe.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chuka Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-2222-8888',
			email: 'chuka.eke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adeola Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-5555-7777',
			email: 'adeola.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ibrahim Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-8888-2222',
			email: 'ibrahim.abubakar@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amina Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-3456-7890',
			email: 'amina.mohammed@example.com',
			patronizing: false,
		},
		{
			fullName: 'Tolu Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-6543-2109',
			email: 'tolu.ojo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adetokunbo Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-9999-3333',
			email: 'adetokunbo.dosunmu@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chiamaka Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-8888-2222',
			email: 'chiamaka.obi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yakubu Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-3333-7777',
			email: 'yakubu.danjuma@example.com',
			patronizing: false,
		},
		{
			fullName: 'Halima Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-7777-1111',
			email: 'halima.musa@example.com',
			patronizing: true,
		},
		{
			fullName: 'Suleiman Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-1111-7777',
			email: 'suleiman.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yetunde Adebayo',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-7777-1111',
			email: 'yetunde.adebayo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Idris Bello',
			jobTitle: 'Sales Manager',
			phone: '+234-81-2222-8888',
			email: 'idris.bello@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folashade Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-70-5555-7777',
			email: 'folashade.adeleke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olumide Ajayi',
			jobTitle: 'Software Developer',
			phone: '+234-80-8888-2222',
			email: 'olumide.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Amara Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-3456-7890',
			email: 'amara.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Ikechukwu Nnamdi',
			jobTitle: 'Sales Representative',
			phone: '+234-70-6543-2109',
			email: 'ikechukwu.nnamdi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Nkechi Azubuike',
			jobTitle: 'Graphic Designer',
			phone: '+234-80-9999-3333',
			email: 'nkechi.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidi Ekwueme',
			jobTitle: 'Accountant',
			phone: '+234-81-8888-2222',
			email: 'chidi.ekwueme@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adebayo Oladimeji',
			jobTitle: 'Marketing Manager',
			phone: '+234-70-3333-7777',
			email: 'adebayo.oladimeji@example.com',
			patronizing: true,
		},
		{
			fullName: 'Funmilayo Osagie',
			jobTitle: 'Public Relations Officer',
			phone: '+234-80-7777-1111',
			email: 'funmilayo.osagie@example.com',
			patronizing: false,
		},
		{
			fullName: 'Temitope Ayodele',
			jobTitle: 'Project Manager',
			phone: '+234-81-1111-7777',
			email: 'temitope.ayodele@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olabisi Fashina',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-2222-8888',
			email: 'olabisi.fashina@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chika Onuoha',
			jobTitle: 'Finance Manager',
			phone: '+234-80-5555-7777',
			email: 'chika.onuoha@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nnamdi Okonkwo',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-8888-2222',
			email: 'nnamdi.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ezinne Uzo',
			jobTitle: 'Software Engineer',
			phone: '+234-70-3333-7777',
			email: 'ezinne.uzo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adegoke Oladipo',
			jobTitle: 'Sales Representative',
			phone: '+234-80-9999-3333',
			email: 'adegoke.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Obiageli Eze',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-3333-7777',
			email: 'obiageli.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chinwe Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-8888-2222',
			email: 'chinwe.eke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ayodele Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-3333-7777',
			email: 'ayodele.adeyemi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nafisat Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-7777-1111',
			email: 'nafisat.abubakar@example.com',
			patronizing: false,
		},
		{
			fullName: 'Isa Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-1111-7777',
			email: 'isa.mohammed@example.com',
			patronizing: true,
		},
		{
			fullName: 'Sadiq Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-7777-1111',
			email: 'sadiq.ojo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Femi Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-2222-8888',
			email: 'femi.dosunmu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidinma Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-5555-7777',
			email: 'chidinma.obi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Usman Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-8888-2222',
			email: 'usman.danjuma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Rahma Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-3333-7777',
			email: 'rahma.musa@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ahmed Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-9999-3333',
			email: 'ahmed.ibrahim@example.com',
			patronizing: true,
		},
		{
			fullName: 'Fatimah Adeyemi',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3333-7777',
			email: 'fatimah.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yusuf Azubuike',
			jobTitle: 'Sales Manager',
			phone: '+234-81-7777-1111',
			email: 'yusuf.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bolaji Ajayi',
			jobTitle: 'Business Analyst',
			phone: '+234-70-1111-7777',
			email: 'bolaji.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Oluwafunmilayo Okonkwo',
			jobTitle: 'Software Developer',
			phone: '+234-80-7777-1111',
			email: 'oluwafunmilayo.okonkwo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amaka Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-2222-8888',
			email: 'amaka.eze@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chinedu Okoro',
			jobTitle: 'Software Developer',
			phone: '+234-80-1234-5678',
			email: 'chinedu.okoro@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adaobi Nwosu',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-9876-5432',
			email: 'adaobi.nwosu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Emeka Okafor',
			jobTitle: 'Sales Manager',
			phone: '+234-70-5555-5555',
			email: 'emeka.okafor@example.com',
			patronizing: false,
		},
		{
			fullName: 'Bukola Adekunle',
			jobTitle: 'Accountant',
			phone: '+234-80-9876-5432',
			email: 'bukola.adekunle@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yusuf Ibrahim',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-1234-5678',
			email: 'yusuf.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Aisha Bello',
			jobTitle: 'HR Manager',
			phone: '+234-70-5678-1234',
			email: 'aisha.bello@example.com',
			patronizing: true,
		},
		{
			fullName: 'Tunde Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-80-5555-7777',
			email: 'tunde.adeleke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Lola Ogunlade',
			jobTitle: 'Public Relations Officer',
			phone: '+234-81-8765-4321',
			email: 'lola.ogunlade@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oluwaseun Oladipo',
			jobTitle: 'Project Manager',
			phone: '+234-70-2222-8888',
			email: 'oluwaseun.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Abimbola Adesina',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3456-7890',
			email: 'abimbola.adesina@example.com',
			patronizing: true,
		},
		{
			fullName: 'Segun Adegoke',
			jobTitle: 'IT Support Specialist',
			phone: '+234-81-6543-2109',
			email: 'segun.adegoke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folake Oni',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-9999-3333',
			email: 'folake.oni@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bamidele Okeke',
			jobTitle: 'Finance Manager',
			phone: '+234-80-8888-2222',
			email: 'bamidele.okeke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chioma Uzoma',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-3333-7777',
			email: 'chioma.uzoma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oladapo Adeniyi',
			jobTitle: 'Software Engineer',
			phone: '+234-70-7777-1111',
			email: 'oladapo.adeniyi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ngozi Ibe',
			jobTitle: 'Sales Representative',
			phone: '+234-80-1111-7777',
			email: 'ngozi.ibe@example.com',
			patronizing: true,
		},
		{
			fullName: 'Efe Okonkwo',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-7777-1111',
			email: 'efe.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chuka Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-2222-8888',
			email: 'chuka.eke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adeola Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-5555-7777',
			email: 'adeola.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ibrahim Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-8888-2222',
			email: 'ibrahim.abubakar@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amina Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-3456-7890',
			email: 'amina.mohammed@example.com',
			patronizing: false,
		},
		{
			fullName: 'Tolu Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-6543-2109',
			email: 'tolu.ojo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adetokunbo Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-9999-3333',
			email: 'adetokunbo.dosunmu@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chiamaka Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-8888-2222',
			email: 'chiamaka.obi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yakubu Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-3333-7777',
			email: 'yakubu.danjuma@example.com',
			patronizing: false,
		},
		{
			fullName: 'Halima Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-7777-1111',
			email: 'halima.musa@example.com',
			patronizing: true,
		},
		{
			fullName: 'Suleiman Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-1111-7777',
			email: 'suleiman.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yetunde Adebayo',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-7777-1111',
			email: 'yetunde.adebayo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Idris Bello',
			jobTitle: 'Sales Manager',
			phone: '+234-81-2222-8888',
			email: 'idris.bello@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folashade Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-70-5555-7777',
			email: 'folashade.adeleke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olumide Ajayi',
			jobTitle: 'Software Developer',
			phone: '+234-80-8888-2222',
			email: 'olumide.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Amara Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-3456-7890',
			email: 'amara.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Ikechukwu Nnamdi',
			jobTitle: 'Sales Representative',
			phone: '+234-70-6543-2109',
			email: 'ikechukwu.nnamdi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Nkechi Azubuike',
			jobTitle: 'Graphic Designer',
			phone: '+234-80-9999-3333',
			email: 'nkechi.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidi Ekwueme',
			jobTitle: 'Accountant',
			phone: '+234-81-8888-2222',
			email: 'chidi.ekwueme@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adebayo Oladimeji',
			jobTitle: 'Marketing Manager',
			phone: '+234-70-3333-7777',
			email: 'adebayo.oladimeji@example.com',
			patronizing: true,
		},
		{
			fullName: 'Funmilayo Osagie',
			jobTitle: 'Public Relations Officer',
			phone: '+234-80-7777-1111',
			email: 'funmilayo.osagie@example.com',
			patronizing: false,
		},
		{
			fullName: 'Temitope Ayodele',
			jobTitle: 'Project Manager',
			phone: '+234-81-1111-7777',
			email: 'temitope.ayodele@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olabisi Fashina',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-2222-8888',
			email: 'olabisi.fashina@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chika Onuoha',
			jobTitle: 'Finance Manager',
			phone: '+234-80-5555-7777',
			email: 'chika.onuoha@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nnamdi Okonkwo',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-8888-2222',
			email: 'nnamdi.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ezinne Uzo',
			jobTitle: 'Software Engineer',
			phone: '+234-70-3333-7777',
			email: 'ezinne.uzo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adegoke Oladipo',
			jobTitle: 'Sales Representative',
			phone: '+234-80-9999-3333',
			email: 'adegoke.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Obiageli Eze',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-3333-7777',
			email: 'obiageli.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chinwe Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-8888-2222',
			email: 'chinwe.eke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ayodele Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-3333-7777',
			email: 'ayodele.adeyemi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nafisat Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-7777-1111',
			email: 'nafisat.abubakar@example.com',
			patronizing: false,
		},
		{
			fullName: 'Isa Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-1111-7777',
			email: 'isa.mohammed@example.com',
			patronizing: true,
		},
		{
			fullName: 'Sadiq Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-7777-1111',
			email: 'sadiq.ojo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Femi Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-2222-8888',
			email: 'femi.dosunmu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidinma Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-5555-7777',
			email: 'chidinma.obi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Usman Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-8888-2222',
			email: 'usman.danjuma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Rahma Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-3333-7777',
			email: 'rahma.musa@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ahmed Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-9999-3333',
			email: 'ahmed.ibrahim@example.com',
			patronizing: true,
		},
		{
			fullName: 'Fatimah Adeyemi',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3333-7777',
			email: 'fatimah.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yusuf Azubuike',
			jobTitle: 'Sales Manager',
			phone: '+234-81-7777-1111',
			email: 'yusuf.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bolaji Ajayi',
			jobTitle: 'Business Analyst',
			phone: '+234-70-1111-7777',
			email: 'bolaji.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Oluwafunmilayo Okonkwo',
			jobTitle: 'Software Developer',
			phone: '+234-80-7777-1111',
			email: 'oluwafunmilayo.okonkwo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amaka Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-2222-8888',
			email: 'amaka.eze@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chinedu Okoro',
			jobTitle: 'Software Developer',
			phone: '+234-80-1234-5678',
			email: 'chinedu.okoro@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adaobi Nwosu',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-9876-5432',
			email: 'adaobi.nwosu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Emeka Okafor',
			jobTitle: 'Sales Manager',
			phone: '+234-70-5555-5555',
			email: 'emeka.okafor@example.com',
			patronizing: false,
		},
		{
			fullName: 'Bukola Adekunle',
			jobTitle: 'Accountant',
			phone: '+234-80-9876-5432',
			email: 'bukola.adekunle@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yusuf Ibrahim',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-1234-5678',
			email: 'yusuf.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Aisha Bello',
			jobTitle: 'HR Manager',
			phone: '+234-70-5678-1234',
			email: 'aisha.bello@example.com',
			patronizing: true,
		},
		{
			fullName: 'Tunde Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-80-5555-7777',
			email: 'tunde.adeleke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Lola Ogunlade',
			jobTitle: 'Public Relations Officer',
			phone: '+234-81-8765-4321',
			email: 'lola.ogunlade@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oluwaseun Oladipo',
			jobTitle: 'Project Manager',
			phone: '+234-70-2222-8888',
			email: 'oluwaseun.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Abimbola Adesina',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3456-7890',
			email: 'abimbola.adesina@example.com',
			patronizing: true,
		},
		{
			fullName: 'Segun Adegoke',
			jobTitle: 'IT Support Specialist',
			phone: '+234-81-6543-2109',
			email: 'segun.adegoke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folake Oni',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-9999-3333',
			email: 'folake.oni@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bamidele Okeke',
			jobTitle: 'Finance Manager',
			phone: '+234-80-8888-2222',
			email: 'bamidele.okeke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chioma Uzoma',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-3333-7777',
			email: 'chioma.uzoma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Oladapo Adeniyi',
			jobTitle: 'Software Engineer',
			phone: '+234-70-7777-1111',
			email: 'oladapo.adeniyi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ngozi Ibe',
			jobTitle: 'Sales Representative',
			phone: '+234-80-1111-7777',
			email: 'ngozi.ibe@example.com',
			patronizing: true,
		},
		{
			fullName: 'Efe Okonkwo',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-7777-1111',
			email: 'efe.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chuka Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-2222-8888',
			email: 'chuka.eke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adeola Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-5555-7777',
			email: 'adeola.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ibrahim Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-8888-2222',
			email: 'ibrahim.abubakar@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amina Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-3456-7890',
			email: 'amina.mohammed@example.com',
			patronizing: false,
		},
		{
			fullName: 'Tolu Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-6543-2109',
			email: 'tolu.ojo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adetokunbo Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-9999-3333',
			email: 'adetokunbo.dosunmu@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chiamaka Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-8888-2222',
			email: 'chiamaka.obi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Yakubu Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-3333-7777',
			email: 'yakubu.danjuma@example.com',
			patronizing: false,
		},
		{
			fullName: 'Halima Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-7777-1111',
			email: 'halima.musa@example.com',
			patronizing: true,
		},
		{
			fullName: 'Suleiman Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-1111-7777',
			email: 'suleiman.ibrahim@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yetunde Adebayo',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-7777-1111',
			email: 'yetunde.adebayo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Idris Bello',
			jobTitle: 'Sales Manager',
			phone: '+234-81-2222-8888',
			email: 'idris.bello@example.com',
			patronizing: false,
		},
		{
			fullName: 'Folashade Adeleke',
			jobTitle: 'Business Analyst',
			phone: '+234-70-5555-7777',
			email: 'folashade.adeleke@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olumide Ajayi',
			jobTitle: 'Software Developer',
			phone: '+234-80-8888-2222',
			email: 'olumide.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Amara Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-3456-7890',
			email: 'amara.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Ikechukwu Nnamdi',
			jobTitle: 'Sales Representative',
			phone: '+234-70-6543-2109',
			email: 'ikechukwu.nnamdi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Nkechi Azubuike',
			jobTitle: 'Graphic Designer',
			phone: '+234-80-9999-3333',
			email: 'nkechi.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidi Ekwueme',
			jobTitle: 'Accountant',
			phone: '+234-81-8888-2222',
			email: 'chidi.ekwueme@example.com',
			patronizing: false,
		},
		{
			fullName: 'Adebayo Oladimeji',
			jobTitle: 'Marketing Manager',
			phone: '+234-70-3333-7777',
			email: 'adebayo.oladimeji@example.com',
			patronizing: true,
		},
		{
			fullName: 'Funmilayo Osagie',
			jobTitle: 'Public Relations Officer',
			phone: '+234-80-7777-1111',
			email: 'funmilayo.osagie@example.com',
			patronizing: false,
		},
		{
			fullName: 'Temitope Ayodele',
			jobTitle: 'Project Manager',
			phone: '+234-81-1111-7777',
			email: 'temitope.ayodele@example.com',
			patronizing: true,
		},
		{
			fullName: 'Olabisi Fashina',
			jobTitle: 'Customer Service Representative',
			phone: '+234-70-2222-8888',
			email: 'olabisi.fashina@example.com',
			patronizing: false,
		},
		{
			fullName: 'Chika Onuoha',
			jobTitle: 'Finance Manager',
			phone: '+234-80-5555-7777',
			email: 'chika.onuoha@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nnamdi Okonkwo',
			jobTitle: 'Operations Supervisor',
			phone: '+234-81-8888-2222',
			email: 'nnamdi.okonkwo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ezinne Uzo',
			jobTitle: 'Software Engineer',
			phone: '+234-70-3333-7777',
			email: 'ezinne.uzo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Adegoke Oladipo',
			jobTitle: 'Sales Representative',
			phone: '+234-80-9999-3333',
			email: 'adegoke.oladipo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Obiageli Eze',
			jobTitle: 'Marketing Specialist',
			phone: '+234-81-3333-7777',
			email: 'obiageli.eze@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chinwe Eke',
			jobTitle: 'Business Development Manager',
			phone: '+234-70-8888-2222',
			email: 'chinwe.eke@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ayodele Adeyemi',
			jobTitle: 'Public Relations Manager',
			phone: '+234-80-3333-7777',
			email: 'ayodele.adeyemi@example.com',
			patronizing: true,
		},
		{
			fullName: 'Nafisat Abubakar',
			jobTitle: 'Graphic Designer',
			phone: '+234-81-7777-1111',
			email: 'nafisat.abubakar@example.com',
			patronizing: false,
		},
		{
			fullName: 'Isa Mohammed',
			jobTitle: 'Account Manager',
			phone: '+234-70-1111-7777',
			email: 'isa.mohammed@example.com',
			patronizing: true,
		},
		{
			fullName: 'Sadiq Ojo',
			jobTitle: 'Human Resources Coordinator',
			phone: '+234-80-7777-1111',
			email: 'sadiq.ojo@example.com',
			patronizing: false,
		},
		{
			fullName: 'Femi Dosunmu',
			jobTitle: 'Marketing Analyst',
			phone: '+234-81-2222-8888',
			email: 'femi.dosunmu@example.com',
			patronizing: true,
		},
		{
			fullName: 'Chidinma Obi',
			jobTitle: 'Customer Support Specialist',
			phone: '+234-70-5555-7777',
			email: 'chidinma.obi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Usman Danjuma',
			jobTitle: 'Finance Analyst',
			phone: '+234-80-8888-2222',
			email: 'usman.danjuma@example.com',
			patronizing: true,
		},
		{
			fullName: 'Rahma Musa',
			jobTitle: 'Operations Manager',
			phone: '+234-81-3333-7777',
			email: 'rahma.musa@example.com',
			patronizing: false,
		},
		{
			fullName: 'Ahmed Ibrahim',
			jobTitle: 'IT Consultant',
			phone: '+234-70-9999-3333',
			email: 'ahmed.ibrahim@example.com',
			patronizing: true,
		},
		{
			fullName: 'Fatimah Adeyemi',
			jobTitle: 'Marketing Coordinator',
			phone: '+234-80-3333-7777',
			email: 'fatimah.adeyemi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Yusuf Azubuike',
			jobTitle: 'Sales Manager',
			phone: '+234-81-7777-1111',
			email: 'yusuf.azubuike@example.com',
			patronizing: true,
		},
		{
			fullName: 'Bolaji Ajayi',
			jobTitle: 'Business Analyst',
			phone: '+234-70-1111-7777',
			email: 'bolaji.ajayi@example.com',
			patronizing: false,
		},
		{
			fullName: 'Oluwafunmilayo Okonkwo',
			jobTitle: 'Software Developer',
			phone: '+234-80-7777-1111',
			email: 'oluwafunmilayo.okonkwo@example.com',
			patronizing: true,
		},
		{
			fullName: 'Amaka Eze',
			jobTitle: 'Marketing Executive',
			phone: '+234-81-2222-8888',
			email: 'amaka.eze@example.com',
			patronizing: false,
		},
	],
	templates: [
		{
			id: 'template-one',
			image: '/img/template-1.png',
			name: 'Template-1',
			active: false,
			default: true,
			themeColor: '#f40dee',
		},
		{
			id: 'template-two',
			image: '/img/template-2.png',
			name: 'Template-2',
			active: false,
			default: false,
			themeColor: 'red',
		},
		{
			id: 'template-three',
			image: '/img/template-3.png',
			name: 'Template-3',
			active: true,
			default: false,
			themeColor: 'green',
		},
	],
};

export const PROFILE_TAB: TabProps[] = [
	{ text: 'About Us', href: '/admin/profile' },
	{ text: 'Our Services', href: '/admin/profile/services' },
	{ text: 'Contact Us', href: '/admin/profile/contact' },
];

export const CUSTOMER_TAB: TabProps[] = [
	{ text: 'Connect', href: '/profile' },
	{ text: 'About Us', href: '/profile/about' },
];

export const CUSTOMIZE_TAB: TabProps[] = [
	{
		text: 'Free Template',
		href: '/admin/settings/customize-profile',
	},
	{
		text: 'Custom Template',
		href: '/admin/settings/customize-profile/custom-templates',
	},
];

export const CUSTOM_TEMPLATE_LIST = [];

export const SOCIAL_ICONS: SocialIcons[] = [
	{
		name: 'facebook',
		icon: (
			<svg
				width='52'
				height='52'
				viewBox='0 0 52 52'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26ZM26 13C33.15 13 39 18.85 39 26C39 32.5 34.2875 38.025 27.7875 39V29.7375H30.875L31.525 26H27.95V23.5625C27.95 22.5875 28.4375 21.6125 30.0625 21.6125H31.6875V18.3625C31.6875 18.3625 30.225 18.0375 28.7625 18.0375C25.8375 18.0375 23.8875 19.825 23.8875 23.075V26H20.6375V29.7375H23.8875V38.8375C17.7125 37.8625 13 32.5 13 26C13 18.85 18.85 13 26 13Z'
					fill='currentColor'
				/>
			</svg>
		),
	},
	{
		name: 'phone',
		icon: (
			<svg
				width='52'
				height='52'
				viewBox='0 0 52 52'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<rect
					width='52'
					height='52'
					rx='26'
					fill='currentColor'
				/>
				<path
					d='M24.8943 29.4417L22.7359 31.6C22.2809 32.055 21.5576 32.055 21.0909 31.6117C20.9626 31.4834 20.8343 31.3667 20.7059 31.2384C19.5043 30.025 18.4193 28.7534 17.4509 27.4234C16.4943 26.0934 15.7243 24.7634 15.1643 23.445C14.6159 22.115 14.3359 20.8434 14.3359 19.63C14.3359 18.8367 14.4759 18.0784 14.7559 17.3784C15.0359 16.6667 15.4793 16.0134 16.0976 15.43C16.8443 14.695 17.6609 14.3334 18.5243 14.3334C18.8509 14.3334 19.1776 14.4034 19.4693 14.5434C19.7726 14.6834 20.0409 14.8934 20.2509 15.1967L22.9576 19.0117C23.1676 19.3034 23.3193 19.5717 23.4243 19.8284C23.5293 20.0734 23.5876 20.3184 23.5876 20.54C23.5876 20.82 23.5059 21.1 23.3426 21.3684C23.1909 21.6367 22.9693 21.9167 22.6893 22.1967L21.8026 23.1184C21.6743 23.2467 21.6159 23.3984 21.6159 23.585C21.6159 23.6784 21.6276 23.76 21.6509 23.8534C21.6859 23.9467 21.7209 24.0167 21.7443 24.0867C21.9543 24.4717 22.3159 24.9734 22.8293 25.58C23.3543 26.1867 23.9143 26.805 24.5209 27.4234C24.6376 27.54 24.7659 27.6567 24.8826 27.7734C25.3493 28.2284 25.3609 28.975 24.8943 29.4417Z'
					fill='#FFFFFE'
				/>
				<path
					d='M37.6348 33.385C37.6348 33.7117 37.5765 34.05 37.4598 34.3767C37.4248 34.47 37.3898 34.5633 37.3431 34.6567C37.1448 35.0767 36.8881 35.4733 36.5498 35.8467C35.9781 36.4767 35.3481 36.9317 34.6365 37.2233C34.6248 37.2233 34.6131 37.235 34.6015 37.235C33.9131 37.515 33.1665 37.6667 32.3615 37.6667C31.1715 37.6667 29.8998 37.3867 28.5581 36.815C27.2165 36.2433 25.8748 35.4733 24.5448 34.505C24.0898 34.1667 23.6348 33.8283 23.2031 33.4667L27.0181 29.6517C27.3448 29.8967 27.6365 30.0833 27.8815 30.2117C27.9398 30.235 28.0098 30.27 28.0915 30.305C28.1848 30.34 28.2781 30.3517 28.3831 30.3517C28.5815 30.3517 28.7331 30.2817 28.8615 30.1533L29.7481 29.2783C30.0398 28.9867 30.3198 28.765 30.5881 28.625C30.8565 28.4617 31.1248 28.38 31.4165 28.38C31.6381 28.38 31.8715 28.4267 32.1281 28.5317C32.3848 28.6367 32.6531 28.7883 32.9448 28.9867L36.8065 31.7283C37.1098 31.9383 37.3198 32.1833 37.4481 32.475C37.5648 32.7667 37.6348 33.0583 37.6348 33.385Z'
					fill='#FFFFFE'
				/>
			</svg>
		),
	},
	{
		name: 'email',
		icon: (
			<svg
				width='52'
				height='52'
				viewBox='0 0 52 52'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<rect
					width='52'
					height='52'
					rx='26'
					fill='currentColor'
				/>
				<path
					d='M31.8359 16.0834H20.1693C16.6693 16.0834 14.3359 17.8334 14.3359 21.9167V30.0834C14.3359 34.1667 16.6693 35.9167 20.1693 35.9167H31.8359C35.3359 35.9167 37.6693 34.1667 37.6693 30.0834V21.9167C37.6693 17.8334 35.3359 16.0834 31.8359 16.0834ZM32.3843 23.1884L28.7326 26.105C27.9626 26.7234 26.9826 27.0267 26.0026 27.0267C25.0226 27.0267 24.0309 26.7234 23.2726 26.105L19.6209 23.1884C19.2476 22.885 19.1893 22.325 19.4809 21.9517C19.7843 21.5784 20.3326 21.5084 20.7059 21.8117L24.3576 24.7284C25.2443 25.44 26.7493 25.44 27.6359 24.7284L31.2876 21.8117C31.6609 21.5084 32.2209 21.5667 32.5126 21.9517C32.8159 22.325 32.7576 22.885 32.3843 23.1884Z'
					fill='#FFFFFE'
				/>
			</svg>
		),
	},
	{
		name: 'instagram',
		icon: (
			<svg
				width='52'
				height='52'
				viewBox='0 0 52 52'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M26 30.55C23.5625 30.55 21.45 28.6 21.45 26C21.45 23.5625 23.4 21.45 26 21.45C28.4375 21.45 30.55 23.4 30.55 26C30.55 28.4375 28.4375 30.55 26 30.55Z'
					fill='currentColor'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M31.525 14.95H20.475C19.175 15.1125 18.525 15.275 18.0375 15.4375C17.3875 15.6 16.9 15.925 16.4125 16.4125C16.0267 16.7983 15.8445 17.184 15.6242 17.6503C15.5661 17.7731 15.5053 17.902 15.4375 18.0375C15.4124 18.1129 15.3833 18.1922 15.3522 18.2772C15.1822 18.7417 14.95 19.3761 14.95 20.475V31.525C15.1125 32.825 15.275 33.475 15.4375 33.9625C15.6 34.6125 15.925 35.1 16.4125 35.5875C16.7983 35.9733 17.184 36.1555 17.6503 36.3758C17.7733 36.4339 17.9018 36.4947 18.0375 36.5625C18.1129 36.5876 18.1922 36.6167 18.2772 36.6478C18.7417 36.8178 19.3761 37.05 20.475 37.05H31.525C32.825 36.8875 33.475 36.725 33.9625 36.5625C34.6125 36.4 35.1 36.075 35.5875 35.5875C35.9733 35.2017 36.1555 34.816 36.3758 34.3497C36.4339 34.2268 36.4947 34.0981 36.5625 33.9625C36.5876 33.8871 36.6167 33.8078 36.6478 33.7228C36.8178 33.2583 37.05 32.6239 37.05 31.525V20.475C36.8875 19.175 36.725 18.525 36.5625 18.0375C36.4 17.3875 36.075 16.9 35.5875 16.4125C35.2017 16.0267 34.816 15.8445 34.3497 15.6242C34.2269 15.5662 34.0979 15.5052 33.9625 15.4375C33.8871 15.4124 33.8078 15.3833 33.7228 15.3522C33.2583 15.1822 32.6239 14.95 31.525 14.95ZM26 19.0125C22.1 19.0125 19.0125 22.1 19.0125 26C19.0125 29.9 22.1 32.9875 26 32.9875C29.9 32.9875 32.9875 29.9 32.9875 26C32.9875 22.1 29.9 19.0125 26 19.0125ZM34.775 18.85C34.775 19.7475 34.0475 20.475 33.15 20.475C32.2525 20.475 31.525 19.7475 31.525 18.85C31.525 17.9525 32.2525 17.225 33.15 17.225C34.0475 17.225 34.775 17.9525 34.775 18.85Z'
					fill='currentColor'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26ZM20.475 12.5125H31.525C32.9875 12.675 33.9625 12.8375 34.775 13.1625C35.75 13.65 36.4 13.975 37.2125 14.7875C38.025 15.6 38.5125 16.4125 38.8375 17.225C39.1625 18.0375 39.4875 19.0125 39.4875 20.475V31.525C39.325 32.9875 39.1625 33.9625 38.8375 34.775C38.35 35.75 38.025 36.4 37.2125 37.2125C36.4 38.025 35.5875 38.5125 34.775 38.8375C33.9625 39.1625 32.9875 39.4875 31.525 39.4875H20.475C19.0125 39.325 18.0375 39.1625 17.225 38.8375C16.25 38.35 15.6 38.025 14.7875 37.2125C13.975 36.4 13.4875 35.5875 13.1625 34.775C12.8375 33.9625 12.5125 32.9875 12.5125 31.525V20.475C12.675 19.0125 12.8375 18.0375 13.1625 17.225C13.65 16.25 13.975 15.6 14.7875 14.7875C15.6 13.975 16.4125 13.4875 17.225 13.1625C18.0375 12.8375 19.0125 12.5125 20.475 12.5125Z'
					fill='currentColor'
				/>
			</svg>
		),
	},
	{
		name: 'twitter',
		icon: (
			<svg
				width='52'
				height='52'
				viewBox='0 0 52 52'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26ZM35.9125 18.6875C37.05 18.525 38.025 18.3625 39 17.875C38.35 19.0125 37.375 19.9875 36.2375 20.6375C36.5625 28.275 31.0375 36.5625 21.125 36.5625C18.2 36.5625 15.4375 35.5875 13 34.125C15.7625 34.45 18.6875 33.6375 20.6375 32.175C18.2 32.175 16.25 30.55 15.6 28.4375C16.4125 28.6 17.225 28.4375 18.0375 28.275C15.6 27.625 13.8125 25.35 13.8125 22.9125C14.625 23.2375 15.4375 23.5625 16.25 23.5625C13.975 21.9375 13.1625 18.85 14.625 16.4125C17.3875 19.6625 21.2875 21.775 25.675 21.9375C24.8625 18.6875 27.4625 15.4375 30.875 15.4375C32.3375 15.4375 33.8 16.0875 34.775 17.0625C36.075 16.7375 37.2125 16.4125 38.1875 15.7625C37.8625 17.0625 37.05 18.0375 35.9125 18.6875Z'
					fill='currentColor'
				/>
			</svg>
		),
	},
	{
		name: 'youtube',
		icon: (
			<svg
				width='52'
				height='52'
				viewBox='0 0 52 52'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M30.225 26L23.4 22.1V29.9L30.225 26Z'
					fill='currentColor'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26ZM36.075 17.3875C37.2125 17.7125 38.025 18.525 38.35 19.6625C39 21.775 39 26 39 26C39 26 39 30.225 38.5125 32.3375C38.1875 33.475 37.375 34.2875 36.2375 34.6125C34.125 35.1 26 35.1 26 35.1C26 35.1 17.7125 35.1 15.7625 34.6125C14.625 34.2875 13.8125 33.475 13.4875 32.3375C13 30.225 13 26 13 26C13 26 13 21.775 13.325 19.6625C13.65 18.525 14.4625 17.7125 15.6 17.3875C17.7125 16.9 25.8375 16.9 25.8375 16.9C25.8375 16.9 34.125 16.9 36.075 17.3875Z'
					fill='currentColor'
				/>
			</svg>
		),
	},
	{
		name: 'linkedin',
		icon: (
			<svg
				width='52'
				height='52'
				viewBox='0 0 52 52'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26ZM13.325 21.6125V39H18.85V21.6125H13.325ZM13 16.0875C13 17.875 14.3 19.175 16.0875 19.175C17.875 19.175 19.175 17.875 19.175 16.0875C19.175 14.3 17.875 13 16.0875 13C14.4625 13 13 14.3 13 16.0875ZM33.475 39H38.675V28.275C38.675 22.9125 35.425 21.125 32.3375 21.125C29.575 21.125 27.625 22.9125 27.1375 24.05V21.6125H21.9375V39H27.4625V29.7375C27.4625 27.3 29.0875 26 30.7125 26C32.3375 26 33.475 26.8125 33.475 29.575V39Z'
					fill='currentColor'
				/>
			</svg>
		),
	},
];

export const EMPLOYEE_DETAILS = {
	id: '001',
	themeColor: '#973534',
};

export const CARD_VIEW = {
	user: {
		name: 'Oyeniran Ayobami Pauloluth',
		position: 'CIO',
		image: '/img/profile-image.jpg',
		theme: '#000000',
	},
	company: {
		name: 'ISCE Digital Company',
		banner: '/img/header-image.jpg',
	},
	socials: [
		{
			id: 0,
			platform: 'phone',
			link: 'https://facebook.com/oyeniran',
			svg: (
				<svg
					width={100}
					height={100}
					viewBox='0 0 100 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-full h-full object-center object-cover'
					preserveAspectRatio='xMidYMid meet'
				>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						fill='#F2F2F2'
					/>
					<rect
						x={24}
						y={24}
						width={52}
						height={52}
						rx={26}
						fill='currentColor'
					/>
					<path
						d='M48.8943 53.4417L46.7359 55.6C46.2809 56.055 45.5576 56.055 45.0909 55.6117C44.9626 55.4834 44.8343 55.3667 44.7059 55.2384C43.5043 54.025 42.4193 52.7534 41.4509 51.4234C40.4943 50.0934 39.7243 48.7634 39.1643 47.445C38.6159 46.115 38.3359 44.8434 38.3359 43.63C38.3359 42.8367 38.4759 42.0784 38.7559 41.3784C39.0359 40.6667 39.4793 40.0134 40.0976 39.43C40.8443 38.695 41.6609 38.3334 42.5243 38.3334C42.8509 38.3334 43.1776 38.4034 43.4693 38.5434C43.7726 38.6834 44.0409 38.8934 44.2509 39.1967L46.9576 43.0117C47.1676 43.3034 47.3193 43.5717 47.4243 43.8284C47.5293 44.0734 47.5876 44.3184 47.5876 44.54C47.5876 44.82 47.5059 45.1 47.3426 45.3684C47.1909 45.6367 46.9693 45.9167 46.6893 46.1967L45.8026 47.1184C45.6743 47.2467 45.6159 47.3984 45.6159 47.585C45.6159 47.6784 45.6276 47.76 45.6509 47.8534C45.6859 47.9467 45.7209 48.0167 45.7443 48.0867C45.9543 48.4717 46.3159 48.9734 46.8293 49.58C47.3543 50.1867 47.9143 50.805 48.5209 51.4234C48.6376 51.54 48.7659 51.6567 48.8826 51.7734C49.3493 52.2284 49.3609 52.975 48.8943 53.4417Z'
						fill='#FFFFFE'
					/>
					<path
						d='M61.6348 57.385C61.6348 57.7117 61.5765 58.05 61.4598 58.3767C61.4248 58.47 61.3898 58.5633 61.3431 58.6567C61.1448 59.0767 60.8881 59.4733 60.5498 59.8467C59.9781 60.4767 59.3481 60.9317 58.6365 61.2233C58.6248 61.2233 58.6131 61.235 58.6015 61.235C57.9131 61.515 57.1665 61.6667 56.3615 61.6667C55.1715 61.6667 53.8998 61.3867 52.5581 60.815C51.2165 60.2433 49.8748 59.4733 48.5448 58.505C48.0898 58.1667 47.6348 57.8283 47.2031 57.4667L51.0181 53.6517C51.3448 53.8967 51.6365 54.0833 51.8815 54.2117C51.9398 54.235 52.0098 54.27 52.0915 54.305C52.1848 54.34 52.2781 54.3517 52.3831 54.3517C52.5815 54.3517 52.7331 54.2817 52.8615 54.1533L53.7481 53.2783C54.0398 52.9867 54.3198 52.765 54.5881 52.625C54.8565 52.4617 55.1248 52.38 55.4165 52.38C55.6381 52.38 55.8715 52.4267 56.1281 52.5317C56.3848 52.6367 56.6531 52.7883 56.9448 52.9867L60.8065 55.7283C61.1098 55.9383 61.3198 56.1833 61.4481 56.475C61.5648 56.7667 61.6348 57.0583 61.6348 57.385Z'
						fill='#FFFFFE'
					/>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						stroke='#E0E0E0'
					/>
				</svg>
			),
		},
		{
			id: 1,
			platform: 'mail',
			link: 'https://facebook.com/oyeniran',
			svg: (
				<svg
					width={100}
					height={100}
					viewBox='0 0 100 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-full h-full object-center object-cover'
					preserveAspectRatio='xMidYMid meet'
				>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						fill='#F2F2F2'
					/>
					<rect
						x={24}
						y={24}
						width={52}
						height={52}
						rx={26}
						fill='currentColor'
					/>
					<path
						d='M55.8359 40.0834H44.1693C40.6693 40.0834 38.3359 41.8334 38.3359 45.9167V54.0834C38.3359 58.1667 40.6693 59.9167 44.1693 59.9167H55.8359C59.3359 59.9167 61.6693 58.1667 61.6693 54.0834V45.9167C61.6693 41.8334 59.3359 40.0834 55.8359 40.0834ZM56.3843 47.1884L52.7326 50.105C51.9626 50.7234 50.9826 51.0267 50.0026 51.0267C49.0226 51.0267 48.0309 50.7234 47.2726 50.105L43.6209 47.1884C43.2476 46.885 43.1893 46.325 43.4809 45.9517C43.7843 45.5784 44.3326 45.5084 44.7059 45.8117L48.3576 48.7284C49.2443 49.44 50.7493 49.44 51.6359 48.7284L55.2876 45.8117C55.6609 45.5084 56.2209 45.5667 56.5126 45.9517C56.8159 46.325 56.7576 46.885 56.3843 47.1884Z'
						fill='#FFFFFE'
					/>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						stroke='#E0E0E0'
					/>
				</svg>
			),
		},
		{
			id: 2,
			platform: 'whatsapp',
			link: 'https://facebook.com/oyeniran',
			svg: (
				<svg
					width={100}
					height={100}
					viewBox='0 0 100 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-full h-full object-center object-cover'
					preserveAspectRatio='xMidYMid meet'
				>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						fill='#F2F2F2'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M44.475 59.2625C46.1 60.2375 48.05 60.725 50 60.725C56.0125 60.725 60.725 55.85 60.725 50.1625C60.725 47.2375 59.75 44.6375 57.6375 42.525C55.525 40.575 52.925 39.4375 50 39.4375C44.15 39.4375 39.275 44.3125 39.275 50.1625C39.275 52.1125 39.7625 54.0625 40.9 55.85L41.225 56.3375L40.0875 60.2375L44.15 59.1L44.475 59.2625ZM53.575 51.625C53.9 51.625 55.525 52.4375 55.85 52.6C55.9006 52.6253 55.9512 52.6467 56.0012 52.6678C56.2723 52.7822 56.5253 52.889 56.6625 53.575C56.825 53.575 56.825 54.225 56.5 55.0375C56.3375 55.6875 55.0375 56.5 54.3875 56.5C54.2774 56.5 54.1719 56.5093 54.0593 56.5193C53.507 56.5681 52.7819 56.6323 50.4875 55.6875C47.6397 54.5484 45.6653 51.7874 45.1109 51.012C45.0326 50.9025 44.9826 50.8326 44.9625 50.8125C44.9348 50.7572 44.8789 50.6689 44.8051 50.5524C44.4456 49.9848 43.6625 48.7483 43.6625 47.4C43.6625 45.775 44.475 44.9625 44.8 44.6375C45.125 44.3125 45.45 44.3125 45.6125 44.3125H46.2625C46.425 44.3125 46.75 44.3125 46.9125 44.8C47.2375 45.45 47.8875 47.075 47.8875 47.2375C47.8875 47.2917 47.9056 47.3458 47.9236 47.4C47.9597 47.5083 47.9959 47.6167 47.8875 47.725C47.8063 47.8062 47.7656 47.8875 47.725 47.9688C47.6844 48.05 47.6438 48.1313 47.5625 48.2125L47.075 48.7C46.9125 48.8625 46.75 49.025 46.9125 49.35C47.075 49.675 47.725 50.8125 48.7 51.625C49.7971 52.5849 50.6626 52.9662 51.1015 53.1595C51.1827 53.1953 51.2492 53.2246 51.3 53.25C51.625 53.25 51.7875 53.25 51.95 53.0875C52.0313 52.925 52.2344 52.6813 52.4375 52.4375C52.6406 52.1937 52.8437 51.95 52.925 51.7875C53.0875 51.4625 53.25 51.4625 53.575 51.625Z'
						fill='currentColor'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M24 50C24 35.6406 35.6406 24 50 24C64.3594 24 76 35.6406 76 50C76 64.3594 64.3594 76 50 76C35.6406 76 24 64.3594 24 50ZM50 37C53.4125 37 56.6625 38.3 59.1 40.7375C61.5375 43.175 63 46.425 63 49.8375C63 56.9875 57.15 62.8375 50 62.8375C47.8875 62.8375 45.775 62.1875 43.825 61.2125L37 63L38.7875 56.5C37.65 54.55 37 52.275 37 50C37 42.85 42.85 37 50 37Z'
						fill='currentColor'
					/>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						stroke='#E0E0E0'
					/>
				</svg>
			),
		},
		{
			id: 3,
			platform: 'youtube',
			link: 'https://facebook.com/oyeniran',
			svg: (
				<svg
					width={100}
					height={100}
					viewBox='0 0 100 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-full h-full object-center object-cover'
					preserveAspectRatio='xMidYMid meet'
				>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						fill='#F2F2F2'
					/>
					<path
						d='M54.225 50L47.4 46.1V53.9L54.225 50Z'
						fill='currentColor'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M24 50C24 35.6406 35.6406 24 50 24C64.3594 24 76 35.6406 76 50C76 64.3594 64.3594 76 50 76C35.6406 76 24 64.3594 24 50ZM60.075 41.3875C61.2125 41.7125 62.025 42.525 62.35 43.6625C63 45.775 63 50 63 50C63 50 63 54.225 62.5125 56.3375C62.1875 57.475 61.375 58.2875 60.2375 58.6125C58.125 59.1 50 59.1 50 59.1C50 59.1 41.7125 59.1 39.7625 58.6125C38.625 58.2875 37.8125 57.475 37.4875 56.3375C37 54.225 37 50 37 50C37 50 37 45.775 37.325 43.6625C37.65 42.525 38.4625 41.7125 39.6 41.3875C41.7125 40.9 49.8375 40.9 49.8375 40.9C49.8375 40.9 58.125 40.9 60.075 41.3875Z'
						fill='currentColor'
					/>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						stroke='#E0E0E0'
					/>
				</svg>
			),
		},
		{
			id: 4,
			platform: 'linkedin',
			link: 'https://facebook.com/oyeniran',
			svg: (
				<svg
					width={100}
					height={100}
					viewBox='0 0 100 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-full h-full object-center object-cover'
					preserveAspectRatio='xMidYMid meet'
				>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						fill='#F2F2F2'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M24 50C24 35.6406 35.6406 24 50 24C64.3594 24 76 35.6406 76 50C76 64.3594 64.3594 76 50 76C35.6406 76 24 64.3594 24 50ZM37.325 45.6125V63H42.85V45.6125H37.325ZM37 40.0875C37 41.875 38.3 43.175 40.0875 43.175C41.875 43.175 43.175 41.875 43.175 40.0875C43.175 38.3 41.875 37 40.0875 37C38.4625 37 37 38.3 37 40.0875ZM57.475 63H62.675V52.275C62.675 46.9125 59.425 45.125 56.3375 45.125C53.575 45.125 51.625 46.9125 51.1375 48.05V45.6125H45.9375V63H51.4625V53.7375C51.4625 51.3 53.0875 50 54.7125 50C56.3375 50 57.475 50.8125 57.475 53.575V63Z'
						fill='currentColor'
					/>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						stroke='#E0E0E0'
					/>
				</svg>
			),
		},
		{
			id: 5,
			platform: 'twitter',
			link: 'https://facebook.com/oyeniran',
			svg: (
				<svg
					width={100}
					height={100}
					viewBox='0 0 100 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-full h-full object-center object-cover'
					preserveAspectRatio='xMidYMid meet'
				>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						fill='#F2F2F2'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M24 50C24 35.6406 35.6406 24 50 24C64.3594 24 76 35.6406 76 50C76 64.3594 64.3594 76 50 76C35.6406 76 24 64.3594 24 50ZM59.9125 42.6875C61.05 42.525 62.025 42.3625 63 41.875C62.35 43.0125 61.375 43.9875 60.2375 44.6375C60.5625 52.275 55.0375 60.5625 45.125 60.5625C42.2 60.5625 39.4375 59.5875 37 58.125C39.7625 58.45 42.6875 57.6375 44.6375 56.175C42.2 56.175 40.25 54.55 39.6 52.4375C40.4125 52.6 41.225 52.4375 42.0375 52.275C39.6 51.625 37.8125 49.35 37.8125 46.9125C38.625 47.2375 39.4375 47.5625 40.25 47.5625C37.975 45.9375 37.1625 42.85 38.625 40.4125C41.3875 43.6625 45.2875 45.775 49.675 45.9375C48.8625 42.6875 51.4625 39.4375 54.875 39.4375C56.3375 39.4375 57.8 40.0875 58.775 41.0625C60.075 40.7375 61.2125 40.4125 62.1875 39.7625C61.8625 41.0625 61.05 42.0375 59.9125 42.6875Z'
						fill='currentColor'
					/>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						stroke='#E0E0E0'
					/>
				</svg>
			),
		},
		{
			id: 6,
			platform: 'facebook',
			link: 'https://facebook.com/oyeniran',
			svg: (
				<svg
					width={100}
					height={100}
					viewBox='0 0 100 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-full h-full object-center object-cover'
					preserveAspectRatio='xMidYMid meet'
				>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						fill='#F2F2F2'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M26 50C26 35.6406 37.6406 24 52 24C66.3594 24 78 35.6406 78 50C78 64.3594 66.3594 76 52 76C37.6406 76 26 64.3594 26 50ZM52 37C59.15 37 65 42.85 65 50C65 56.5 60.2875 62.025 53.7875 63V53.7375H56.875L57.525 50H53.95V47.5625C53.95 46.5875 54.4375 45.6125 56.0625 45.6125H57.6875V42.3625C57.6875 42.3625 56.225 42.0375 54.7625 42.0375C51.8375 42.0375 49.8875 43.825 49.8875 47.075V50H46.6375V53.7375H49.8875V62.8375C43.7125 61.8625 39 56.5 39 50C39 42.85 44.85 37 52 37Z'
						fill='currentColor'
					/>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						stroke='#E0E0E0'
					/>
				</svg>
			),
		},
		{
			id: 7,
			platform: 'instagram',
			link: 'https://facebook.com/oyeniran',
			svg: (
				<svg
					width={100}
					height={100}
					viewBox='0 0 100 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-full h-full object-center object-cover'
					preserveAspectRatio='xMidYMid meet'
				>
					<rect
						x='0.5'
						y='0.5'
						width='99'
						height='99'
						rx='11.5'
						fill='#F2F2F2'
					></rect>
					<path
						d='M50 54.55C47.5625 54.55 45.45 52.6 45.45 50C45.45 47.5625 47.4 45.45 50 45.45C52.4375 45.45 54.55 47.4 54.55 50C54.55 52.4375 52.4375 54.55 50 54.55Z'
						fill='currentColor'
					></path>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M55.525 38.95H44.475C43.175 39.1125 42.525 39.275 42.0375 39.4375C41.3875 39.6 40.9 39.925 40.4125 40.4125C40.0267 40.7983 39.8445 41.184 39.6242 41.6503C39.5661 41.7731 39.5053 41.902 39.4375 42.0375C39.4124 42.1129 39.3833 42.1922 39.3522 42.2772C39.1822 42.7417 38.95 43.3761 38.95 44.475V55.525C39.1125 56.825 39.275 57.475 39.4375 57.9625C39.6 58.6125 39.925 59.1 40.4125 59.5875C40.7983 59.9733 41.184 60.1555 41.6503 60.3758C41.7733 60.4339 41.9018 60.4947 42.0375 60.5625C42.1129 60.5876 42.1922 60.6167 42.2772 60.6478C42.7417 60.8178 43.3761 61.05 44.475 61.05H55.525C56.825 60.8875 57.475 60.725 57.9625 60.5625C58.6125 60.4 59.1 60.075 59.5875 59.5875C59.9733 59.2017 60.1555 58.816 60.3758 58.3497C60.4339 58.2268 60.4947 58.0981 60.5625 57.9625C60.5876 57.8871 60.6167 57.8078 60.6478 57.7228C60.8178 57.2583 61.05 56.6239 61.05 55.525V44.475C60.8875 43.175 60.725 42.525 60.5625 42.0375C60.4 41.3875 60.075 40.9 59.5875 40.4125C59.2017 40.0267 58.816 39.8445 58.3497 39.6242C58.2269 39.5662 58.0979 39.5052 57.9625 39.4375C57.8871 39.4124 57.8078 39.3833 57.7228 39.3522C57.2583 39.1822 56.6239 38.95 55.525 38.95ZM50 43.0125C46.1 43.0125 43.0125 46.1 43.0125 50C43.0125 53.9 46.1 56.9875 50 56.9875C53.9 56.9875 56.9875 53.9 56.9875 50C56.9875 46.1 53.9 43.0125 50 43.0125ZM58.775 42.85C58.775 43.7475 58.0475 44.475 57.15 44.475C56.2525 44.475 55.525 43.7475 55.525 42.85C55.525 41.9525 56.2525 41.225 57.15 41.225C58.0475 41.225 58.775 41.9525 58.775 42.85Z'
						fill='currentColor'
					></path>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M24 50C24 35.6406 35.6406 24 50 24C64.3594 24 76 35.6406 76 50C76 64.3594 64.3594 76 50 76C35.6406 76 24 64.3594 24 50ZM44.475 36.5125H55.525C56.9875 36.675 57.9625 36.8375 58.775 37.1625C59.75 37.65 60.4 37.975 61.2125 38.7875C62.025 39.6 62.5125 40.4125 62.8375 41.225C63.1625 42.0375 63.4875 43.0125 63.4875 44.475V55.525C63.325 56.9875 63.1625 57.9625 62.8375 58.775C62.35 59.75 62.025 60.4 61.2125 61.2125C60.4 62.025 59.5875 62.5125 58.775 62.8375C57.9625 63.1625 56.9875 63.4875 55.525 63.4875H44.475C43.0125 63.325 42.0375 63.1625 41.225 62.8375C40.25 62.35 39.6 62.025 38.7875 61.2125C37.975 60.4 37.4875 59.5875 37.1625 58.775C36.8375 57.9625 36.5125 56.9875 36.5125 55.525V44.475C36.675 43.0125 36.8375 42.0375 37.1625 41.225C37.65 40.25 37.975 39.6 38.7875 38.7875C39.6 37.975 40.4125 37.4875 41.225 37.1625C42.0375 36.8375 43.0125 36.5125 44.475 36.5125Z'
						fill='currentColor'
					></path>
					<rect
						x='0.5'
						y='0.5'
						width='99'
						height='99'
						rx='11.5'
						stroke='#E0E0E0'
					></rect>
				</svg>
			),
		},
		{
			id: 8,
			platform: 'twitter',
			link: 'https://facebook.com/oyeniran',
			svg: (
				<svg
					width={100}
					height={100}
					viewBox='0 0 100 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-full h-full object-center object-cover'
					preserveAspectRatio='xMidYMid meet'
				>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						fill='#F2F2F2'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M24 50C24 35.6406 35.6406 24 50 24C64.3594 24 76 35.6406 76 50C76 64.3594 64.3594 76 50 76C35.6406 76 24 64.3594 24 50ZM59.9125 42.6875C61.05 42.525 62.025 42.3625 63 41.875C62.35 43.0125 61.375 43.9875 60.2375 44.6375C60.5625 52.275 55.0375 60.5625 45.125 60.5625C42.2 60.5625 39.4375 59.5875 37 58.125C39.7625 58.45 42.6875 57.6375 44.6375 56.175C42.2 56.175 40.25 54.55 39.6 52.4375C40.4125 52.6 41.225 52.4375 42.0375 52.275C39.6 51.625 37.8125 49.35 37.8125 46.9125C38.625 47.2375 39.4375 47.5625 40.25 47.5625C37.975 45.9375 37.1625 42.85 38.625 40.4125C41.3875 43.6625 45.2875 45.775 49.675 45.9375C48.8625 42.6875 51.4625 39.4375 54.875 39.4375C56.3375 39.4375 57.8 40.0875 58.775 41.0625C60.075 40.7375 61.2125 40.4125 62.1875 39.7625C61.8625 41.0625 61.05 42.0375 59.9125 42.6875Z'
						fill='currentColor'
					/>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						stroke='#E0E0E0'
					/>
				</svg>
			),
		},
		{
			id: 6,
			platform: 'facebook',
			link: 'https://facebook.com/oyeniran',
			svg: (
				<svg
					width={100}
					height={100}
					viewBox='0 0 100 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-full h-full object-center object-cover'
					preserveAspectRatio='xMidYMid meet'
				>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						fill='#F2F2F2'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M26 50C26 35.6406 37.6406 24 52 24C66.3594 24 78 35.6406 78 50C78 64.3594 66.3594 76 52 76C37.6406 76 26 64.3594 26 50ZM52 37C59.15 37 65 42.85 65 50C65 56.5 60.2875 62.025 53.7875 63V53.7375H56.875L57.525 50H53.95V47.5625C53.95 46.5875 54.4375 45.6125 56.0625 45.6125H57.6875V42.3625C57.6875 42.3625 56.225 42.0375 54.7625 42.0375C51.8375 42.0375 49.8875 43.825 49.8875 47.075V50H46.6375V53.7375H49.8875V62.8375C43.7125 61.8625 39 56.5 39 50C39 42.85 44.85 37 52 37Z'
						fill='currentColor'
					/>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						stroke='#E0E0E0'
					/>
				</svg>
			),
		},
		{
			id: 7,
			platform: 'instagram',
			link: 'https://facebook.com/oyeniran',
			svg: (
				<svg
					width={100}
					height={100}
					viewBox='0 0 100 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-full h-full object-center object-cover'
					preserveAspectRatio='xMidYMid meet'
				>
					<rect
						x='0.5'
						y='0.5'
						width='99'
						height='99'
						rx='11.5'
						fill='#F2F2F2'
					></rect>
					<path
						d='M50 54.55C47.5625 54.55 45.45 52.6 45.45 50C45.45 47.5625 47.4 45.45 50 45.45C52.4375 45.45 54.55 47.4 54.55 50C54.55 52.4375 52.4375 54.55 50 54.55Z'
						fill='currentColor'
					></path>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M55.525 38.95H44.475C43.175 39.1125 42.525 39.275 42.0375 39.4375C41.3875 39.6 40.9 39.925 40.4125 40.4125C40.0267 40.7983 39.8445 41.184 39.6242 41.6503C39.5661 41.7731 39.5053 41.902 39.4375 42.0375C39.4124 42.1129 39.3833 42.1922 39.3522 42.2772C39.1822 42.7417 38.95 43.3761 38.95 44.475V55.525C39.1125 56.825 39.275 57.475 39.4375 57.9625C39.6 58.6125 39.925 59.1 40.4125 59.5875C40.7983 59.9733 41.184 60.1555 41.6503 60.3758C41.7733 60.4339 41.9018 60.4947 42.0375 60.5625C42.1129 60.5876 42.1922 60.6167 42.2772 60.6478C42.7417 60.8178 43.3761 61.05 44.475 61.05H55.525C56.825 60.8875 57.475 60.725 57.9625 60.5625C58.6125 60.4 59.1 60.075 59.5875 59.5875C59.9733 59.2017 60.1555 58.816 60.3758 58.3497C60.4339 58.2268 60.4947 58.0981 60.5625 57.9625C60.5876 57.8871 60.6167 57.8078 60.6478 57.7228C60.8178 57.2583 61.05 56.6239 61.05 55.525V44.475C60.8875 43.175 60.725 42.525 60.5625 42.0375C60.4 41.3875 60.075 40.9 59.5875 40.4125C59.2017 40.0267 58.816 39.8445 58.3497 39.6242C58.2269 39.5662 58.0979 39.5052 57.9625 39.4375C57.8871 39.4124 57.8078 39.3833 57.7228 39.3522C57.2583 39.1822 56.6239 38.95 55.525 38.95ZM50 43.0125C46.1 43.0125 43.0125 46.1 43.0125 50C43.0125 53.9 46.1 56.9875 50 56.9875C53.9 56.9875 56.9875 53.9 56.9875 50C56.9875 46.1 53.9 43.0125 50 43.0125ZM58.775 42.85C58.775 43.7475 58.0475 44.475 57.15 44.475C56.2525 44.475 55.525 43.7475 55.525 42.85C55.525 41.9525 56.2525 41.225 57.15 41.225C58.0475 41.225 58.775 41.9525 58.775 42.85Z'
						fill='currentColor'
					></path>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M24 50C24 35.6406 35.6406 24 50 24C64.3594 24 76 35.6406 76 50C76 64.3594 64.3594 76 50 76C35.6406 76 24 64.3594 24 50ZM44.475 36.5125H55.525C56.9875 36.675 57.9625 36.8375 58.775 37.1625C59.75 37.65 60.4 37.975 61.2125 38.7875C62.025 39.6 62.5125 40.4125 62.8375 41.225C63.1625 42.0375 63.4875 43.0125 63.4875 44.475V55.525C63.325 56.9875 63.1625 57.9625 62.8375 58.775C62.35 59.75 62.025 60.4 61.2125 61.2125C60.4 62.025 59.5875 62.5125 58.775 62.8375C57.9625 63.1625 56.9875 63.4875 55.525 63.4875H44.475C43.0125 63.325 42.0375 63.1625 41.225 62.8375C40.25 62.35 39.6 62.025 38.7875 61.2125C37.975 60.4 37.4875 59.5875 37.1625 58.775C36.8375 57.9625 36.5125 56.9875 36.5125 55.525V44.475C36.675 43.0125 36.8375 42.0375 37.1625 41.225C37.65 40.25 37.975 39.6 38.7875 38.7875C39.6 37.975 40.4125 37.4875 41.225 37.1625C42.0375 36.8375 43.0125 36.5125 44.475 36.5125Z'
						fill='currentColor'
					></path>
					<rect
						x='0.5'
						y='0.5'
						width='99'
						height='99'
						rx='11.5'
						stroke='#E0E0E0'
					></rect>
				</svg>
			),
		},
		{
			id: 5,
			platform: 'twitter',
			link: 'https://facebook.com/oyeniran',
			svg: (
				<svg
					width={100}
					height={100}
					viewBox='0 0 100 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-full h-full object-center object-cover'
					preserveAspectRatio='xMidYMid meet'
				>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						fill='#F2F2F2'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M24 50C24 35.6406 35.6406 24 50 24C64.3594 24 76 35.6406 76 50C76 64.3594 64.3594 76 50 76C35.6406 76 24 64.3594 24 50ZM59.9125 42.6875C61.05 42.525 62.025 42.3625 63 41.875C62.35 43.0125 61.375 43.9875 60.2375 44.6375C60.5625 52.275 55.0375 60.5625 45.125 60.5625C42.2 60.5625 39.4375 59.5875 37 58.125C39.7625 58.45 42.6875 57.6375 44.6375 56.175C42.2 56.175 40.25 54.55 39.6 52.4375C40.4125 52.6 41.225 52.4375 42.0375 52.275C39.6 51.625 37.8125 49.35 37.8125 46.9125C38.625 47.2375 39.4375 47.5625 40.25 47.5625C37.975 45.9375 37.1625 42.85 38.625 40.4125C41.3875 43.6625 45.2875 45.775 49.675 45.9375C48.8625 42.6875 51.4625 39.4375 54.875 39.4375C56.3375 39.4375 57.8 40.0875 58.775 41.0625C60.075 40.7375 61.2125 40.4125 62.1875 39.7625C61.8625 41.0625 61.05 42.0375 59.9125 42.6875Z'
						fill='currentColor'
					/>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						stroke='#E0E0E0'
					/>
				</svg>
			),
		},
		{
			id: 6,
			platform: 'facebook',
			link: 'https://facebook.com/oyeniran',
			svg: (
				<svg
					width={100}
					height={100}
					viewBox='0 0 100 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-full h-full object-center object-cover'
					preserveAspectRatio='xMidYMid meet'
				>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						fill='#F2F2F2'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M26 50C26 35.6406 37.6406 24 52 24C66.3594 24 78 35.6406 78 50C78 64.3594 66.3594 76 52 76C37.6406 76 26 64.3594 26 50ZM52 37C59.15 37 65 42.85 65 50C65 56.5 60.2875 62.025 53.7875 63V53.7375H56.875L57.525 50H53.95V47.5625C53.95 46.5875 54.4375 45.6125 56.0625 45.6125H57.6875V42.3625C57.6875 42.3625 56.225 42.0375 54.7625 42.0375C51.8375 42.0375 49.8875 43.825 49.8875 47.075V50H46.6375V53.7375H49.8875V62.8375C43.7125 61.8625 39 56.5 39 50C39 42.85 44.85 37 52 37Z'
						fill='currentColor'
					/>
					<rect
						x='0.5'
						y='0.5'
						width={99}
						height={99}
						rx='11.5'
						stroke='#E0E0E0'
					/>
				</svg>
			),
		},
		{
			id: 7,
			platform: 'instagram',
			link: 'https://facebook.com/oyeniran',
			svg: (
				<svg
					width={100}
					height={100}
					viewBox='0 0 100 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-full h-full object-center object-cover'
					preserveAspectRatio='xMidYMid meet'
				>
					<rect
						x='0.5'
						y='0.5'
						width='99'
						height='99'
						rx='11.5'
						fill='#F2F2F2'
					></rect>
					<path
						d='M50 54.55C47.5625 54.55 45.45 52.6 45.45 50C45.45 47.5625 47.4 45.45 50 45.45C52.4375 45.45 54.55 47.4 54.55 50C54.55 52.4375 52.4375 54.55 50 54.55Z'
						fill='currentColor'
					></path>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M55.525 38.95H44.475C43.175 39.1125 42.525 39.275 42.0375 39.4375C41.3875 39.6 40.9 39.925 40.4125 40.4125C40.0267 40.7983 39.8445 41.184 39.6242 41.6503C39.5661 41.7731 39.5053 41.902 39.4375 42.0375C39.4124 42.1129 39.3833 42.1922 39.3522 42.2772C39.1822 42.7417 38.95 43.3761 38.95 44.475V55.525C39.1125 56.825 39.275 57.475 39.4375 57.9625C39.6 58.6125 39.925 59.1 40.4125 59.5875C40.7983 59.9733 41.184 60.1555 41.6503 60.3758C41.7733 60.4339 41.9018 60.4947 42.0375 60.5625C42.1129 60.5876 42.1922 60.6167 42.2772 60.6478C42.7417 60.8178 43.3761 61.05 44.475 61.05H55.525C56.825 60.8875 57.475 60.725 57.9625 60.5625C58.6125 60.4 59.1 60.075 59.5875 59.5875C59.9733 59.2017 60.1555 58.816 60.3758 58.3497C60.4339 58.2268 60.4947 58.0981 60.5625 57.9625C60.5876 57.8871 60.6167 57.8078 60.6478 57.7228C60.8178 57.2583 61.05 56.6239 61.05 55.525V44.475C60.8875 43.175 60.725 42.525 60.5625 42.0375C60.4 41.3875 60.075 40.9 59.5875 40.4125C59.2017 40.0267 58.816 39.8445 58.3497 39.6242C58.2269 39.5662 58.0979 39.5052 57.9625 39.4375C57.8871 39.4124 57.8078 39.3833 57.7228 39.3522C57.2583 39.1822 56.6239 38.95 55.525 38.95ZM50 43.0125C46.1 43.0125 43.0125 46.1 43.0125 50C43.0125 53.9 46.1 56.9875 50 56.9875C53.9 56.9875 56.9875 53.9 56.9875 50C56.9875 46.1 53.9 43.0125 50 43.0125ZM58.775 42.85C58.775 43.7475 58.0475 44.475 57.15 44.475C56.2525 44.475 55.525 43.7475 55.525 42.85C55.525 41.9525 56.2525 41.225 57.15 41.225C58.0475 41.225 58.775 41.9525 58.775 42.85Z'
						fill='currentColor'
					></path>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M24 50C24 35.6406 35.6406 24 50 24C64.3594 24 76 35.6406 76 50C76 64.3594 64.3594 76 50 76C35.6406 76 24 64.3594 24 50ZM44.475 36.5125H55.525C56.9875 36.675 57.9625 36.8375 58.775 37.1625C59.75 37.65 60.4 37.975 61.2125 38.7875C62.025 39.6 62.5125 40.4125 62.8375 41.225C63.1625 42.0375 63.4875 43.0125 63.4875 44.475V55.525C63.325 56.9875 63.1625 57.9625 62.8375 58.775C62.35 59.75 62.025 60.4 61.2125 61.2125C60.4 62.025 59.5875 62.5125 58.775 62.8375C57.9625 63.1625 56.9875 63.4875 55.525 63.4875H44.475C43.0125 63.325 42.0375 63.1625 41.225 62.8375C40.25 62.35 39.6 62.025 38.7875 61.2125C37.975 60.4 37.4875 59.5875 37.1625 58.775C36.8375 57.9625 36.5125 56.9875 36.5125 55.525V44.475C36.675 43.0125 36.8375 42.0375 37.1625 41.225C37.65 40.25 37.975 39.6 38.7875 38.7875C39.6 37.975 40.4125 37.4875 41.225 37.1625C42.0375 36.8375 43.0125 36.5125 44.475 36.5125Z'
						fill='currentColor'
					></path>
					<rect
						x='0.5'
						y='0.5'
						width='99'
						height='99'
						rx='11.5'
						stroke='#E0E0E0'
					></rect>
				</svg>
			),
		},
	],
	services: [
		{
			id: '0',
			title: 'Event Planning',
			image: '/img/about-1.jpg',
			description: `We provide the best planners and materials suited to meet all your occasions including birthdays, bridal and baby showers, wedding, burial, house opening events and lots more.`,
		},
		{
			id: '1',
			title: 'Hall Rentals',
			image: '/img/about-2.jpg',
			description: `We provide the best planners and materials suited to meet all your occasions including birthdays, bridal and baby showers, wedding, burial, house opening events and lots more.`,
			link: 'https://facebook.com/oyrniran/',
		},
		{
			id: '2',
			title: 'Event Hosting',
			image: '/img/about-3.jpg',
			description: `We provide the best planners and materials suited to meet all your occasions including birthdays, bridal and baby showers, wedding, burial, house opening events and lots more.`,
			link: 'https://facebook.com/oyrniran/',
		},
		{
			id: '3',
			title: 'Event Hosting',
			image: '/img/about-3.jpg',
			description: `We provide the best planners and materials suited to meet all your occasions including birthdays, bridal and baby showers, wedding, burial, house opening events and lots more.`,
		},
		{
			id: '4',
			title: 'Event Materials',
			image: '/img/about-4.jpg',
			description: `We provide the best planners and materials suited to meet all your occasions including birthdays, bridal and baby showers, wedding, burial, house opening events and lots more.`,
			link: 'https://facebook.com/oyrniran/',
		},
		{
			id: '5',
			title: 'Event Materials',
			image: '/img/about-4.jpg',
			description: `We provide the best planners and materials suited to meet all your occasions including birthdays, bridal and baby showers, wedding, burial, house opening events and lots more.`,
			link: 'https://facebook.com/oyrniran/',
		},
		{
			id: '6',
			title: 'Event Materials',
			image: '/img/about-4.jpg',
			description: `We provide the best planners and materials suited to meet all your occasions including birthdays, bridal and baby showers, wedding, burial, house opening events and lots more.`,
			link: 'https://facebook.com/oyrniran/',
		},
	],
};

export const ADMIN_NAVLINKS = [
	{
		title: 'Dashboard',
		href: '/admin',
		bgColor: 'bg-black',
		borderColor: 'border-white',
		icon: '/icons/dashboard.svg',
		activeIcon: '/icons/dashboard-active.svg',
	},
	{
		title: 'Employees',
		href: '/admin/employees',
		bgColor: 'bg-black',
		borderColor: 'border-white',
		icon: '/icons/employees.svg',
		activeIcon: '/icons/employees-active.svg',
	},
	{
		title: 'Appointments',
		href: '/admin/appointments',
		bgColor: 'bg-black',
		borderColor: 'border-white',
		icon: '/icons/appointments.svg',
		activeIcon: '/icons/appointments-active.svg',
	},
	{
		title: 'Invoices',
		href: '/admin/invoices',
		bgColor: 'bg-black',
		borderColor: 'border-white',
		icon: '/icons/invoices.svg',
		activeIcon: '/icons/invoices-active.svg',
	},
	{
		title: 'Chat',
		href: '/admin/chat',
		bgColor: 'bg-black',
		borderColor: 'border-white',
		icon: '/icons/chat.svg',
		activeIcon: '/icons/chat-active.svg',
	},
	{
		title: 'Settings',
		href: '/admin/settings',
		bgColor: 'bg-black',
		borderColor: 'border-white',
		icon: '/icons/settings.svg',
		activeIcon: '/icons/settings-active.svg',
	},
];

export const STAFF_NAVLINKS = [
	{
		title: 'Dashboard',
		href: '/staff',
		bgColor: 'bg-black',
		borderColor: 'border-white',
		icon: '/icons/dashboard.svg',
		activeIcon: '/icons/dashboard-active.svg',
	},
	{
		title: 'Employees',
		href: '/staff/employees',
		bgColor: 'bg-black',
		borderColor: 'border-white',
		icon: '/icons/employees.svg',
		activeIcon: '/icons/employees-active.svg',
	},
	{
		title: 'Appointments',
		href: '/staff/appointments',
		bgColor: 'bg-black',
		borderColor: 'border-white',
		icon: '/icons/appointments.svg',
		activeIcon: '/icons/appointments-active.svg',
	},
	{
		title: 'Invoices',
		href: '/staff/invoices',
		bgColor: 'bg-black',
		borderColor: 'border-white',
		icon: '/icons/invoices.svg',
		activeIcon: '/icons/invoices-active.svg',
	},
	{
		title: 'Chat',
		href: '/staff/chat',
		bgColor: 'bg-black',
		borderColor: 'border-white',
		icon: '/icons/chat.svg',
		activeIcon: '/icons/chat-active.svg',
	},
	{
		title: 'Settings',
		href: '/staff/settings',
		bgColor: 'bg-black',
		borderColor: 'border-white',
		icon: '/icons/settings.svg',
		activeIcon: '/icons/settings-active.svg',
	},
];
