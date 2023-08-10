'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import FileUploader from './images/file-uploader';
import NewInput from './input/new-input';
import MultipleImagesUploader from './images/image-uploader';
import Button from '../ui/button/button';
import { useRouter } from 'next/navigation';

const EditBusinessForm = ({
	businessData,
}: {
	businessData: BusinessFormP;
}) => {
	const router = useRouter();
	const [formData, setFormData] = React.useState({
		name: businessData.name,
		logo: businessData.logo,
		profile_image: businessData.profile_image,
		description: businessData.description,
		details: businessData.details,
		images: businessData.images,
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push('admin/settings/edit-services');
	};

	const handleprofileImage = async (file: any) => {
		const updatedFormData = { ...formData };
		updatedFormData.profile_image = file.url;
		setFormData(updatedFormData);
	};

	const handleBusinessLogo = async (file: any) => {
		const updatedFormData = { ...formData };
		updatedFormData.logo = file.url;
		setFormData(updatedFormData);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(formData);
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
						handleFile={handleprofileImage}
						folder='profile_images'
						type='circle'
					/>
					<FileUploader
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
					>
						Next
					</Button>
				</div>
			</motion.form>
		</AnimatePresence>
	);
};

export default EditBusinessForm;
