import Image from 'next/image';
import React, { FC, useState } from 'react';

const NewInput: FC<NewInputProps> = ({
	variant,
	type,
	hasError,
	label,
	className,
	errorMessage,
	...rest
}) => {
	const [showPassword, setShowPassword] = useState(false);

	const toggleShowPassword = () => {
		setShowPassword((prev) => !prev);
	};

	const defaultClasses = `px-[15px] h-full pt-3 align-bottom xl:text-base w-full border ${
		hasError ? 'border-red-500' : 'border-gray-200'
	} rounded-md focus:outline-none ${
		hasError
			? 'focus:ring-red-500 focus:border-red-500'
			: 'focus:ring-gray-500 focus:border-gray-500'
	} text-sm bg-gray-100/20`;

	return (
		<div className='mb-2'>
			<div
				className={`group relative flex flex-col w-full h-12 xl:h-14 rounded-xl`}
			>
				<label
					className={`absolute left-4 transform font-medium text-gray-700 ${
						rest.value !== '' || showPassword
							? 'top-[8px] text-xs -translate-y-1/2'
							: 'top-1/2 -translate-y-1/2'
					} transition-all ${
						rest.value !== '' || showPassword
							? 'text-opacity-100'
							: 'text-opacity-60'
					} group-focus-within:top-[8px] group-focus-within:text-xs group-focus-within:text-opacity-100`}
				>
					{label}
				</label>
				<input
					spellCheck={false}
					type={
						type === 'password'
							? showPassword
								? 'text'
								: 'password'
							: type
					}
					className={`w-full ${defaultClasses} ${className} px-3 py-2 rounded-md ${
						type === 'password' ? 'pr-10' : ''
					}`}
					{...rest}
				/>
				{type === 'password' && (
					<button
						type='button'
						className='absolute hover:scale-110 right-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-600'
						onClick={toggleShowPassword}
					>
						{showPassword ? (
							<div className='w-6 h-6'>
								<Image
									src='/icons/hide.svg'
									width={24}
									height={24}
									alt='hide password'
								/>
							</div>
						) : (
							<div className='w-6 h-6'>
								<Image
									src='/icons/show.svg'
									width={24}
									height={24}
									alt='show password'
								/>
							</div>
						)}
					</button>
				)}
			</div>
			{hasError && (
				<div className='text-xs animate-pulse  text-red-600 w-full text-center'>
					{errorMessage}
				</div>
			)}
		</div>
	);
};

export default NewInput;
