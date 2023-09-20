'use client';
import React from 'react';
import styles from './button.module.css';
import Link from 'next/link';

export default function Button({
	children,
	className,
	variant,
	onClick,
	href,
	isLoading,
}: ButtonProps) {
	const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
		const target = e.target;
		if (target instanceof HTMLElement) {
			const trail = document.createElement('div');
			trail.classList.add(
				styles.trail,
				`${variant === 'secondary' ? 'bg-black' : 'bg-white'}`,
				'h-2.5',
				'w-2.5',
				'rounded-full',
				'blur',
				'absolute',
				'z-50'
			);
			trail.style.top = e.clientY + 'px';
			trail.style.left = e.clientX + 'px';
			target.appendChild(trail);

			// Calculate the boundaries of the button
			const rect = target.getBoundingClientRect();
			const boundaries = {
				top: rect.top + window.pageYOffset,
				right: rect.right + window.pageXOffset,
				bottom: rect.bottom + window.pageYOffset,
				left: rect.left + window.pageXOffset,
			};

			// Update the trail position if it exceeds the boundaries
			const updateTrailPosition = () => {
				const trailRect = trail.getBoundingClientRect();
				const isOutsideBoundaries =
					trailRect.top < boundaries.top ||
					trailRect.right > boundaries.right ||
					trailRect.bottom > boundaries.bottom ||
					trailRect.left < boundaries.left;
				if (isOutsideBoundaries) {
					trail.remove();
				} else {
					requestAnimationFrame(updateTrailPosition);
				}
			};

			requestAnimationFrame(updateTrailPosition);
			setTimeout(() => {
				trail.remove();
			}, 500);
		}
	};

	const getButtonStyles = () => {
		const defaultClasses = { href }
			? 'px-8 py-3 xl:py-3 font-bold capitalize rounded-3xl text-small xl:text-regular overflow-hidden'
			: 'min-w-min px-8 py-2 xl:py-3 font-bold capitalize rounded-3xl text-small xl:text-regular overflow-hidden';
		const pri = 'text-white bg-black';
		const sec = 'text-black border border-white';
		const dang = 'text-white bg-red-600';
		const suc = 'text-white bg-green-600';

		switch (variant) {
			case 'primary':
				return `${defaultClasses} ${pri} ${className || ''}`;
			case 'secondary':
				return `${defaultClasses} ${sec} ${className || ''}`;
			case 'danger':
				return `${defaultClasses} ${dang} ${className || ''}`;
			case 'success':
				return `${defaultClasses} ${suc} ${className || ''}`;
			default:
				return `${defaultClasses} ${className || ''}`;
		}
	};
	return href ? (
		<div className={getButtonStyles()}>
			<Link
				className={'w-full h-full flex justify-center items-center'}
				href={href}
				onMouseMove={handleMouseMove}
			>
				{isLoading ? (
					<div className='flex justify-center items-center w-full'>
						<svg
							className='animate-spin h-6 w-6'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							strokeWidth={1.5}
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
							/>
						</svg>
					</div>
				) : (
					children
				)}
			</Link>
		</div>
	) : (
		<button
			className={getButtonStyles()}
			onClick={onClick}
			onMouseMove={handleMouseMove}
			disabled={isLoading}
		>
			{isLoading ? (
				<div
					className='flex justify-center items-center w-full'
					onMouseMove={handleMouseMove}
				>
					<svg
						className='animate-spin h-6 w-6'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						strokeWidth={1.5}
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
						/>
					</svg>
				</div>
			) : (
				children
			)}
		</button>
	);
}
