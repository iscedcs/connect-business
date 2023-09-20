'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import FileUploader from './images/file-uploader';
import NewInput from './input/new-input';
import MultipleImagesUploader from './images/image-uploader';
import Button from '../ui/button/button';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
import AlertModal from '../layouts/alert-modal';

const EditBusinessForm = ({
	businessData,
}: {
	businessData: BusinessFormP;
}) => {
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [message, setMessage] = React.useState<Message | null>(null);
	const router = useRouter();
	const [formData, setFormData] = React.useState({
		name: businessData.name,
		logo: businessData.logo,
		description: businessData.description,
		details: businessData.details,
		images: businessData.images,
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const response = await fetch(`/api/business`, {
				method: 'POST',
				body: JSON.stringify({
					name: formData.name,
					logo: formData.logo,
					description: formData.description,
					details: formData.details,
					images: formData.images,
				}),
			});
			if (response.status === 200) {
				// setConfirmIsLoading(false);
				// setprofileModalOpen(false);
				setMessage({
					type: 'success',
					message: 'Changes Saved Successfully',
				});
				// window.location.reload();
				setIsLoading(false);
				return NextResponse.json(response);
			} else {
				setMessage({
					type: 'error',
					message: 'Could not Save Changes',
				});
				// console.log(response);
				setIsLoading(false);
				return null;
			}
		} catch (error) {
			// console.log(error);
		}
	};

	const handleBusinessLogo = async (file: ImageP) => {
		const updatedFormData = { ...formData };
		updatedFormData.logo = file.url;
		setFormData(updatedFormData);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// console.log(formData);
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleFiles = (newImages: ImageP[]) => {
		const updatedFormData = { ...formData };
		updatedFormData.images = [...updatedFormData.images, ...newImages];
		setFormData(updatedFormData);
	};

	return (
		<>
			<AnimatePresence>
				<motion.form
					key='about'
					initial={{ x: '1000%' }}
					animate={{ x: '0%' }}
					exit={{ x: '-1000%' }}
					transition={{
						type: 'tween',
						duration: 0.5,
					}}
					className='flex flex-col gap-4 mx-5'
					onSubmit={handleSubmit}
				>
					<div className='flex flex-col gap-4 max-w-lg '>
						<FileUploader
							image={formData.logo}
							className=''
							handleFile={handleBusinessLogo}
							folder='business_logo'
							type='landscape'
							text='Add Business Logo'
						/>
						<NewInput
							className='w-full'
							type='text'
							label='Business Name'
							name='name'
							value={formData.name}
							onInput={handleChange}
							onChange={handleChange}
						/>
						<NewInput
							className='w-full'
							type='text'
							label='Business Description'
							name='description'
							value={formData.description}
							onInput={handleChange}
							onChange={handleChange}
						/>
						<NewInput
							className='w-full'
							type='text'
							label='About Business'
							name='details'
							value={formData.details}
							onInput={handleChange}
							onChange={handleChange}
						/>
					</div>
					<MultipleImagesUploader
						handleFiles={handleFiles}
						folder='features_images'
						text='Add Business Images'
						initialImages={formData.images}
					/>
					<div className='mt-3 max-w-lg '>
						<Button
							variant='primary'
							className='w-full'
							isLoading={isLoading}
						>
							Save Changes
						</Button>
					</div>
				</motion.form>
			</AnimatePresence>
			{message && (
				<AlertModal
					isOpen={!!message}
					type={message.type!}
					onClose={() => setMessage(null)}
					message={message.message}
					title={message.type.toLocaleUpperCase()}
				/>
			)}
		</>
	);
};

export default EditBusinessForm;
