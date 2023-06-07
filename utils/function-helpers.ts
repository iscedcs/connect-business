export function getInitials(name: string): string {
	const words = name.trim().split(' ');

	if (words.length >= 2) {
		const firstInitial = words[0].charAt(0);
		const secondInitial = words[1].charAt(0);
		return `${firstInitial}${secondInitial}`;
	}

	return words[0].charAt(0);
}

export function formatDate(dateString: string): string {
	const months: string[] = [
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

	const date = new Date(dateString);
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();

	let ampm = 'AM';
	let formattedHours = hours;

	if (hours > 12) {
		formattedHours = hours - 12;
		ampm = 'PM';
	} else if (hours === 0) {
		formattedHours = 12;
	}

	const formattedDate = `${formattedHours}:${minutes
		.toString()
		.padStart(2, '0')} ${ampm} ${day} ${months[month]}, ${year}`;

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
