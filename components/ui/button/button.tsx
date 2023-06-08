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
}: ButtonProps) {
	const handleMouseMove = (
		e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
	) => {
		const target = e.target;
		if (
			target instanceof HTMLButtonElement ||
			target instanceof HTMLAnchorElement
		) {
			const trail = document.createElement('div');
			trail.classList.add(
				styles.trail,
				// variant === 'primary' ? 'bg-white' : 'bg-black',
				'bg-white',
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
		const sec = 'text-white border border-white';

		switch (variant) {
			case 'primary':
				return `${defaultClasses} ${pri} ${className || ''}`;
			case 'secondary':
				return `${defaultClasses} ${sec} ${className || ''}`;
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
				{children}
			</Link>
		</div>
	) : (
		<button
			className={getButtonStyles()}
			onClick={onClick}
			onMouseMove={handleMouseMove}
		>
			{children}
		</button>
	);
}
