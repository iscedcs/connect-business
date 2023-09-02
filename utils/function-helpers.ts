import { v4 as uuidv4 } from 'uuid';

export function getInitials(name: string): string {
	const words = name.trim().split(' ');

	if (words.length >= 2) {
		const firstInitial = words[0].charAt(0);
		const secondInitial = words[1].charAt(0);
		return `${firstInitial}${secondInitial}`;
	}

	return words[0].charAt(0);
}

export function formatDate(isoTimestamp: string): string {
	const dtObject = new Date(isoTimestamp);

	// Function to convert month number to month name
	function getMonthName(month: number): string {
		const monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		return monthNames[month];
	}

	const formattedDate = `${dtObject.getDate()} ${getMonthName(
		dtObject.getMonth()
	)}, ${dtObject.getFullYear()}`;
	return formattedDate;
}

export function getTimeAgo(timestamp: Date): string {
	const now = new Date();
	const secondsElapsed = Math.floor(
		(now.getTime() - timestamp.getTime()) / 1000
	);

	if (secondsElapsed < 60) {
		return `${secondsElapsed} sec ago`;
	} else if (secondsElapsed < 600) {
		const minutes = Math.floor(secondsElapsed / 60);
		return `${minutes} min ago`;
	} else if (secondsElapsed < 3600) {
		const minutes = Math.floor(secondsElapsed / 600) * 10;
		return `${minutes} min ago`;
	} else if (secondsElapsed < 86400) {
		const hours = Math.floor(secondsElapsed / 3600);
		return `${hours} hour ago`;
	} else {
		const days = Math.floor(secondsElapsed / 86400);
		return `${days} days ago`;
	}
}

export function GetTitle(input: string): string {
	if (input === '/admin' || input === '/staff') {
		return 'Dashboard';
	}
	const parts = input.split('/');
	const lastElement = parts[parts.length - 1];

	const words = lastElement.split('-').map((word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	});

	return words.join(' ');
}

export function formatName(name: string): string {
	const nameParts = name.trim().split(' ');

	if (nameParts.length >= 3) {
		const firstName = nameParts[0];
		const lastName = nameParts[1];

		const otherNameInitial = nameParts[2].charAt(0) + '.';

		return `${firstName} ${lastName} ${otherNameInitial}`;
	} else {
		return name;
	}
}

export function extractLastPartFromUrl(url: string): string | null {
	try {
		const urlObj = new URL(url);
		const pathParts = urlObj.pathname.split('/');
		const lastPart = pathParts[pathParts.length - 1];
		return lastPart || null;
	} catch (error) {
		console.error('Error parsing URL:', error);
		return null;
	}
}

export const generateUniqueID = (): string => {
	const id = uuidv4();
	console.log(id);
	return id;
};

export function splitArrayByLabel(inputArray: SocialFieldI[]): OutputObject {
	const outputObject: OutputObject = {};

	inputArray.forEach((item) => {
		const { label, ...rest } = item;
		if (!outputObject[label]) {
			outputObject[label] = [];
		}
		outputObject[label].push({ label, ...rest });
	});

	return outputObject;
}

const labelToUrlMap: LabelToUrlMap = {
	email: (value) => `mailto:${value}`,
	phone: (value) => `tel:${value}`,
	address: (value) =>
		`https://maps.google.com/?q=${encodeURIComponent(value)}`,
	whatsapp: (value) => `https://wa.me/${value}`,
	tiktok: (value) => `https://www.tiktok.com/${value}`,
	snapchat: (value) => `https://www.snapchat.com/add/${value}`,
	linkedin: (value) => `https://www.linkedin.com/in/${value}`,
	instagram: (value) => `https://www.instagram.com/${value}`,
	twitter: (value) => `https://twitter.com/${value}`,
};

export function getUrlForLabel(
	label: string,
	value: string
): string | undefined {
	const urlFormatter = labelToUrlMap[label.toLowerCase()];
	if (urlFormatter) {
		return urlFormatter(value);
	}
	return undefined; // Return undefined if label is not recognized
}
