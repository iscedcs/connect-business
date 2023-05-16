import React, { Fragment } from 'react';

interface SigninLayoutProps {
	left: React.ReactNode;
	right: React.ReactNode;
}

export default function SigninLayout({ left, right }: SigninLayoutProps) {
	return (
		<Fragment>
			<div className='mx-auto overflow-hidden grid grid-cols-2'>
				{left}
				{right}
			</div>
		</Fragment>
	);
}
