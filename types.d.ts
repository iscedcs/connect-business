interface TextProps {
	color: string;
	type?: string;
	size?: string;
	lineHeight?: string;
	className?: string;
	children: React.ReactNode;
}

interface TextInputProps {
	label: string;
	value?: string;
	onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	variant?: 'text' | 'password' | 'email' | 'phone';
	className?: string;
	name?: string;
	error?: boolean;
}

interface SelectInputProps {
	options: string[];
	className?: string;
	label?: string;
	onSelect?: (option: string) => void;
	name?: string;
}

interface TextAreaProps {
	label: string;
	value?: string;
	onInput?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
	className?: string;
	name?: string;
	error?: boolean;
	placeholder?: string;
}

interface ButtonProps {
	size?: 'sm' | 'md' | 'lg';
	children?: React.ReactNode;
	className?: string;
	variant: 'primary' | 'secondary';
	href?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface CheckboxProps {
	checked: boolean;
	onChange?: (checked: boolean) => void;
}

interface EmployeeDetails {
	id: number;
	name: string;
	email: string;
	position: string;
	image?: string;
	status: string;
	address: string;
	phone: string;
	gender: string;
}

interface DropdownItem {
	title: string;
	link?: string;
	onClick?: () => void;
	icon: React.ReactNode;
	color: string;
}

interface DropdownProps {
	isOpen: boolean; // New prop for controlling the visibility of the dropdown
	items: DropdownItem[];
	onClose: () => void;
}

interface EmployeeCardProps {
	name: string;
	email: string;
	position: string;
	image?: string;
	onClick?: () => void;
	onDelete?: () => void;
	status: string;
}

interface NavBarMobileButtonProps {
	imageSrc: string;
	links: {
		title: string;
		href: string;
		activeIcon: string;
		bgColor: string;
		borderColor: string;
	}[];
}

interface CalendarEvent {
	id: string;
	title: string;
	start: string;
	end: string;
	location: string;
	description: string;
	attendees: string[];
	isAllDay: boolean;
	recurrence: Recurrence | null;
	creator: string;
}

interface Recurrence {
	frequency: string;
	interval: number;
	end: string | null;
}

interface Client {
	fullName: string;
	jobTitle: string;
	phone: string;
	email: string;
	patronizing: boolean;
}

interface OnboardedEmployeesProps {
	searchResults: EmployeeDetails[];
	handleCardClick: any;
	handleDelete: any;
}

interface EmployeesProps {}

interface SigninLayoutProps {
	left: React.ReactNode;
	right: React.ReactNode;
}

interface AppointmentListItemProps {
	creator: string;
	title: string;
	date: string;
	endDate?: string;
	location?: string;
	description?: string;
	attendees?: string[];
	onClick?: () => void;
}

interface CalendarProps {
	onSelectDate?: (date: Date) => void;
	type?: 'small' | 'large';
	appointmentList: CalendarEvent[];
}

interface ClientTableProps {
	selectedClients: Client[];
}

interface DashboardCardProps {
	amount: string;
	newAmount: string;
	description: string;
	newDescription: string;
	href?: string;
}

interface HeaderProps {
	headerTitle: string;
	profileName?: string;
	profileImage: string;
	notificationCount: number;
}

interface NavBarItemProps {
	name: string;
	active?: boolean;
	icon: string;
	activeIcon: string;
	href: string;
}

interface SearchBarProps {
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	showAddEmployee?: boolean;
}

interface Button {
	id: string;
	label: string;
	className?: string;
	onClick?: () => void;
}

interface EmployeesButtonGroupProps {
	buttons: Button[];
}

interface OnboardedEmployeesProps {
	searchResults: EmployeeDetails[];
	handleCardClick: any;
	handleDelete: any;
}

interface VerificationCodeValidationBoxProps {
	onCodeComplete: (code: string) => void;
	error?: boolean;
}

interface ModalProps {
	children: React.ReactNode;
	isOpen: boolean;
	onClose?: () => void;
}

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	image: string;
}

interface NotificationListProps {
	children?: React.ReactNode;
}

interface NotificationItem {
	id: string;
	title: string;
	message: string;
	timestamp: Date;
	read: boolean;
}

interface NotificationItemProps {
	item: NotificationItem;
	onClick?: (id: string) => void;
}

interface NotificationItemComponent {
	(props: NotificationItemProps): JSX.Element;
}

interface TabItemProps {
	text: string;
	href?: string;
	color?: string;
}

interface SettingsCardProps {
	title: string;
	icon: React.ReactNode;
	link?: string;
}

interface TabProps {
	text: string;
	href: string;
}

interface TabMenuProps {
	tabs: TabProps[];
	color?: string;
}

interface template {
	image: string;
	active: boolean;
	onClick?: () => void;
}

interface TemplatesProps {
	templates: template[];
}

interface SocialIcons {
	name: string;
	icon: React.ReactNode;
}

interface Link {
	title: string;
	href: string;
	bgColor: string;
	borderColor: string;
	icon: string;
	activeIcon: string;
}
