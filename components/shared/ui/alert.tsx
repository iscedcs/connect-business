'use client';
import React, { useState, useEffect } from 'react';

interface AlertProps {
	message: string;
	type: 'success' | 'info' | 'warning' | 'error';
	icon?: React.ReactNode;
	closable?: boolean;
	onClose?: () => void;
	autoClose?: boolean;
	autoCloseDelay?: number;
	showIcon?: boolean;
	className?: string;
	style?: React.CSSProperties;
	containerStyle?: React.CSSProperties;
	containerClassName?: string;
	isVisible?: boolean;
	shouldAnimate?: boolean;
	animationDuration?: number;
	transitionName?: string;
	dataTestId?: string;
	ariaRole?: string;
	ariaLabel?: string;
	ariaLive?: string;
	onClick?: () => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
	onMouseOver?: () => void;
	onMouseOut?: () => void;
	onFocus?: () => void;
	onBlur?: () => void;
	role?: string;
	id?: string;
	ariaDescribedBy?: string;
	ariaLabelledBy?: string;
	animationType?: string;
	animationOptions?: any; // You can define a specific type for animation options
	persistent?: boolean;
	closeButtonLabel?: string;
	position?: string;
	scrollIntoView?: boolean;
	scrollOptions?: any; // You can define a specific type for scroll options
	isRTL?: boolean;
	maxWidth?: string;
}

const Alert: React.FC<AlertProps> = ({
	message,
	type,
	icon,
	closable = true,
	onClose,
	autoClose = false,
	autoCloseDelay = 5000,
	showIcon = true,
	className,
	style,
	containerStyle,
	containerClassName,
	isVisible = true,
	shouldAnimate = true,
	animationDuration = 300,
	transitionName = 'slide',
	dataTestId,
	ariaRole = 'alert',
	ariaLabel,
	onClick,
	onMouseEnter,
	onMouseLeave,
	onMouseOver,
	onMouseOut,
	onFocus,
	onBlur,
	role,
	id,
	ariaDescribedBy,
	ariaLabelledBy,
	animationType = 'fade',
	animationOptions,
	persistent = false,
	closeButtonLabel = 'Close',
	position = 'top',
	scrollIntoView = true,
	scrollOptions,
	isRTL = false,
	maxWidth = '400px',
}) => {
	const [visible, setVisible] = useState(isVisible);

	useEffect(() => {
		if (autoClose) {
			const timeoutId = setTimeout(() => {
				handleClose();
			}, autoCloseDelay);

			return () => clearTimeout(timeoutId);
		}
	}, [autoClose, autoCloseDelay]);

	const handleClose = () => {
		setVisible(false);
		if (onClose) {
			onClose();
		}
	};

	const alertClasses = `alert ${className}`;
	const containerClasses = `alert-container ${containerClassName}`;
	const iconElement = showIcon && icon && (
		<span className='alert-icon'>{icon}</span>
	);
	const closeIcon = closable && (
		<button
			className='alert-close'
			onClick={handleClose}
		>
			{closeButtonLabel}
		</button>
	);

	return (
		<div
			className={containerClasses}
			style={{ ...containerStyle, maxWidth }}
			data-testid={dataTestId}
		>
			{visible && (
				<div
					className={`${alertClasses} text-xs px-4 py-3 bg-emerald-500 text-white rounded-xl shadow-mid`}
					style={{
						...style,
						animationDuration: `${animationDuration}ms`,
					}}
					data-type={type}
					data-visible={visible}
					data-animation={shouldAnimate ? animationType : 'none'}
				>
					<div
						className={`alert-content flex justify-between items-center ${position} ${
							isRTL ? 'rtl' : 'ltr'
						}`}
						onClick={onClick}
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
						onMouseOver={onMouseOver}
						onMouseOut={onMouseOut}
						onFocus={onFocus}
						onBlur={onBlur}
						role={role}
						id={id}
						aria-describedby={ariaDescribedBy}
						aria-labelledby={ariaLabelledBy}
					>
						<div>
							{iconElement}
							<span className='alert-message'>
								{message}
							</span>
						</div>
						{closeIcon}
					</div>
				</div>
			)}
		</div>
	);
};

export default Alert;
