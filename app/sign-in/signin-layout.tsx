import React, { Fragment } from 'react';

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
