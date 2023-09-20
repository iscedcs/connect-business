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
	variant: 'primary' | 'secondary' | 'danger' | 'success';
	href?: string;
	onClick?: any;
	isLoading?: boolean;
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
	role?: string;
	business_id?: string;
	deleted?: boolean;
	device_id?: string;
	device_type?: string;
	gender?: 'Male' | 'Female' | 'Not Specified';
	member_id?: string;
	password?: string;
	phone: null;
	waitlist: boolean;
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
	email?: string;
	position?: string;
	deleted?: boolean;
	image?: string;
	onClick?: () => void;
	onDelete?: () => void;
	onOnboard?: () => void;
	waitlist?: boolean;
	index: number;
	role?: string;
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
	handleOnboard?: any;
	role?: string;
}

interface EmployeesProps {}

interface SigninLayoutProps {
	left: React.ReactNode;
	right: React.ReactNode;
}

interface AppointmentListItemProps {
	appointment_id: string;
	attendees?: string[];
	business_id: string;
	createdAt?: string;
	name?: string;
	date: string;
	deleted?: boolean;
	description?: string;
	email: string;
	end_time: string;
	id: string;
	location?: string;
	member_id: string;
	onClick?: () => void;
	onClick?: () => void;
	onDelete?: () => void;
	onEdit?: () => void;
	phone: string;
	showOptions?: boolean;
	start_time: string;
	title: string;
	updatedAt: string;
}

interface CalendarProps {
	onSelectDate?: (date: Date) => void;
	type?: 'small' | 'large';
	appointmentList: AppointmentListItemProps[];
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
	role: string;
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
	type: string;
	icon: string;
	label: string;
	content: string;
}

interface Link {
	title: string;
	href: string;
	bgColor: string;
	borderColor: string;
	icon: string;
	activeIcon: string;
}

declare namespace NodeJS {
	interface ProcessEnv {
		NEXTAUTH_SECRET: string;
		NEXTAUTH_URL: string;
		X_API_KEY: string;
		SECRET_KEY: string;
	}
}

interface resetP {
	email: string;
}

interface CreateBusinessP {
	name: string;
	email: string;
	type: string;
	password: string;
	confirm_password: string;
}

interface addStaffP {
	business_id?: string;
	name: string;
	email: string;
	phone?: string;
	role: string;
	gender?: string;
}

interface NewInputProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	variant?: 'primary' | 'secondary'; // Update with other variants as needed
	type: 'password' | 'email' | 'phone' | 'tel' | 'text';
	hasError?: boolean;
	label?: string;
	errorMessage?: string;
}

interface DashboardDataP {
	data: {
		user: {
			id: number;
			member_id?: string;
			business_id?: string;
			device_id?: string;
			device_type?: string;
			name?: string;
			email?: string;
			password?: string;
			profile_image?: string;
			phone?: string;
			role?: string;
			gender?: string;
			waitlist: false;
			deleted: false;
			createdAt?: string;
			updatedAt?: string;
		};
		business: {
			id: 5;
			business_id?: string;
			base_image?: string;
			name?: string;
			email?: string;
			type?: string;
			phone?: string;
			address?: string;
			website?: string;
			tax_id?: string;
			description?: string;
			details?: string;
			createdAt?: string;
			updatedAt?: string;
		};
		appointments: [];
	};
}

interface AppointmentDataP {
	data: {
		business: {
			id: number | string;
			member_id?: string;
			business_id?: string;
			device_id?: string;
			device_type?: string;
			image?: string;
			gallery?: string[];
			services?: ServiceP[];
			name?: string;
			email?: string;
			password?: string;
			phone?: string;
			role?: string;
			gender?: string;
			waitlist?: boolean;
			deleted?: boolean;
			createdAt?: string;
			updatedAt?: string;
			business_appointments: Array<AppointmentListItemProps>;
		};
	};
}

interface ProfileP {
	business: {
		id: number | string;
		business_id?: string;
		name?: string;
		email?: string;
		type?: string;
		phone?: string;
		address?: string;
		logo?: string;
		gallery?: string[];
		services?: ServiceP[];
		website?: string;
		tax_id?: string;
		description?: string;
		details?: string;
		createdAt?: string;
		updatedAt?: string;
	};
	user: {
		id: number | string;
		member_id?: string;
		business_id?: string;
		device_id?: string;
		device_type?: string;
		name?: string;
		email?: string;
		image?: string;
		password?: string;
		phone?: string;
		role?: string;
		gender?: string;
		waitlist?: boolean;
		deleted?: boolean;
		createdAt?: string;
		updatedAt?: string;
	};
}

