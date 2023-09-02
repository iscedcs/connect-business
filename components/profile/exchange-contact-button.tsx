'use client';
import React, { useState } from 'react';
import Modal from '../shared/layouts/modal';
import AlertModal from '../shared/layouts/alert-modal';
import { ModalCloseIcon } from '@/utils/icons';
import ExchangeContactForm from '../shared/form/exchange-contact-form';
import { CARD_VIEW } from '@/utils/data';

interface Props {}

const ExchangeContactButton = ({}: Props) => {
	const [showEC, setShowEC] = useState<boolean>(false);
	const [showAlert, setShowAlert] = useState<boolean>(false);
	return (
		<>
			<div
				onClick={() => setShowEC(true)}
				className='w-1/2 px-4 text-center py-3 max-w-[300px] text-[10px] bg-black text-white rounded-2xl'
			>
				Exchange Contact
			</div>
			<Modal isOpen={showEC}>
				<div className='rounded-lg max-w-[500px] w-full bg-white h-screen md:h-min shadow-mid relative overflow-hidden'>
					<div className='flex justify-center items-center w-full h-16 border-b text-large font-bold relative'>
						<div
							onClick={() => setShowEC(false)}
							className='w-16 h-16 flex items-center rounded-full absolute left-0 top-0 px-6'
						>
							{<ModalCloseIcon />}
						</div>
						Exchange Contact
					</div>
					<div className='flex flex-col w-full gap-6 md:gap-12 px-4 md:px-10 p-10'>
						<div className='flex flex-col gap-4'>
							<ExchangeContactForm
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
				message={`You have successfully shared your contact with ${CARD_VIEW.user.name}.`}
				title='Contact Shared'
			/>
		</>
	);
};
export default ExchangeContactButton;
