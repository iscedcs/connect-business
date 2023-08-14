'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import FileUploader from './images/file-uploader';
import NewInput from './input/new-input';
import Button from '../ui/button/button';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';

const EditUserForm = ({ userData }: { userData: UserFormP }) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [formData, setFormData] = React.useState({
		name: userData.name,
		email: userData.email,
		phone: userData.phone,
		gender: userData.gender,
		profile_image: userData.profile_image,
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/edit-profile/personal`, {
				method: 'POST',
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					phone: formData.phone,
					gender: formData.gender,
					profile_image: formData.profile_image,
				}),
			});
			if (response.status === 200) {
				// setConfirmIsLoading(false);
				// setprofileModalOpen(false);
				// setAddSuccess(true);
				// window.location.reload();
				console.log('Saved SUCCESSFULLY');
				setIsLoading(false);
				return NextResponse.json(response);
			} else {
				console.log('something went wrong');
				console.log(response);
				setIsLoading(false);
				return null;
			}
		} catch (error) {
			console.log(error);
		}
		// router.push('admin/settings/edit-services');
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
						image={formData.profile_image}
						folder='profile_images'
						type='circle'
					/>
					<NewInput
						className='w-full'
						type='text'
						label='Full Name'
						name='name'
						value={formData.name}
						onInput={handleChange}
						onChange={handleChange}
					/>
					<NewInput
						className='w-full'
						type='text'
						label='Gender'
						name='gender'
						value={formData.gender}
						onInput={handleChange}
						onChange={handleChange}
					/>
					<NewInput
						className='w-full'
						type='text'
						label='Phone Number'
						name='phone'
						value={formData.phone}
						onInput={handleChange}
						onChange={handleChange}
					/>
					<NewInput
						className='w-full'
						type='text'
						label='Email Address'
						name='email'
						value={formData.email}
						onInput={handleChange}
						onChange={handleChange}
					/>
				</div>
				<div className='mt-3 max-w-lg '>
					<Button
						variant='primary'
						className='w-full'
						isLoading={isLoading}
					>
						Next
					</Button>
				</div>
			</motion.form>
		</AnimatePresence>
	);
};

export default EditUserForm;