interface ServiceP {
	service_id: string;
	title: string;
	description: string;
	image: string;
	link?: string;
}
interface AllServicesP {
	services: ServiceP[];
}

interface ImageP {
	name: string;
	url: string;
	business_id?: string;
	createdAt?: string;
	id?: number | string;
	image_id?: string;
	updatedAt?: string;
}

interface FeatureP {
	business_id?: string;
	content: string;
	createdAt?: string;
	feature_id?: string;
	icon: string;
	id?: number;
	label: string;
	position?: string;
	status?: string;
	type: string;
}
interface Error {
	message: string;
	title: string;
}

interface ProfileFormP {
	name: string;
	profile_image: string;
	logo: string;
	description: string;
	details: string;
	images: ImageP[];
	services: ServiceP[];
	features: FeatureP[];
}

interface BusinessFormP {
	name: string;
	logo: string;
	description: string;
	details: string;
	// images: ImageP[];
	images: ImageP[];
}
interface UserFormP {
	name: string;
	email?: string;
	phone: string;
	profile_image: string;
	gender: string;
}

interface SocialsFormP {
	features: FeatureP[];
}

interface StaffMessageP {
	senderName?: string;
	senderImage?: string;
	time?: string;
	messageSubject?: string;
	messageBody?: string;
}

interface Message {
	type: 'success' | 'error' | 'info';
	message: string;
}

interface CardProfileI {}

interface CardFeatureI {
	id: number;
	feature_id: string;
	business_id: string;
	type: string;
	icon: string;
	label: string;
	content: string;
	position: number;
	status: number;
	createdAt: string;
	updatedAt: string;
}

interface CardImageI {
	business_id: string;
	createdAt: string;
	id: number;
	image_id: string;
	name: string;
	updatedAt: string;
	url: string;
}

interface CardsCardI {
	id: number;
	card_id: string;
	user_id: string;
	theme_id: string;
	theme_color: string;
	card_lang: string;
	cover: string;
	profile: string;
	card_url: string;
	card_type: string;
	title: string;
	sub_title: string;
	description: string;
	card_status: string;
	status: string;
	locked: string;
	created_at: string;
	updated_at: string;
}

interface CardFieldI {
	id: string;
	card_id: string;
	type: string;
	icon: string;
	label: string;
	content: string;
	position: string;
	status: string;
	created_at: string;
	updated_at: string;
}

interface CardServiceI {
	business_id: string;
	created_at: string;
	description: string;
	id: string;
	image: string;
	link?: string;
	service_id: string;
	title: string;
	updatedAt: string;
}

interface UserI {
	id: number;
	member_id: string;
	business_id: string;
	device_id: string;
	device_type: string;
	user_id: string;
	name: string;
	email: string;
	job_title: string;
	job_description: string;
	isExecutive: string;
	password: string;
	profile_image: string;
	phone: string;
	role: string;
	gender: string;
	waitlist: boolean;
	deleted: boolean;
	createdAt: string;
	updatedAt: string;
}

interface CardI {
	card: CardsCardI;
	fields: SocialFieldI[];
	services: CardServiceI[];
	download_url: string;
}

interface BusinessI {
	base_image?: string;
	business_id: string;
	createdAt: string;
	deleted: boolean;
	description: string;
	details: string;
	email: string;
	features: SocialFieldI[];
	id: number;
	images: CardImageI[];
	name: string;
	phone: string;
	services: CardServiceI[];
	settings: string;
	tax_id: string;
	updatedAt: string;
	website: string;
}

interface CardFullDataI {
	business: BusinessI;
	user: UserI;
}

type SocialFieldI = {
	business_id?: string;
	content?: string;
	createdAt?: string;
	feature_id?: string;
	icon?: string;
	id: number | string;
	label: string;
	position?: string;
	status?: string;
	type?: string;
	updatedAt?: string;
};

type OutputObject = Record<string, SocialFieldI[]>;

type LabelToUrlMap = Record<string, (value: string) => string>;
