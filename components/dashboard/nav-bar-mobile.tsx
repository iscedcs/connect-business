'use client';
import { NavBarMobileButtonProps } from '@/utils/types';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useEffect, useRef, useState } from 'react';

export default function NavBarMobileButton({
	imageSrc,
	links,
}: NavBarMobileButtonProps) {
	const [clicked, setClicked] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setClicked(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<Fragment>
			<div
				className='fixed bottom-0 right-0 m-5 z-[200]'
				ref={ref}
			>
				<AnimatePresence>
					{clicked && (
						<>
							{links.map(
								(
									{
										title,
										href,
										icon,
										bgColor,
										borderColor,
									},
									i
								) => (
									<Link
										key={i}
										href={href}
									>
										<motion.div
											className={`h-14 w-14 border ${borderColor} ${bgColor} hover:scale-110 flex items-center justify-center rounded-full absolute right-0`}
											initial={{ top: 0 }}
											animate={{
												top: `-${
													i * 4 + 4
												}rem`,
												transition: {
													duration: 0.3,
													delay:
														i * 0.05,
												},
											}}
											exit={{ top: 0 }}
											title={title}
										>
											<Image
												src={icon}
												height={24}
												width={24}
												alt='Profile Image'
												className='object-cover object-center h-6 w-6 '
											/>
										</motion.div>
									</Link>
								)
							)}
						</>
					)}
				</AnimatePresence>

				<div
					className='md:hidden overflow-hidden h-14 w-14 rounded-full hover:scale-110 transition-all'
					onClick={() => {
						setClicked(!clicked);
					}}
				>
					<Image
						src={imageSrc}
						height={80}
						width={80}
						alt='Profile Image'
						className='object-cover object-center'
					/>
				</div>
			</div>
		</Fragment>
	);
}