'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import FileUploader from './images/file-uploader';
import NewInput from './input/new-input';
import Button from '../ui/button/button';
import { useRouter } from 'next/navigation';

const EditUserForm = ({ userData }: { userData: UserFormP }) => {
	const router = useRouter();
	const [formData, setFormData] = React.useState({
		name: userData.name,
		profile_image: userData.profile_image,
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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(formData);
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
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
					<NewInput
						className='w-full'
						type='text'
						label='Business Name'
						name='name'
						value={formData.name}
						onInput={handleChange}
						onChange={handleChange}
					/>
				</div>
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

export default EditUserForm;
