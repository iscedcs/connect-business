'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export default function TabItem({ text, href }: TabItemProps) {
	const [hovered, setHovered] = useState(false);
	const path = usePathname();
	const active = path === href;

	return (
		<Link
			href={href ? href : ''}
			className='flex flex-col flex-grow-0 flex-shrink-0 gap-1'
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className=''>{text}</div>
			<div
				className={`h-0.5 bg-blue-600 ${
					hovered || active ? 'w-full' : 'w-0'
				} transition-all duration-500`}
			></div>
		</Link>
	);
}
