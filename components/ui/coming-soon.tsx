import React from 'react';
import Button from './button/button';

export default function ComingSoon() {
	return (
		<div className='w-full h-full overflow-hidden rounded-2xl bg-white flex flex-col gap-28 items-center justify-center px-4 md:px-10'>
			<p className='text-3xl md:text-[100px] font-bold text-center text-black stroke-orange-500 stroke-1'>
				COMING SOON
			</p>
			<div className='flex flex-col items-center justify-center'>
				<p className='text-base text-center text-black'>
					We’re working tirelessly to bring this feature to you,
					hang in there.
				</p>
				<div className='mt-5'>
					<Button
						variant='primary'
						className='w-72 md:w-96'
						href='/dashboard'
					>
						Go to Dashboard
					</Button>
				</div>
			</div>
		</div>
	);
}
