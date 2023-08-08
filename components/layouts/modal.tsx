'use client';
import { AnimatePresence, motion, Variants } from 'framer-motion';

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
	const modalVariants: Variants = {
		initial: {
			opacity: 0,
			y: -350,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.1, // Reduce the duration for smoother animation
				type: 'spring',
				damping: 20,
				stiffness: 200,
			},
		},
		exit: {
			opacity: 0,
			y: -350,
			transition: {
				duration: 0.1,
			},
		},
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					key='modal'
					className='fixed inset-0 flex items-center justify-center bg-opacity-20 bg-gray-900 backdrop-filter-[4px] backdrop-blur-sm p-3 z-[210]'
					variants={modalVariants}
					initial='initial'
					animate='animate'
					exit='exit'
				>
					<div className='inset-0'></div>
					{children}
					{onClose && (
						<button
							className='absolute top-0 right-0 m-4 p-2 text-gray-500'
							onClick={onClose}
							aria-label='Close'
						>
							{/* Add a close button */}X
						</button>
					)}
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
