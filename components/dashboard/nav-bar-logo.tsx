import Image from 'next/image';
import React from 'react';

export default function NavBarLogo() {
	return (
		<div className='w-full h-16 flex items-center justify-center overflow-hidden mb-10'>
			<BlurImage
				src='/img/logo_full_black.svg'
				className='invert'
				height={32}
				width={100}
				alt=''
			/>
		</div>
	);
}
