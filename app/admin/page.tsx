import Appointment from '@/components/admin/appointment/appointment';
import DashboardCard from '@/components/admin/dashboard-card';
import { COMPANY_PROFILE } from '@/utils/data';
import { getAppointments } from '../lib/server-functions';
import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import StaffAppointment from '@/components/staff/staff-appointments';
import StaffMessages from '@/components/staff/staff-messages';

export default async function Dashboard() {
	const session = await getServerSession(options);
	const data: AppointmentDataP = await getAppointments();
	return (
		<div className='px-4 md:px-10'>
			<div className='grid grid-cols-12 gap-6 overflow-hidden mt-5'>
				<div className='col-span-12 md:col-span-6 lg:col-span-8 xl:col-span-9 overflow-hidden overflow-y-scroll'>
					{session?.user.role === 'admin' ? (
						<div className='grid grid-cols-12 gap-6'>
							{COMPANY_PROFILE.dashboard.map((card) => (
								<DashboardCard
									key={card.id}
									amount={card.amount}
									newAmount={card.newAmount}
									description={card.description}
									newDescription={
										card.newDescription
									}
									href={card.href}
								/>
							))}
						</div>
					) : (
						<>
							<div className='grid-cols-12 flex flex-col border border-gray-200 rounded-2xl p-5 gap-4'>
								<StaffAppointment />
							</div>
							<StaffMessages />
						</>
					)}
				</div>
				<Appointment
					appointments={data.data.business.business_appointments}
				/>
			</div>
		</div>
	);
}
