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
		<div className='h-screen text-orange-600 flex flex-col items-center justify-center'>
			<h2>Something went wrong!</h2>
			<button
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Try again
			</button>
			<Link href={'/admin'}>Go to Dashboard</Link>
		</div>
	);
}
