import React from 'react';

export default function NavBarLogout() {
	return (
		<button className='w-full h-[72px] overflow-hidden'>
			<div className='flex flex-col justify-start items-center gap-2 text-white hover:text-blue-500 transition-colors duration-500'>
				<div className='flex justify-center items-start flex-grow-0 flex-shrink-0 relative '>
					<svg
						width={24}
						height={24}
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='flex-grow-0 flex-shrink-0 w-6 h-6 relative'
						preserveAspectRatio='none'
					>
						<path
							d='M8.89844 7.56023C9.20844 3.96023 11.0584 2.49023 15.1084 2.49023H15.2384C19.7084 2.49023 21.4984 4.28023 21.4984 8.75023V15.2702C21.4984 19.7402 19.7084 21.5302 15.2384 21.5302H15.1084C11.0884 21.5302 9.23844 20.0802 8.90844 16.5402'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M15.0011 12H3.62109'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M5.85 8.65039L2.5 12.0004L5.85 15.3504'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
				<p className='flex-grow-0 flex-shrink-0 w-[172px] text-sm text-center'>
					Logout
				</p>
			</div>
		</button>
	);
}
