'use client';
import React from 'react';
import styles from './text-input.module.css';

function TextAreaInput({
	label,
	value,
	onBlur,
	className,
	name,
	error,
	onInput,
	placeholder,
}: TextAreaProps) {
	const [isValueEmpty, setIsValueEmpty] = React.useState(false);
	const defaultClasses = `px-[15px] pt-4 align-bottom xl:text-base w-full border ${
		error ? 'border-red-500' : 'border-gray-100'
	} rounded-md focus:outline-none ${
		error
			? 'focus:ring-red-500 focus:border-red-500'
			: 'focus:ring-gray-500 focus:border-gray-500'
	} text-sm bg-gray-100/20`;

	const handleChange = (event: React.FocusEvent<HTMLTextAreaElement>) => {
		if (event.target.value === '') {
			setIsValueEmpty(false);
		} else {
			setIsValueEmpty(true);
		}
	};
	return (
		<div
			className={`${styles.inputBox} relative flex flex-col w-full rounded-xl bg-gray-100/30 text-gray-400`}
		>
			<textarea
				className={`${styles.input} ${defaultClasses} ${className}`}
				onChange={handleChange}
				value={value}
				onBlur={onBlur}
				name={name}
				spellCheck={false}
				data-ms-editor={true}
				id={name}
				onInput={onInput}
				rows={4}
				placeholder={placeholder}
			/>
			<label
				className={`${styles.label} absolute top-0 text-[0.75rem] text-gray-500 left-4 transition-all duration-200 ease-in-out`}
				htmlFor={name}
			>
				{label}
			</label>
		</div>
	);
}

export default TextAreaInput;
