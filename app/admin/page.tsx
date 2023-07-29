'use client';

import Appointment from '@/components/admin/appointment/appointment';
import DashboardCard from '@/components/admin/dashboard-card';
import SearchBar from '@/components/admin/search-bar';
import { COMPANY_PROFILE } from '@/utils/data';

export default function Dashboard() {
	return (
		<div className='px-4 md:px-10'>
			<SearchBar showAddEmployee />
			<div className='grid grid-cols-12 gap-6 overflow-hidden mt-5'>
				<div className='col-span-12 md:col-span-6 lg:col-span-8 xl:col-span-9 overflow-hidden overflow-y-scroll'>
					<div className='grid grid-cols-12 gap-6'>
						{COMPANY_PROFILE.dashboard.map((card) => (
							<DashboardCard
								key={card.id}
								amount={card.amount}
								newAmount={card.newAmount}
								description={card.description}
								newDescription={card.newDescription}
								href={card.href}
							/>
						))}
					</div>
				</div>
				<Appointment />
			</div>
		</div>
	);
}
