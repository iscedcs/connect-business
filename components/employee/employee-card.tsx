import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Dropdown from '../ui/dropdown';

export default function EmployeeCard({
	name,
	email,
	position,
	image,
	onClick,
	status,
	onDelete,
}: EmployeeCardProps) {
	const [isHovered, setIsHovered] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleDropdownToggle = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const handleHover = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const variants = {
		hovered: {
			backgroundColor: '#000000',
		},
		initial: {
			backgroundColor: '#ffffff',
		},
	};

	const imageVariants = {
		hovered: {
			scale: 1.2,
		},
		initial: {
			scale: 1,
		},
	};

	const textVariants = {
		hovered: {
			y: 10,
		},
		initial: {
			y: 0,
		},
	};

	const waitlistedDropdownItems: DropdownItem[] = [
		{
			title: 'Profile',
			color: 'text-black',
			onClick: onClick,
			icon: (
				<svg
					width={20}
					height={20}
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-5 h-5 relative'
					preserveAspectRatio='xMidYMid meet'
				>
					<path
						d='M10.1341 9.05835C10.0508 9.05002 9.95078 9.05002 9.85911 9.05835C7.87578 8.99169 6.30078 7.36669 6.30078 5.36669C6.30078 3.32502 7.95078 1.66669 10.0008 1.66669C12.0424 1.66669 13.7008 3.32502 13.7008 5.36669C13.6924 7.36669 12.1174 8.99169 10.1341 9.05835Z'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M5.96758 12.1333C3.95091 13.4833 3.95091 15.6833 5.96758 17.025C8.25924 18.5583 12.0176 18.5583 14.3092 17.025C16.3259 15.675 16.3259 13.475 14.3092 12.1333C12.0259 10.6083 8.26758 10.6083 5.96758 12.1333Z'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			),
		},
		{
			title: 'Confirm',
			color: 'text-black',
			onClick: () => {
				// Handle delete click
			},
			icon: (
				<svg
					width={20}
					height={20}
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-5 h-5 relative'
					preserveAspectRatio='xMidYMid meet'
				>
					<path
						d='M12.0352 15.875L13.3018 17.1417L15.8352 14.6083'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M10.1341 9.05835C10.0508 9.05002 9.95081 9.05002 9.85915 9.05835C7.87581 8.99169 6.30081 7.36669 6.30081 5.36669C6.29248 3.32502 7.95081 1.66669 9.99248 1.66669C12.0341 1.66669 13.6925 3.32502 13.6925 5.36669C13.6925 7.36669 12.1091 8.99169 10.1341 9.05835Z'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M9.99219 18.175C8.47552 18.175 6.96719 17.7917 5.81719 17.025C3.80052 15.675 3.80052 13.475 5.81719 12.1333C8.10885 10.6 11.8672 10.6 14.1589 12.1333'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			),
		},
		{
			title: 'Delete',
			color: 'text-red-500',
			onClick: onDelete,
			icon: (
				<svg
					width={20}
					height={20}
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-5 h-5 relative'
					preserveAspectRatio='xMidYMid meet'
				>
					<path
						d='M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M7.08398 4.14169L7.26732 3.05002C7.40065 2.25835 7.50065 1.66669 8.90898 1.66669H11.0923C12.5007 1.66669 12.609 2.29169 12.734 3.05835L12.9173 4.14169'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M15.7096 7.61676L15.168 16.0084C15.0763 17.3168 15.0013 18.3334 12.6763 18.3334H7.3263C5.0013 18.3334 4.9263 17.3168 4.83464 16.0084L4.29297 7.61676'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M8.60742 13.75H11.3824'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M7.91602 10.4167H12.0827'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			),
		},
	];

	const onboardedDropdownItems: DropdownItem[] = [
		{
			title: 'Profile',
			color: 'text-black',
			onClick: onClick,
			icon: (
				<svg
					width={20}
					height={20}
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-5 h-5 relative'
					preserveAspectRatio='xMidYMid meet'
				>
					<path
						d='M10.1341 9.05835C10.0508 9.05002 9.95078 9.05002 9.85911 9.05835C7.87578 8.99169 6.30078 7.36669 6.30078 5.36669C6.30078 3.32502 7.95078 1.66669 10.0008 1.66669C12.0424 1.66669 13.7008 3.32502 13.7008 5.36669C13.6924 7.36669 12.1174 8.99169 10.1341 9.05835Z'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M5.96758 12.1333C3.95091 13.4833 3.95091 15.6833 5.96758 17.025C8.25924 18.5583 12.0176 18.5583 14.3092 17.025C16.3259 15.675 16.3259 13.475 14.3092 12.1333C12.0259 10.6083 8.26758 10.6083 5.96758 12.1333Z'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			),
		},
		{
			title: 'Delete',
			color: 'text-red-500',
			onClick: onDelete,
			icon: (
				<svg
					width={20}
					height={20}
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-5 h-5 relative'
					preserveAspectRatio='xMidYMid meet'
				>
					<path
						d='M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M7.08398 4.14169L7.26732 3.05002C7.40065 2.25835 7.50065 1.66669 8.90898 1.66669H11.0923C12.5007 1.66669 12.609 2.29169 12.734 3.05835L12.9173 4.14169'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M15.7096 7.61676L15.168 16.0084C15.0763 17.3168 15.0013 18.3334 12.6763 18.3334H7.3263C5.0013 18.3334 4.9263 17.3168 4.83464 16.0084L4.29297 7.61676'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M8.60742 13.75H11.3824'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M7.91602 10.4167H12.0827'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			),
		},
	];

	return (
		<AnimatePresence>
			<motion.div
				className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 w-full min-w-[200px] h-[200px] bg-white rounded-xl cursor-pointer relative'
				onMouseEnter={handleHover}
				onMouseLeave={handleMouseLeave}
				initial='initial'
				animate={isHovered ? 'hovered' : 'initial'}
				exit='initial'
				variants={variants}
				transition={{ duration: 0.5 }}
			>
				<div className='flex-grow-0 flex-shrink-0 w-full h-full relative overflow-hidden border rounded-xl border-[#f2f2f2] p-5'>
					<div className='flex flex-col justify-center items-center gap-2'>
						<motion.div
							initial='initial'
							exit='initial'
							animate={isHovered ? 'hovered' : 'initial'}
							variants={imageVariants}
							transition={{ duration: 0.5 }}
							onClick={onClick}
							className={`h-13 w-13 flex items-center justify-center bg-gradient-to-b rounded-full p-[1.5px] overflow-hidden ${
								isHovered
									? 'from-white/0 to-white/100'
									: 'from-black/0 to-black/100'
							}`}
						>
							{image ? (
								<Image
									src={image || '/icons/profile.svg'}
									height={50}
									width={50}
									alt='avatar'
									className={`w-[50px] h-[50px] object-cover object-center rounded-full bg-white`}
								/>
							) : (
								<div
									className={`w-[50px] h-[50px] flex items-center justify-center rounded-full ${
										isHovered
											? ' bg-black text-white'
											: ' bg-white text-black'
									}`}
								>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M12.1586 10.87C12.0586 10.86 11.9386 10.86 11.8286 10.87C9.44859 10.79 7.55859 8.84 7.55859 6.44C7.55859 3.99 9.53859 2 11.9986 2C14.4486 2 16.4386 3.99 16.4386 6.44C16.4286 8.84 14.5386 10.79 12.1586 10.87Z'
											stroke='currentColor'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M7.15875 14.56C4.73875 16.18 4.73875 18.82 7.15875 20.43C9.90875 22.27 14.4188 22.27 17.1688 20.43C19.5888 18.81 19.5888 16.17 17.1688 14.56C14.4288 12.73 9.91875 12.73 7.15875 14.56Z'
											stroke='currentColor'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</div>
							)}
						</motion.div>
						<motion.div
							initial='initial'
							exit='initial'
							animate={isHovered ? 'hovered' : 'initial'}
							variants={textVariants}
							transition={{ duration: 0.5 }}
							className='flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2'
						>
							<p
								className={`flex-grow-0 flex-shrink-0 w-full text-base font-bold text-center ${
									isHovered
										? 'text-white'
										: 'text-black'
								}`}
							>
								{name}
							</p>
							<p
								className={`flex-grow-0 flex-shrink-0 w-full text-xs text-center ${
									isHovered
										? 'text-white'
										: 'text-black'
								}`}
							>
								{email}
							</p>
							<p
								className={`flex-grow-0 flex-shrink-0 w-full text-xs text-center ${
									isHovered
										? 'text-[#aaaaaa]'
										: 'text-[#555556]'
								}`}
							>
								{position}
							</p>
						</motion.div>
					</div>
					<button
						onClick={handleDropdownToggle}
						className={`w-5 h-5 m-5 absolute right-0 top-0 ${
							isHovered ? 'text-white' : 'text-black'
						}`}
					>
						<svg
							width={20}
							height={20}
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='w-full h-full'
							preserveAspectRatio='xMidYMid meet'
						>
							<path
								d='M8.33398 15.8333C8.33398 16.75 9.08398 17.5 10.0007 17.5C10.9173 17.5 11.6673 16.75 11.6673 15.8333C11.6673 14.9167 10.9173 14.1667 10.0007 14.1667C9.08398 14.1667 8.33398 14.9167 8.33398 15.8333Z'
								stroke='currentColor'
								strokeWidth='1.5'
							/>
							<path
								d='M8.33398 4.16665C8.33398 5.08331 9.08398 5.83331 10.0007 5.83331C10.9173 5.83331 11.6673 5.08331 11.6673 4.16665C11.6673 3.24998 10.9173 2.49998 10.0007 2.49998C9.08398 2.49998 8.33398 3.24998 8.33398 4.16665Z'
								stroke='currentColor'
								strokeWidth='1.5'
							/>
							<path
								d='M8.33398 10C8.33398 10.9167 9.08398 11.6667 10.0007 11.6667C10.9173 11.6667 11.6673 10.9167 11.6673 10C11.6673 9.08335 10.9173 8.33335 10.0007 8.33335C9.08398 8.33335 8.33398 9.08335 8.33398 10Z'
								stroke='currentColor'
								strokeWidth='1.5'
							/>
						</svg>
					</button>
				</div>
				{isDropdownOpen && (
					<Dropdown
						isOpen={isDropdownOpen}
						onClose={handleDropdownToggle}
						items={
							status === 'waitlisted'
								? waitlistedDropdownItems
								: onboardedDropdownItems
						}
					/>
				)}
			</motion.div>
		</AnimatePresence>
	);
}
