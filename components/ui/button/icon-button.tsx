import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	notificationCount?: string | number | undefined;
	href?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
	children,
	notificationCount,
	href,
	...buttonProps
}) => {
	if (href) {
		return (
			<Link
				href={href}
				className='h-12 w-12 rounded-full flex items-center justify-center hover:bg-gray-200 relative'
			>
				<span className='sr-only'>{children}</span>
				{children}
				{notificationCount && (
					<span className='absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 text-[12px] text-center rounded-full text-white bg-red-600 h-5 w-5 flex items-center justify-center'>
						{notificationCount}
					</span>
				)}
			</Link>
		);
	}

	return (
		<button
			className='h-12 w-12 rounded-full flex items-center justify-center hover:bg-gray-200 relative'
			{...buttonProps}
		>
			<span className='sr-only'>{children}</span>
			{children}
			{notificationCount && (
				<span className='absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 text-[12px] text-center rounded-full text-white bg-red-600 h-5 w-5 flex items-center justify-center'>
					{notificationCount}
				</span>
			)}
		</button>
	);
};

export default IconButton;
