export interface TextProps {
	color: string;
	type?: string;
	size?: string;
	lineHeight?: string;
	className?: string;
	children: React.ReactNode;
}

export interface TextInputProps {
	label: string;
	value?: string;
	onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	variant?: 'text' | 'password' | 'email' | 'phone';
	className?: string;
	name?: string;
	error?: boolean;
}

export interface ButtonProps {
	size?: 'sm' | 'md' | 'lg';
	children?: React.ReactNode;
	className?: string;
	variant: 'primary' | 'secondary';
	href?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface CheckboxProps {
	checked: boolean;
	onChange?: (checked: boolean) => void;
}

export interface EmployeeDetails {
	id: number;
	name: string;
	email: string;
	position: string;
	image: string;
}
