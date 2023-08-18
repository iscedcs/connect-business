'use client';
import ServiceCard from '@/components/profile/service-card';
import ExchangeContactForm from '@/components/shared/form/exchange-contact-form';
import AlertModal from '@/components/shared/layouts/alert-modal';
import Modal from '@/components/shared/layouts/modal';
import Button from '@/components/shared/ui/button/button';
import { CARD_VIEW } from '@/utils/data';
import {
	modalCloseIcon,
	modalFailureIcon,
	modalInfoIcon,
	modalSuccessIcon,
} from '@/utils/icons';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function Connect() {
	const params = useSearchParams();
	const m = params.get('m');
	return (
		<>
			<div className='w-screen flex flex-col justify-start py-2 lg:justify-center md:flex-row flex-wrap md:flex-nowrap h-[160px] md:h-fit gap-3 md:gap-5 overflow-x-scroll px-4 lg:px-10'>
				{CARD_VIEW.socials.map((social, i) => (
					<Link
						key={i}
						href={social.link}
						className='hover:scale-105 transition-all h-16 w-16 md:h-24 md:w-24'
						style={{ color: CARD_VIEW.user.theme }}
					>
						{social.svg}
					</Link>
				))}
			</div>
			<div className='flex flex-col gap-4 w-full'>
				<p className='font-bold'>Our Service</p>
				<div className='flex gap-3 flex-nowrap overflow-x-scroll pb-5 w-full'>
					{CARD_VIEW.services.map((service, k) => (
						<ServiceCard
							key={k}
							image={service.image}
							title={service.title}
							description={service.description}
							link={service.link}
						/>
					))}
				</div>
			</div>
			<div className='fixed h-20 px-4  bottom-0 left-0 w-full flex gap-2 md:gap-10 justify-center items-center'>
				<div className='w-1/2 px-4 text-center py-3 max-w-[300px] text-[10px] bg-black text-white rounded-2xl'>
					Save Contact
				</div>
				<Link
					href={'/profile?m=ec'}
					className='w-1/2 px-4 text-center py-3 max-w-[300px] text-[10px] bg-black text-white rounded-2xl'
				>
					Exchange Contact
				</Link>
			</div>
			<Modal isOpen={m === 'ec'}>
				<div className='rounded-lg max-w-[500px] w-full bg-white h-screen md:h-min shadow-mid relative overflow-hidden'>
					<div className='flex justify-center items-center w-full h-16 border-b text-large font-bold relative'>
						<Link
							href={'/profile?m=n'}
							className='w-16 h-16 flex items-center rounded-full absolute left-0 top-0 px-6'
						>
							{modalCloseIcon}
						</Link>
						Exchange Contact
					</div>
					<div className='flex flex-col w-full gap-6 md:gap-12 px-4 md:px-10 p-10'>
						<div className='flex flex-col gap-4'>
							<ExchangeContactForm />
						</div>
					</div>
				</div>
			</Modal>
			<AlertModal isOpen={m === 's'}>
				<div className='rounded-t-3xl max-w-[500px] w-full bg-white md:h-min shadow-mid relative overflow-hidden'>
					<div className='flex justify-center items-center w-full h-16 text-large font-bold relative'>
						<Link
							href={'/profile?m=n'}
							className='w-16 h-16 flex items-center rounded-full absolute left-0 top-0 px-6'
						>
							{modalCloseIcon}
						</Link>
						Appointment Booked
					</div>
					<div className='flex flex-col w-full gap-6 md:gap-12 px-4 md:px-10 p-10'>
						<div className='flex flex-col gap-4'>
							<div className='h-[132px] w-[132px] mx-auto text-green-700'>
								{modalSuccessIcon}
							</div>
							<div className=''>
								We have received your booking and will
								contact you shortly, thank you for
								choosing us.
							</div>
							<Button
								variant='primary'
								href='/profile?m=n'
							>
								OK
							</Button>
						</div>
					</div>
				</div>
			</AlertModal>
		</>
	);
}
