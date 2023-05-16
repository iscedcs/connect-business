import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EmployeeCardProps {
	name: string;
	email: string;
	position: string;
	image: string;
}

export default function EmployeeCard({
	name,
	email,
	position,
	image,
}: EmployeeCardProps) {
	const [isHovered, setIsHovered] = useState(false);

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

	return (
		<AnimatePresence>
			<motion.div
				className='col-span-3 w-full h-[200px] bg-white rounded-xl cursor-pointer'
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
							className={`h-13 w-13 flex items-center justify-center bg-gradient-to-b rounded-full p-[1.5px] ${
								isHovered
									? 'from-white/0 to-white/100'
									: 'from-black/0 to-black/100'
							}`}
						>
							<Image
								src={image}
								height={50}
								width={50}
								alt='avatar'
								className='w-[50px] h-[50px] object-cover rounded-full'
							/>
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
					<div
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
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}
