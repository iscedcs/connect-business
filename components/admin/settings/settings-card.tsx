import Link from 'next/link';
import React from 'react';

export default function SettingsCard({ title, icon, link }: SettingsCardProps) {
	return (
		<Link
			href={link!}
			className='flex-grow-0 flex-shrink-0 w-[300px] h-[200px] overflow-hidden rounded-3xl bg-white border border-gray-100 hover:shadow-mid transition-all duration-500'
		>
			<div className='flex flex-col gap-4 justify-center items-center h-full w-full'>
				<div className='text-blue-500'>{icon}</div>
				<p className='flex-grow-0 flex-shrink-0 w-full px-2 text-lg text-center text-black'>
					{title}
				</p>
			</div>
		</Link>
	);
}
