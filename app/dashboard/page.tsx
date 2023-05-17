'use client';
import Appointment from '@/components/dashboard/appointment';
import Calendar from '@/components/dashboard/calendar';
import DashboardCard from '@/components/dashboard/dashboard-card';
import Header from '@/components/dashboard/header';
import SearchBar from '@/components/dashboard/search-bar';
import React, { Fragment } from 'react';

export default function Dashboard() {
	return (
		<Fragment>
			<Header
				profileImage='/img/avatar.jpeg'
				headerTitle='Dashboard'
				profileName='Da Civic'
				notificationCount={10}
			/>
			{/* <SearchBar /> */}
			<div className='grid grid-cols-12 w-full gap-6 overflow-hidden'>
				<div className='col-span-12 md:col-span-9 overflow-y-scroll'>
					<div className='grid grid-cols-6 gap-6'>
						<DashboardCard
							amount='178'
							newAmount='20'
							description='Total Patronizing Clients'
							newDescription='From last week'
						/>
						<DashboardCard
							amount='64'
							newAmount='20'
							description='Total Non Patronizing Clients'
							newDescription='From last week'
						/>
						<DashboardCard
							amount='200'
							newAmount='20'
							description='Total Connected Clients'
							newDescription='From last week'
						/>
						<DashboardCard
							amount='54'
							newAmount='20'
							description='Total Onboarded Employees'
							newDescription='From last week'
						/>
						<DashboardCard
							amount='178'
							newAmount='20'
							description='Total Appointments'
							newDescription='From last week'
						/>
						<DashboardCard
							amount='56'
							newAmount='20'
							description='Total Invoice'
							newDescription='From last week'
						/>
					</div>
				</div>
				<div className='col-span-12 md:col-span-3 w-full h-full overflow-y-scroll rounded-2xl bg-white border border-gray-200 relative p-3 shadow-mid'>
					<div className='flex flex-col justify-start gap-5'>
						<Calendar
							onSelectDate={(date) => {
								alert('You selected ' + date);
							}}
						/>
						<Appointment />
					</div>
				</div>
			</div>
		</Fragment>
	);
}
