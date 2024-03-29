'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import BlurImage from '../shared/ui/blur-image';

export default function DashboardCard({
	amount,
	newAmount,
	description,
	newDescription,
	href,
}: DashboardCardProps) {
	const [isHovered, setIsHovered] = React.useState(false);

	const cardVariants = {
		hover: {
			scale: 1.5,
		},
	};

	const imageVariants = {
		hover: {
			scale: 1.5,
		},
	};

	const textVariants = {
		initial: {
			opacity: 1,
			y: 0,
		},
		hover: {
			opacity: 1,
			y: 20,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<motion.div
			className='col-span-12 lg:col-span-6 xl:col-span-4 w-full min-h-[240px] relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:shadow-mid transition-all duration-500'
			id='dashboard-card'
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			onClick={() => {}}
			variants={cardVariants}
		>
			<Link href={href ? href : ''}>
				<div className='flex justify-center items-center px-2 py-10'>
					<motion.div
						className='flex flex-col items-center justify-center gap-6'
						variants={imageVariants}
						transition={{ duration: 0.5 }}
					>
						<div
							className={`w-[134px] h-[71px] ${
								isHovered
									? 'scale-150 transition-all duration-500'
									: ''
							} `}
						>
							<BlurImage
								src={'/img/curve.png'}
								width={134}
								height={71}
								alt=''
								className='h-full w-full object-center'
							/>
						</div>
						<motion.div
							className='flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2'
							variants={textVariants}
							initial='initial'
							animate={isHovered ? 'hover' : 'initial'}
						>
							<p
								className={`flex-grow-0 flex-shrink-0 w-[88px] h-7 text-2xl font-bold text-center ${
									isHovered
										? 'text-green-500'
										: 'text-black'
								}`}
							>
								{isHovered ? newAmount + '+' : amount}
							</p>
							<p className='flex-grow-0 flex-shrink-0 w-full text-base text-center text-black'>
								{isHovered
									? newDescription
									: description}
							</p>
						</motion.div>
					</motion.div>
				</div>
			</Link>
		</motion.div>
	);
}
