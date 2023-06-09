import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function NavBarItem({
	name,
	active = false,
	icon,
	activeIcon,
	href,
}: NavBarItemProps) {
	return (
		<Link href={href}>
			<div
				className={`mb-2 hover:text-blue-500 transition-colors duration-500 flex-grow-0 flex-shrink-0 items-center justify-center flex w-full h-[72px] overflow-hidden text-[#bdbdbd] ${
					active &&
					'bg-white/[0.16] border-t-0 hover:text-white border-r-4 border-b-0 border-l-0 border-white backdrop-blur-xl'
				}`}
			>
				<div className='flex flex-col justify-center items-center gap-2'>
					<div className='flex justify-center items-start flex-grow-0 flex-shrink-0 relative h-6 w-6'>
						<BlurImage
							src={active ? activeIcon : icon}
							height={24}
							width={24}
							alt='dashboard-icon'
						/>
					</div>
					<p className='flex-grow-0 flex-shrink-0 w-[172px] text-sm text-center'>
						{name}
					</p>
				</div>
			</div>
		</Link>
	);
}
