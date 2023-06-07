// export interface TextProps {
// 	color: string;
// 	type?: string;
// 	size?: string;
// 	lineHeight?: string;
// 	className?: string;
// 	children: React.ReactNode;
// }

// export interface TextInputProps {
// 	label: string;
// 	value?: string;
// 	onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
// 	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
// 	variant?: 'text' | 'password' | 'email' | 'phone';
// 	className?: string;
// 	name?: string;
// 	error?: boolean;
// }

// export interface ButtonProps {
// 	size?: 'sm' | 'md' | 'lg';
// 	children?: React.ReactNode;
// 	className?: string;
// 	variant: 'primary' | 'secondary';
// 	href?: string;
// 	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
// }

// export interface CheckboxProps {
// 	checked: boolean;
// 	onChange?: (checked: boolean) => void;
// }

// export interface EmployeeDetails {
// 	id: number;
// 	name: string;
// 	email: string;
// 	position: string;
// 	image?: string;
// 	status: string;
// 	address: string;
// 	phone: string;
// 	gender: string;
// }

// export interface DropdownItem {
// 	title: string;
// 	link?: string;
// 	onClick?: () => void;
// 	icon: React.ReactNode;
// 	color: string;
// }

// export interface DropdownProps {
// 	isOpen: boolean; // New prop for controlling the visibility of the dropdown
// 	items: DropdownItem[];
// 	onClose: () => void;
// }

// export interface EmployeeCardProps {
// 	name: string;
// 	email: string;
// 	position: string;
// 	image?: string;
// 	onClick?: () => void;
// 	onDelete?: () => void;
// 	status: string;
// }

// export interface NavBarMobileButtonProps {
// 	imageSrc: string;
// 	links: {
// 		title: string;
// 		href: string;
// 		icon: string;
// 		bgColor: string;
// 		borderColor: string;
// 	}[];
// }

// export interface CalendarEvent {
// 	id: string;
// 	title: string;
// 	start: string;
// 	end: string;
// 	location: string;
// 	description: string;
// 	attendees: string[];
// 	isAllDay: boolean;
// 	recurrence: Recurrence | null;
// 	creator: string;
// }

// export interface Recurrence {
// 	frequency: string;
// 	interval: number;
// 	end: string | null;
// }
