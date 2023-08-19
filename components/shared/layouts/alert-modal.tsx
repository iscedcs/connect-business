'use client';
import {
	modalCloseIcon,
	modalFailureIcon,
	modalInfoIcon,
	modalSuccessIcon,
} from '@/utils/icons';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Button from '../ui/button/button';
interface ModalProps {
	type?: 'success' | 'error' | 'info';
	isOpen: boolean;
	onClose?: () => void;
	message?: string;
	title?: string;
}

const AlertModal = ({ isOpen, onClose, type, message, title }: ModalProps) => {
	const modalVariants: Variants = {
		initial: {
			opacity: 0,
			y: 350,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3, // Reduce the duration for smoother animation
				type: 'spring',
				damping: 20,
				stiffness: 200,
			},
		},
		exit: {
			opacity: 0,
			y: 350,
			transition: {
				duration: 0.3,
			},
		},
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					key='modal'
					className='fixed inset-0 flex items-end md:items-center justify-center bg-opacity-20 bg-gray-900 backdrop-filter-[4px] backdrop-blur-sm z-[210]'
					variants={modalVariants}
					initial='initial'
					animate='animate'
					exit='exit'
					onClick={onClose}
				>
					<div className='rounded-t-3xl max-w-[500px] w-full bg-white md:h-min shadow-mid relative overflow-hidden'>
						<div className='flex justify-center items-center w-full h-16 text-large font-bold relative'>
							<button
								onClick={onClose}
								className='w-16 h-16 flex items-center rounded-full absolute left-0 top-0 px-6'
							>
								{modalCloseIcon}
							</button>
							<div>{title}</div>
						</div>
						<div className='flex flex-col w-full gap-6 md:gap-12 px-4 md:px-10 p-10'>
							<div className='flex flex-col gap-4'>
								<div
									className={`h-[132px] w-[132px] mx-auto ${
										type === 'success'
											? 'text-green-600'
											: type === 'error'
											? 'text-red-500'
											: 'text-blue-600'
									}`}
								>
									{type === 'success'
										? modalSuccessIcon
										: type === 'error'
										? modalFailureIcon
										: modalInfoIcon}
								</div>
								<div className=''>{message}</div>
								<Button
									variant='primary'
									onClick={onClose}
								>
									OK
								</Button>
							</div>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default AlertModal;
