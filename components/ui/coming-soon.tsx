import React from 'react';
import Button from './button/button';

export default function ComingSoon() {
	return (
		<div className='w-full h-full overflow-hidden rounded-2xl bg-white flex flex-col gap-32 items-center justify-center'>
			<p className='text-[100px] font-bold text-center text-black stroke-orange-500 stroke-1'>
				COMING SOON
			</p>
			<div className=''>
				<p className='text-base text-center text-black'>
					We’re working tirelessly to bring this feature to you,
					hang in there.
				</p>
				<div className='mt-5'>
					<Button
						variant='primary'
						className='w-96'
					>
						Back
					</Button>
				</div>
			</div>
		</div>
	);
}
