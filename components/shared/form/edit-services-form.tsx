'use client';
import React, { useState } from 'react';
import ServiceCardLandscape from '../ui/cards/service-card-landscape';
import NewInput from './input/new-input';
import Modal from '@/components/layouts/modal';
import Button from '../ui/button/button';
import FileUploader from './images/file-uploader';

interface MainComponentProps {
	servicesData: ServiceP[];
}

const MainComponent: React.FC<MainComponentProps> = ({ servicesData }) => {
	const [services, setServices] = useState<ServiceP[]>(servicesData);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedService, setSelectedService] = useState<ServiceP | null>(
		null
	);
	const [formData, setFormData] = useState<ServiceP>({
		id: '',
		name: '',
		description: '',
		image: '',
	});

	const openModalForEdit = (service: ServiceP) => {
		setSelectedService(service);
		setFormData(service);
		setIsModalOpen(true);
	};

	const openModalForAdd = () => {
		setSelectedService(null);
		setFormData({
			id: '',
			name: '',
			description: '',
			image: '',
		});
		setIsModalOpen(true);
	};

	const saveService = () => {
		const updatedServices = selectedService
			? services.map((service) =>
					service.id === selectedService.id ? formData : service
			  )
			: [...services, { ...formData, id: Date.now() }];

		setServices(updatedServices);
		setIsModalOpen(false);
	};

	const deleteService = (serviceId: number | string) => {
		const updatedServices = services.filter(
			(service) => service.id !== serviceId
		);
		setServices(updatedServices);
	};

	const handleImageChange = async (file: any) =>
		setFormData({
			...formData,
			image: file.url,
		});

	return (
		<div className='max-w-2xl px-4 md:px-10 flex flex-col min-h-[500px] justify-between gap-4'>
			<div className='flex flex-col gap-4'>
				<div className='w-64'>
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
						key={service.id}
						name={service.name}
						image={service.image}
						description={service.description}
						handleClick={() => openModalForEdit(service)}
						handleDelete={() => deleteService(service.id)}
					/>
				))}
			</div>

			<Button
				variant='primary'
				className='shrink-0'
			>
				Save Changes
			</Button>
			<Modal isOpen={isModalOpen}>
				<div className='w-[504px] overflow-hidden rounded-xl bg-white shadow-mid'>
					<div className='w-full h-[84px] rounded-tl-xl rounded-tr-xl bg-white border-t-0 border-0 border-b border-l-0 border-[#e0e0e0] relative flex items-center justify-center'>
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
							{selectedService?.name || 'Add New Service'}
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
							value={formData.name}
							onChange={(e) =>
								setFormData({
									...formData,
									name: e.target.value,
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
		</div>
	);
};

export default MainComponent;
