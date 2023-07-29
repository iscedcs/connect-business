'use client';
import { formatDate, getInitials } from '@/utils/function-helpers';
import React from 'react';
import Modal from '../../layouts/modal';

export default function AppointmentListItem({
	creator,
	title,
	date,
	endDate,
	location,
	description,
	attendees,
}: AppointmentListItemProps) {
	const initials = getInitials(creator);
	const readableDate = formatDate(date);
	const [showSingleAppointment, setShowSingleAppointment] =
		React.useState(false);
	return (
		<>
			<div
				className='flex-grow-0 flex-shrink-0 w-full h-14 overflow-hidden rounded-xl bg-gray-200/[0.84]'
				onClick={() => setShowSingleAppointment(true)}
			>
				<div className='flex justify-start items-start px-3 py-2 gap-3'>
					<div className='flex flex-grow-0 flex-shrink-0 w-10 h-10 relative overflow-hidden rounded-full bg-black items-center justify-center'>
						<p className='text-sm font-bold text-center uppercase text-white'>
							{initials}
						</p>
					</div>
					<div className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative w-full'>
						<p className='truncate overflow-hidden text-ellipsis text-tiny lg:text-sm font-bold text-left text-black'>
							{title}
						</p>
						<p className='flex-grow-0 flex-shrink-0 w-full text-[10px] text-left text-[#808080]'>
							{readableDate}
						</p>
					</div>
				</div>
			</div>
			{showSingleAppointment && (
				<Modal isOpen={showSingleAppointment}>
					<div className='bg-white rounded-lg p-10 '>
						<div>
							<strong>Title:</strong> {title}
						</div>
						<div>
							<strong>Creator:</strong> {creator}
						</div>
						<div>
							<strong>Start:</strong>{' '}
							{new Date(date).toString()}
						</div>
						<div>
							<strong>End:</strong>{' '}
							{endDate && new Date(endDate).toString()}
						</div>
						<div>
							<strong>Location:</strong> {location}
						</div>
						<div>
							<strong>Description:</strong> {description}
						</div>
						<div>
							<strong>Attendees:</strong> {attendees}
						</div>
						<button
							onClick={() =>
								setShowSingleAppointment(false)
							}
							className='px-5 py-2 bg-black text-white rounded-lg'
						>
							Close
						</button>
					</div>
				</Modal>
			)}
		</>
	);
}
