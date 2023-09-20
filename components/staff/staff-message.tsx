'use client';
import React from 'react';
import BlurImage from '../shared/ui/blur-image';
import Button from '../shared/ui/button/button';
import Modal from '../shared/layouts/modal';

const StaffMessage = ({
	senderName = 'Sender Name',
	senderImage = '/img/3.jpeg',
	time = '12:00 PM',
	messageBody = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nam et iure, unde sapiente nisi quidem, quisquam quibusdam suscipit facere distinctio libero sit provident facilis quo, incidunt eius accusantium ab.`,
	messageSubject = `Message Subject`,
}: StaffMessageP) => {
	const [showMessage, setShowMessage] = React.useState<boolean>(false);
	return (
		<>
			<div
				className='flex cursor-pointer w-full'
				onClick={() => setShowMessage(true)}
			>
				<div className='h-12 w-12 rounded-full flex-grow-0 flex-shrink-0 overflow-hidden'>
					<BlurImage
						height={50}
						width={50}
						alt=''
						className='w-full h-full object-cover object-center'
						src={senderImage}
					/>
				</div>
				<div className='flex flex-col items-between justify-between pl-3 lg:pl-5 w-[calc(100%-48px)]'>
					<div className='flex justify-between items-start w-full'>
						<p className='text-sm lg:text-base flex-grow-0 flex-shrink-0 font-bold text-black'>
							{senderName}
						</p>
						<p className='flex-grow-0 flex-shrink-0 text-[10px] text-right text-gray-400'>
							{time}
						</p>
					</div>
					<div className='text-gray-800 text-xs lg:text-sm truncate '>
						<span className='font-bold uppercase'>
							{messageSubject}:{' '}
						</span>
						{messageBody}
					</div>
				</div>
			</div>
			<Modal isOpen={showMessage}>
				<div className='bg-white rounded-lg w-[600px] shadow-mid'>
					<div className='flex justify-center items-center w-full h-16 border-b text-large font-bold relative'>
						<button
							onClick={() => setShowMessage(false)}
							className='w-16 h-16 rounded-full absolute left-0 top-0 px-6'
						>
							<svg
								width={24}
								height={24}
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								preserveAspectRatio='none'
							>
								<path
									d='M5 5L18.9991 18.9991'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M5.00094 18.9991L19 5'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
						Profile
					</div>
					<div className='flex flex-col w-full gap-6 md:gap-12 px-4 md:px-10 pt-4 pb-10'>
						<div className='mx-auto'>
							<div className='flex flex-col justify-center items-center gap-4 cursor-pointer'>
								<div className='bg-black text-white text-4xl p-[2px] h-[90px] md:h-[120px] w-[90px] md:w-[120px] rounded-full overflow-hidden flex items-center justify-center'>
									<BlurImage
										height={120}
										width={120}
										alt=''
										className='w-full h-full object-cover object-center'
										src={senderImage}
									/>
								</div>
								<div className='flex flex-col justify-center items-center flex-grow-0 flex-shrink-0'>
									<p className='w-full text-lg md:text-xl font-bold text-center text-[#000001]'>
										{senderName}
									</p>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-4'>
							<div className='flex flex-col justify-center items-center gap-6'>
								<div className='w-full border-b pb-3 flex justify-between text-sm gap-2'>
									<div className=''>Subject</div>
									<div className='font-semibold max-w-sm text-right'>
										{messageSubject}
									</div>
								</div>
								<div className='w-full pb-3 flex justify-between text-xs lg:text-sm gap-2'>
									<div className=''>
										{messageBody}
									</div>
								</div>
							</div>

							<div className='flex justify-evenly'>
								<Button
									variant='primary'
									className='w-full text-white capitalize px-5 py-2 rounded-full text-[10px] lg:text-base font-semibold bg-black'
									onClick={() =>
										setShowMessage(false)
									}
								>
									Close
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default StaffMessage;
