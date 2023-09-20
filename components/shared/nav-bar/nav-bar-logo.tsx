import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBarLogo() {
	return (
		<Link href='/'>
			<div className='w-full h-16 flex items-center justify-center overflow-hidden'>
				<Image
					src='/img/logo_full_black.svg'
					className='invert'
					height={32}
					width={100}
					alt=''
				/>
			</div>
		</Link>
	);
}
