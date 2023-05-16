'use client';
import React from 'react';
import styles from './text-input.module.css';
import Image from 'next/image';
import { TextInputProps } from '@/utils/types';

function TextInput({
	label,
	value,
	onBlur,
	variant,
	className,
	name,
	error,
	onInput,
}: TextInputProps) {
	const [isValueEmpty, setIsValueEmpty] = React.useState(false);
	const [inputType, setInputType] = React.useState<string>(
		variant === 'password'
			? 'password'
			: variant === 'email'
			? 'email'
			: variant === 'phone'
			? 'tel'
			: 'text'
	);
	const [show, setShow] = React.useState(false);
	const defaultClasses = `px-[15px] pt-3 h-12 align-bottom xl:h-14 xl:text-base w-full border ${
		error ? 'border-red-500' : 'border-gray-100'
	} rounded-md focus:outline-none ${
		error
			? 'focus:ring-red-500 focus:border-red-500'
			: 'focus:ring-gray-500 focus:border-gray-500'
	} text-sm bg-gray-100/20`;

	const handleChange = (event: React.FocusEvent<HTMLInputElement>) => {
		if (event.target.value === '') {
			setIsValueEmpty(false);
		} else {
			setIsValueEmpty(true);
		}
	};
	return (
		<div
			className={`${styles.inputBox} relative flex flex-col w-full h-12 xl:h-14 rounded-xl bg-gray-100/30 text-gray-400`}
		>
			<input
				className={`${styles.input} ${defaultClasses} ${className}`}
				type={inputType}
				onChange={handleChange}
				value={value}
				onBlur={onBlur}
				name={name}
				spellCheck={false}
				data-ms-editor={true}
				id={name}
				onInput={onInput}
			/>
			<label
				className={`${styles.label} absolute ${
					isValueEmpty
						? 'top-0 text-[0.75rem]'
						: 'top-[calc(50%-0.5rem)] xl:top-[calc(50%-0.75rem)'
				}   text-gray-400 left-4 transition-all duration-200 ease-in-out`}
				htmlFor={name}
			>
				{label}
			</label>
			{variant === 'password' && (
				<button
					className='absolute hover:scale-110 right-4 top-[calc(50%-12px)]'
					onClick={(e) => {
						e.preventDefault();
						if (show === true) {
							setShow(false);
							setInputType('password');
						} else {
							setShow(true);
							setInputType('text');
						}
					}}
				>
					{show ? (
						<div className='w-6 h-6'>
							<Image
								src='/icons/show.svg'
								width={24}
								height={24}
								alt='show password'
							/>
						</div>
					) : (
						<div className='w-6 h-6'>
							<Image
								src='/icons/hide.svg'
								width={24}
								height={24}
								alt='hide password'
							/>
						</div>
					)}
				</button>
			)}
		</div>
	);
}

export default TextInput;
