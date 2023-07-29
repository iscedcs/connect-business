import React from 'react';

export default function ClientItem({
	fullName,
	jobTitle,
	phone,
	email,
}: Partial<Client>) {
	const [hovered, setHovered] = React.useState(false);
	return (
		<div
			className={`grid grid-cols-4 mb-4 py-4 mx-4 shadow-mid rounded-xl ${
				hovered && 'bg-black text-white'
			} transition-colors duration-1000 ease-out`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className='text-sm px-5'>{fullName}</div>
			<div className='text-sm px-5'>{jobTitle}</div>
			<div className='text-sm px-5'>{phone}</div>
			<div className='text-sm px-5'>{email}</div>
		</div>
	);
}
