'use client';

import Appointment from '@/components/admin/appointment/appointment';

export default function Dashboard() {
	return (
		<div className='px-4 md:px-10'>
			<div className='grid grid-cols-12 gap-6 overflow-hidden mt-5'>
				<div className='col-span-12 md:col-span-6 lg:col-span-8 xl:col-span-9 overflow-hidden overflow-y-scroll'>
					<div className='grid grid-cols-12 gap-6'>
						Dashboard
					</div>
				</div>
				<Appointment />
			</div>
		</div>
	);
}
