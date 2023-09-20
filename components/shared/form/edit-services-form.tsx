'use client';
import React, { useState } from 'react';
import ServiceCardLandscape from '../ui/cards/service-card-landscape';
import NewInput from './input/new-input';
import Modal from '@/components/shared/layouts/modal';
import Button from '../ui/button/button';
import FileUploader from './images/file-uploader';
import { NextResponse } from 'next/server';
import AlertModal from '../layouts/alert-modal';

interface MainComponentProps {
	servicesData: ServiceP[];
}

const MainComponent: React.FC<MainComponentProps> = ({ servicesData }) => {
	const [message, setMessage] = React.useState<Message | null>(null);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [services, setServices] = useState<ServiceP[]>(servicesData);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedService, setSelectedService] = useState<ServiceP | null>(
		null
	);
	const [formData, setFormData] = useState<ServiceP>({
		service_id: '',
		title: '',
		description: '',
		image: '',
		link: '',
	});

	const openModalForEdit = (service: ServiceP) => {
		setSelectedService(service);
		setFormData(service);
		setIsModalOpen(true);
	};

	const openModalForAdd = () => {
		setSelectedService(null);
		setFormData({
			service_id: '',
			title: '',
			description: '',
			image: '',
			link: '',
		});
		setIsModalOpen(true);
	};

	const saveService = () => {
		const updatedServices = selectedService
			? services.map((service) =>
					service.service_id === selectedService.service_id
						? formData
						: service
			  )
			: [...services, { ...formData, id: Date.now().toString() }];

		// console.log(formData);
		// console.log(services);
		setServices(updatedServices);
		setIsModalOpen(false);
	};

	const deleteService = (serviceId: number | string) => {
		const updatedServices = services.filter(
			(service) => service.service_id !== serviceId
		);
		setServices(updatedServices);
	};

	const handleImageChange = async (file: any) =>
		setFormData({
			...formData,
			image: file.url,
		});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		// console.log(services);
		try {
			const response = await fetch(`/api/business/services`, {
				method: 'POST',
				body: JSON.stringify({
					services,
				}),
			});
			if (response.status === 200) {
				// setConfirmIsLoading(false);
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

	return (
		<div className='px-4 md:px-10 flex flex-col min-h-[500px] max-w-2xl justify-between gap-4'>
			<div className='flex flex-col gap-4'>
				<div className='w-full'>
					<Button
						variant='success'
						className='shrink-0'
						onClick={openModalForAdd}
					>
						Add New Service
					</Button>
				</div>
				{services.map((service) => (
					<ServiceCardLandscape
						key={service.service_id}
						name={service.title}
						image={service.image}
						link={service.link}
						description={service.description}
						handleClick={() => openModalForEdit(service)}
						handleDelete={() =>
							deleteService(service.service_id)
						}
					/>
				))}
			</div>

			<Button
				variant='primary'
				onClick={handleSubmit}
				className='shrink-0'
				isLoading={isLoading}
			>
				Save Changes
			</Button>
			<Modal isOpen={isModalOpen}>
				<div className='w-[504px] overflow-hidden rounded-xl bg-white shadow-mid'>
					<div className='w-full h-[50px] rounded-tl-xl rounded-tr-xl bg-white border-t-0 border-0 border-b border-l-0 border-[#e0e0e0] relative flex items-center justify-center'>
						<div
							className='absolute left-0 h-full px-5 flex items-center justify-center'
							onClick={() => setIsModalOpen(false)}
						>
							<svg
								width={24}
								height={24}
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='w-6 h-6'
								preserveAspectRatio='xMidYMid meet'
							>
								<path
									d='M5 5L18.9991 18.9991'
									stroke='#000001'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M5.00094 18.9991L19 5'
									stroke='#000001'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							<div className='text-center'>
								{selectedService?.title ||
									'Add New Service'}
							</div>
						</div>
					</div>

					<form
						className='flex flex-col justify-start gap-5 w-full h-full overflow-hidden p-5'
						onSubmit={(e) => {
							e.preventDefault();
							saveService();
						}}
					>
						<NewInput
							className='w-full'
							type='text'
							label='Service Rendered'
							name='services'
							value={formData.title}
							onChange={(e) =>
								setFormData({
									...formData,
									title: e.target.value,
								})
							}
						/>
						<NewInput
							className='w-full'
							type='text'
							label='Service Description'
							name='services'
							value={formData.description}
							onChange={(e) =>
								setFormData({
									...formData,
									description: e.target.value,
								})
							}
						/>
						<NewInput
							className='w-full'
							type='text'
							label='Service Link'
							name='link'
							value={formData.link}
							onChange={(e) =>
								setFormData({
									...formData,
									link: e.target.value,
								})
							}
						/>
						<FileUploader
							handleFile={handleImageChange}
							image={formData.image}
							folder='services_images'
							type='portrait'
							text='Add Service Image'
						/>
						<div className='mt-3 w-full flex gap-5'>
							<Button
								variant='primary'
								className='w-full'
								onClick={saveService}
							>
								Next
							</Button>
						</div>
					</form>
				</div>
			</Modal>
			{message && (
				<AlertModal
					isOpen={!!message}
					type={message.type!}
					onClose={() => setMessage(null)}
					message={message.message}
					title={message.type.toLocaleUpperCase()}
				/>
			)}
		</div>
	);
};

export default MainComponent;
