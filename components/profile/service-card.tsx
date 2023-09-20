'use client';
import React, { useState } from 'react';
import BlurImage from '../shared/ui/blur-image';
import Link from 'next/link';
import Modal from '../shared/layouts/modal';
import { DoubleRightIcon, ModalCloseIcon } from '@/utils/icons';
import Button from '../shared/ui/button/button';
import BookAppointmentForm from '../shared/form/book-appointments-form';
import AlertModal from '../shared/layouts/alert-modal';

export default function ServiceCard({
	image,
	title,
	description,
	link,
}: {
	image: string;
	title: string;
	description: string;
	link?: string;
}) {
	const [hovered, setHovered] = useState<boolean>(false);
	const [showAlert, setShowAlert] = useState<boolean>(false);
	const [showAppointment, setShowAppointment] = React.useState(false);
	const [serviceIsOpen, setServiceIsOpen] = useState<boolean>(false);

	return (
		<>
			<div
				className='flex-grow-0 flex-shrink-0 w-48 md:w-72 aspect-[3/4] relative bg-white shadow-mid rounded-2xl cursor-pointer overflow-hidden'
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<BlurImage
					src={image}
					height={384}
					width={288}
					alt={title}
					className={`w-48 md:w-72 object-cover object-center transition-all duration-500 ${
						hovered
							? 'h-[90%] rounded-2xl'
							: 'aspect-[5/6] rounded-t-2xl'
					} overflow-hidden`}
				/>
				{link && link !== '' ? (
					<Link
						href={link}
						className={`absolute bottom-0 left-0 w-full flex h-[10%] items-center pl-3 text-left text-sm md:text-xl font-bold overflow-hidden transition-all duration-500`}
					>
						{title}{' '}
						<span
							className={`${
								hovered && 'pl-10'
							} transition-all duration-500`}
						>
							{<DoubleRightIcon />}
						</span>
					</Link>
				) : (
					<div
						className={`absolute bottom-0 left-0 w-full flex h-[10%] items-center pl-3 text-left text-sm md:text-xl font-bold overflow-hidden transition-all duration-500`}
					>
						{title}
					</div>
				)}
				<div
					className={`absolute w-48 md:w-72 aspect-[3/4] transition-all duration-500 left-0 top-0 ${
						hovered ? 'h-[90%] opacity-100' : 'h-0 opacity-0'
					} rounded-2xl bg-black/80`}
				>
					<div className='flex flex-col justify-start items-start w-full absolute left-2 md:left-4 top-3 md:top-10 gap-2 pointer-events-none '>
						<p className='flex-grow-0 flex-shrink-0 w-full text-sm md:text-lg font-bold text-white text-left'>
							{title}
						</p>
						<div className='text-xs md:text-sm'>
							<p className='w-full text-white text-left'>
								{description}
							</p>
						</div>
					</div>
					<button
						className='absolute bottom-0 right-0 w-full  text-white flex text-xs md:text-base  items-center justify-center bg-gradient-to-t from-black via-black to-black/0 h-10'
						onClick={() => setServiceIsOpen(true)}
					>
						View Service
					</button>
				</div>
			</div>
			<Modal isOpen={serviceIsOpen}>
				<div className='rounded-lg max-w-[500px] bg-white h-screen md:h-min shadow-mid relative overflow-hidden'>
					<div className='flex justify-center text-white bg-black/20 items-center w-full h-16 text-large font-bold absolute backdrop-blur-[2px] z-10'>
						<button
							onClick={() => setServiceIsOpen(false)}
							className='w-16 h-16 rounded-full absolute left-0 top-0 px-6'
						>
							{<ModalCloseIcon />}
						</button>
						{title}
					</div>
					<div className='flex flex-col gap-32 h-full'>
						<div className=''>
							<div className='h-[300px] overflow-hidden'>
								<BlurImage
									src={image}
									alt={title}
									height={200}
									width={600}
									className='object-cover object-center h-full w-full'
								/>
							</div>
							<div className='p-3 md:p-5'>
								{description}
							</div>
						</div>
						<div className='p-3 md:p-5 grid'>
							<Button
								onClick={() => {
									setServiceIsOpen(false);
									setShowAppointment(true);
								}}
								variant='primary'
							>
								Book Now
							</Button>
						</div>
					</div>
				</div>
			</Modal>
			<Modal isOpen={showAppointment}>
				<div className='rounded-lg max-w-[500px] w-full bg-white h-screen md:h-min shadow-mid relative overflow-hidden'>
					<div className='flex justify-center items-center w-full h-16 border-b text-large font-bold relative'>
						<button
							onClick={() => setShowAppointment(false)}
							className='w-16 h-16 rounded-full absolute left-0 top-0 px-6'
						>
							{<ModalCloseIcon />}
						</button>
						Book Appointment
					</div>
					<div className='flex flex-col w-full gap-6 md:gap-12 px-4 md:px-10 p-10'>
						<div className='flex flex-col gap-4'>
							<BookAppointmentForm
								service={title}
								setShowAppointment={setShowAppointment}
								setShowAlert={setShowAlert}
							/>
						</div>
					</div>
				</div>
			</Modal>
			<AlertModal
				type='success'
				isOpen={showAlert}
				onClose={() => setShowAlert(false)}
				message='We have received your booking and will contact you shortly, thank you for choosing us.'
				title='Appointment Booked'
			/>
		</>
	);
}
