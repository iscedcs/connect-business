'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import FileUploader from './images/file-uploader';
import NewInput from './input/new-input';
import Button from '../ui/button/button';
import { useRouter } from 'next/navigation';
import ServiceCardLandscape from '../ui/cards/service-card-landscape';

const EditServicesForm = ({
	servicesData,
}: {
	servicesData: ServicesFormP;
}) => {
	const router = useRouter();

	const initialServices = [
		{
			name: 'Service 1',
			description:
				'Description 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quos eum ipsam mollitia odit enim voluptas dignissimos quis nisi ab harum hic, consequuntur eligendi, inventore neque necessitatibus in, rem eveniet? ',
			image: '/img/1.jpeg',
		},
		{
			name: 'Service 2',
			description: 'Description 2',
			image: '/img/2.jpeg',
		},
	];

	const [formData, setFormData] = React.useState({
		services: servicesData.services,
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push('admin/settings/edit-social');
	};

	const handleBusinessLogo = async (file: any) => {
		const updatedFormData = { ...formData };
		// updatedFormData.logo = file.url;
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
				key='services'
				initial={{ x: '1000%' }}
				animate={{ x: '0%' }}
				exit={{ x: '-1000%' }}
				transition={{
					type: 'tween',
					duration: 0.5,
				}}
				className='flex flex-col gap-6 mx-5'
				onSubmit={handleSubmit}
			>
				<div className='flex flex-col relative gap-5 w-[556px]'>
					{/* {formData.services.length > 0 && */}
					{initialServices.length > 0 &&
						// formData.services.map(
						initialServices.map((service, i) => (
							<ServiceCardLandscape
								key={i}
								name={service.name}
								image={service.image}
								description={service.description}
							/>
						))}
					<NewInput
						className='w-full'
						type='text'
						label='Service Rendered'
						name='services'
						// value={formData.name}
						// onInput={handleAboutChange}
					/>
					<NewInput
						className='w-full'
						type='text'
						label='Service Description'
						name='services'
						// value={formData.description}
						// onInput={handleAboutChange}
					/>
					<FileUploader
						handleFile={handleBusinessLogo}
						folder='profile_images'
						type='portrait'
						text='Add Service Image'
					/>
					<div className='mt-3 w-full flex gap-5'>
						<Button
							href='/admin/settings/edit-business'
							variant='primary'
							className='w-full'
						>
							Previous
						</Button>
						<Button
							variant='primary'
							className='w-full'
						>
							Next
						</Button>
					</div>
				</div>
			</motion.form>
		</AnimatePresence>
	);
};

export default EditServicesForm;
