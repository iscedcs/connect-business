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
