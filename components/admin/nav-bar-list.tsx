'use client';
import React from 'react';
import NavBarItem from './nav-bar-item';
import { usePathname } from 'next/navigation';

export default function NavBarList({ links }: { links: Link[] }) {
	const pathname = usePathname();
	return (
		<div>
			{links.map((link, i) => (
				<NavBarItem
					key={i}
					name={link.title}
					href={link.href}
					activeIcon={link.activeIcon}
					icon={link.icon}
					active={pathname === link.href}
				/>
			))}
		</div>
	);
}
