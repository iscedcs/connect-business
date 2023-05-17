import React, { ReactNode, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { DropdownProps } from '@/utils/types';

export default function Dropdown({ isOpen, items, onClose }: DropdownProps) {
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				onClose(); // Close the dropdown when clicking outside
			}
		}

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [onClose]);

	const handleItemClick = () => {
		onClose(); // Close the dropdown when an item is clicked
	};

	return (
		<div className='relative'>
			{isOpen && (
				<motion.div
					ref={dropdownRef}
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.2 }}
					className='absolute -top-36 right-4 w-[136px] rounded-lg bg-[#fffffe] border-[0.5px] border-[#e0e0e0] shadow-mid'
				>
					<div className='flex flex-col'>
						{items.map((item, index) => (
							<div
								key={index}
								onClick={() => {
									item.onClick?.();
									handleItemClick();
								}}
								className={`flex justify-start items-center flex-grow-0 flex-shrink-0 w-full relative gap-2 p-2 rounded bg-[#fffffe] hover:bg-[#f0f0f0] ${item.color}`}
							>
								{item.link ? (
									<Link
										href={item.link}
										className='flex-grow-0 flex-shrink-0'
									>
										{item.icon}
									</Link>
								) : (
									item.icon
								)}
								<p
									className={`flex-grow-0 flex-shrink-0 text-sm font-light text-left`}
								>
									{item.title}
								</p>
							</div>
						))}
					</div>
				</motion.div>
			)}
		</div>
	);
}
