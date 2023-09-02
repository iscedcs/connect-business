'use client';
import { formatDate, getInitials } from '@/utils/function-helpers';
import React, { MouseEventHandler } from 'react';
import Modal from '../../shared/layouts/modal';
import Button from '@/components/shared/ui/button/button';
import {
	AppointmentDeleteIcon,
	AppointmentEditIcon,
	ModalCloseIcon,
} from '@/utils/icons';
import NewInput from '@/components/shared/form/input/new-input';
import EditAppointmentForm from '@/components/shared/form/edit-appointments-form';

export default function AppointmentListItem({
	appointment_id,
	attendees,
	business_id,
	createdAt,
	name,
	date,
	deleted,
	description,
	email,
	end_time,
	id,
	location,
	member_id,
	onClick,
	onDelete,
	onEdit,
	phone,
	showOptions,
	start_time,
	title,
	updatedAt,
}: AppointmentListItemProps) {
	const readableDate = formatDate(date);
	const [showSingleAppointment, setShowSingleAppointment] =
		React.useState(false);
	const [showDelete, setShowDelete] = React.useState(false);
	const [showEdit, setShowEdit] = React.useState(false);
	const handleDelete = () => setShowDelete(true);
	const handleEdit = () => setShowEdit(true);
	return (
		<>
			<div className='flex-grow-0 flex-shrink-0 w-full h-14 overflow-hidden rounded-xl bg-gray-200/[0.84]'>
				<div className='flex justify-between items-center px-3 py-2 gap-3'>
					<div
						className='flex items-center gap-4'
						onClick={() => setShowSingleAppointment(true)}
					>
						<div className='flex flex-grow-0 flex-shrink-0 w-10 h-10 relative overflow-hidden rounded-full bg-black items-center justify-center'>
							<p className='text-sm font-bold text-center uppercase text-white'>
								{getInitials(name || 'Initial Name')}
							</p>
						</div>
						<div className='flex flex-col cursor-pointer relative w-full'>
							<p className='truncate overflow-hidden text-ellipsis text-tiny font-bold text-left text-black'>
								{title}
							</p>
							<p className='w-full text-[10px] text-left text-[#808080]'>
								{`${start_time}, ${readableDate}`}
							</p>
						</div>
					</div>
					{showOptions && (
						<div className='flex gap-4 items-center'>
							<button
								className='flex flex-grow-0 flex-shrink-0 relative'
								onClick={handleDelete}
							>
								{<AppointmentDeleteIcon />}
							</button>
							<button
								className='flex flex-grow-0 flex-shrink-0 relative'
								onClick={handleEdit}
							>
								{<AppointmentEditIcon />}
							</button>
						</div>
					)}
				</div>
			</div>
			<Modal isOpen={showSingleAppointment}>
				<div className='bg-white rounded-lg w-[600px] shadow-mid'>
					<div className='flex justify-center items-center w-full h-16 border-b text-large font-bold relative'>
						<button
							onClick={() =>
								setShowSingleAppointment(false)
							}
							className='w-16 h-16 rounded-full absolute left-0 top-0 px-6'
						>
							{<ModalCloseIcon />}
						</button>
						Profile
					</div>
					<div className='flex flex-col w-full gap-6 md:gap-12 px-4 md:px-10 pt-4 pb-10'>
						<div className='mx-auto'>
							<div className='flex flex-col justify-center items-center gap-4 cursor-pointer'>
								<div className='bg-black text-white text-4xl p-[2px] h-[90px] md:h-[120px] w-[90px] md:w-[120px] rounded-full overflow-hidden flex items-center justify-center'>
									{getInitials(name || 'Creator')}
								</div>
								<div className='flex flex-col justify-center items-center flex-grow-0 flex-shrink-0'>
									<p className='w-full text-lg md:text-xl font-bold text-center text-[#000001]'>
										{name || 'Creator'}
									</p>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-4'>
							<div className='flex flex-col justify-center items-center gap-6'>
								<div className='w-full border-b pb-3 flex justify-between text-xs lg:text-sm gap-2'>
									<div className=''>
										Date and Time
									</div>
									<div className='font-semibold max-w-sm text-right'>
										{`${start_time}, ${formatDate(
											date
										)}`}
									</div>
								</div>
								<div className='w-full border-b pb-3 flex justify-between text-sm gap-2'>
									<div className=''>Service</div>
									<div className='font-semibold max-w-sm text-right'>
										{title}
									</div>
								</div>
								<div className='w-full border-b pb-3 flex justify-between text-sm gap-2'>
									<div className=''>
										Additional Details
									</div>
									<div className='font-semibold max-w-sm text-right'>
										{description}
									</div>
								</div>
								<div className='w-full border-b pb-3 flex justify-between text-sm gap-2'>
									<div className=''>
										Phone Number
									</div>
									<div className='font-semibold max-w-sm text-right'>
										{phone}
									</div>
								</div>
								<div className='w-full border-b pb-3 flex justify-between text-sm gap-2'>
									<div className=''>
										Email Address
									</div>
									<div className='font-semibold max-w-sm text-right'>
										{email}
									</div>
								</div>
							</div>

							<div className='flex justify-evenly'>
								<Button
									variant='primary'
									className='w-full text-white capitalize px-5 py-2 rounded-full text-[10px] lg:text-base font-semibold bg-black'
								>
									Contact Client
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Modal>
			<Modal isOpen={showDelete}>
				<div className='bg-white rounded-lg w-[512px] shadow-mid'>
					<div className='flex justify-center items-center w-full h-16 border-b text-large font-bold relative'>
						<button
							onClick={() => setShowDelete(false)}
							className='w-16 h-16 rounded-full absolute left-0 top-0 px-6'
						>
							{<ModalCloseIcon />}
						</button>
						Delete Appointment
					</div>
					<div className='flex flex-col gap-16 w-full p-10'>
						<div className='flex flex-col gap-3'>
							<div className='flex flex-col justify-center items-center gap-4 cursor-pointer'>
								<svg
									width={132}
									height={132}
									viewBox='0 0 132 132'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='flex-grow-0 flex-shrink-0 w-[132px] h-[132px] relative'
									preserveAspectRatio='xMidYMid meet'
								>
									<rect
										width={132}
										height={132}
										rx={66}
										fill='#BA1A1A'
										fillOpacity='0.12'
									/>
									<path
										d='M66.0013 47.667C55.8996 47.667 47.668 55.8987 47.668 66.0003C47.668 76.102 55.8996 84.3337 66.0013 84.3337C76.103 84.3337 84.3346 76.102 84.3346 66.0003C84.3346 55.8987 76.103 47.667 66.0013 47.667ZM64.6263 58.667C64.6263 57.9153 65.2496 57.292 66.0013 57.292C66.753 57.292 67.3763 57.9153 67.3763 58.667V67.8337C67.3763 68.5853 66.753 69.2087 66.0013 69.2087C65.2496 69.2087 64.6263 68.5853 64.6263 67.8337V58.667ZM67.688 74.0303C67.5963 74.2687 67.468 74.452 67.303 74.6353C67.1196 74.8003 66.918 74.9287 66.698 75.0203C66.478 75.112 66.2396 75.167 66.0013 75.167C65.763 75.167 65.5246 75.112 65.3046 75.0203C65.0846 74.9287 64.883 74.8003 64.6996 74.6353C64.5346 74.452 64.4063 74.2687 64.3146 74.0303C64.223 73.8103 64.168 73.572 64.168 73.3337C64.168 73.0953 64.223 72.857 64.3146 72.637C64.4063 72.417 64.5346 72.2153 64.6996 72.032C64.883 71.867 65.0846 71.7387 65.3046 71.647C65.7446 71.4637 66.258 71.4637 66.698 71.647C66.918 71.7387 67.1196 71.867 67.303 72.032C67.468 72.2153 67.5963 72.417 67.688 72.637C67.7796 72.857 67.8346 73.0953 67.8346 73.3337C67.8346 73.572 67.7796 73.8103 67.688 74.0303Z'
										fill='#BA1A1A'
									/>
								</svg>
							</div>
							<p className='text-center'>
								Are you sure you want to delete this
								appointment?
							</p>
						</div>
						<div className='flex flex-col items-center'>
							<Button
								variant='primary'
								className=' w-48'
								onClick={handleDelete}
							>
								Contact Client
							</Button>
							<Button
								className=' w-48'
								variant='secondary'
								onClick={() => setShowDelete(false)}
							>
								Cancel
							</Button>
						</div>
					</div>
				</div>
			</Modal>
			<Modal isOpen={showEdit}>
				<div className='bg-white rounded-lg w-[500px] shadow-mid'>
					<div className='flex justify-center items-center w-full h-16 border-b text-large font-bold relative'>
						<button
							onClick={() => setShowEdit(false)}
							className='w-16 h-16 rounded-full absolute left-0 top-0 px-6'
						>
							{<ModalCloseIcon />}
						</button>
						Edit Appointment
					</div>
					<div className='flex flex-col w-full gap-6 md:gap-12 px-4 md:px-10 p-10'>
						<div className='flex flex-col gap-4'>
							<div className='mx-auto'>
								<div className='flex flex-col justify-center items-center gap-4 cursor-pointer'>
									<div className='bg-black text-white text-4xl p-[2px] h-[90px] md:h-[120px] w-[90px] md:w-[120px] rounded-full overflow-hidden flex items-center justify-center'>
										{getInitials(
											name || 'Creator'
										)}
									</div>
									<div className='flex flex-col justify-center items-center flex-grow-0 flex-shrink-0'>
										<p className='w-full text-lg md:text-xl font-bold text-center text-[#000001]'>
											{name || 'Creator'}
										</p>
									</div>
								</div>
							</div>
							<EditAppointmentForm
								date={formatDate(date)}
								time={start_time}
								service={title}
								description={description || ''}
								setShowEdit={setShowEdit}
							/>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
}
