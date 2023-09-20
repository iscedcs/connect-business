import React, { Fragment } from 'react';

export default function CustomerView({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Fragment>
			<div className='w-screen p-2 h-screen bg-black relative'>
				<div className='w-full overflow-x-clip overflow-y-scroll rounded-2xl bg-white h-full'>
					{children}
				</div>
			</div>
		</Fragment>
	);
}
