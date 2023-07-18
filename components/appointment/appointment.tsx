import AppointmentList from './appointment-list';
import { COMPANY_PROFILE } from '@/utils/data';
import Calendar from './calendar';

export default function Appointment() {
	return (
		<div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[504px] overflow-y-scroll rounded-2xl bg-white border border-gray-200 relative p-3 shadow-mid'>
			<div className='flex flex-col justify-start gap-5 mb-5'>
				<Calendar
					type='small'
					appointmentList={COMPANY_PROFILE.appointments}
				/>
			</div>
			<div className='flex flex-col justify-start items-start gap-4'>
				<p className='flex-grow-0 flex-shrink-0 text-base font-bold text-left text-black'>
					Today’s Appointment
				</p>
				<AppointmentList />
			</div>
		</div>
	);
}
