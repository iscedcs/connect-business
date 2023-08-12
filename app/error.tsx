'use client'; // Error components must be Client Components

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className='h-screen text-orange-600 flex flex-col gap-6 items-center justify-center'>
			<h2 className=' text-2xl'>Oooooops!</h2>
			<div className='w-96 text-center'>
				{/* <div className='text-2xl'>{error.name}</div> */}
				<div className=''>{error.message}</div>
			</div>
			<button
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Refresh Page
			</button>
			<Link href={'/admin'}>Go to Dashboard</Link>
		</div>
	);
}
