'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export default function TabItem({ text, href, color }: TabItemProps) {
	const [hovered, setHovered] = useState(false);
	const path = usePathname();
	const active = path === href;
	const themeColor = color ? `${color}` : `#5555ff`;

	return (
		<Link
			href={href ? href : ''}
			className='flex flex-col flex-grow-0 flex-shrink-0 gap-1'
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className={`${active && 'font-extrabold'}`}>{text}</div>
			<div
				className={`h-0.5 ${
					hovered || active ? 'w-full' : 'w-0'
				} transition-all duration-300`}
				style={{ backgroundColor: themeColor }}
			></div>
		</Link>
	);
}
