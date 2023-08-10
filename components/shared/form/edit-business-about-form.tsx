'use client';
import TextInput from '@/components/shared/form/input/text-input';
import TextAreaInput from '@/components/shared/form/input/textarea-input';
import Modal from '@/components/layouts/modal';
import Button from '@/components/shared/ui/button/button';
import IconButton from '@/components/shared/ui/button/icon-button';
import { SOCIAL_ICONS } from '@/utils/data';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { Fragment } from 'react';
import NewInput from '@/components/shared/form/input/new-input';
import FileUploader from '@/components/shared/form/images/file-uploader';
import MultipleImagesUploader from '@/components/shared/form/images/image-uploader';
import ServiceCardLandscape from '../ui/cards/service-card-landscape';

type EditProfileStage = 'about' | 'services' | 'contact';
type SocialIconType =
	| 'facebook'
	| 'phone'
	| 'email'
	| 'twitter'
	| 'linkedin'
	| 'youtube'
	| 'whatsapp'
	| 'instagram'
	| null;

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
	// ... other services
];

export default function EditProfileform({
	profileData,
}: {
	profileData: ProfileFormP;
}) {
	const router = useRouter();
	const [state, setState] = React.useState<EditProfileStage>('about');

	const handleFiles = (newImages: ImageP[]) => {
		const updatedFormData = { ...formData };
		updatedFormData.images = [...updatedFormData.images, ...newImages];
		setFormData(updatedFormData);
	};

	const handleBusinessLogo = async (file: any) => {
		const updatedFormData = { ...formData };
		updatedFormData.logo = file.url;
		setFormData(updatedFormData);
	};

	const handleprofileImage = async (file: any) => {
		const updatedFormData = { ...formData };
		updatedFormData.profile_image = file.url;
		setFormData(updatedFormData);
	};

	const [formData, setFormData] = React.useState({
		name: profileData.name,
		logo: profileData.logo,
		profile_image: profileData.profile_image,
		description: profileData.description,
		details: profileData.details,
		images: profileData.images,
		services: profileData.services,
		features: profileData.features,
	});

	const handleAboutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(formData);
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const [SocialFD, setSocialFD] = React.useState<SocialIcons[]>([]);
	const [errors, setErrors] = React.useState<Error[]>();

	const [showContact, setShowContact] = React.useState<boolean>(false);
	const [socialIcon, setSocialIcon] = React.useState<SocialIconType>(null);
	const [socialIconLogo, setSocialIconLogo] =
		React.useState<React.ReactNode>('');
	React.useState<SocialIconType>(null);
	const stage = state === 'about' ? 1 : state === 'services' ? 2 : 3;

	const [showSocialIcon, setShowSocialIcon] = React.useState<boolean>(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		switch (state) {
			case 'about': {
				// TODO: implement verification
				setState('services');
				break;
			}
			case 'services': {
				// TODO: Implement server-side logic to validate verification code.
				setState('contact');
				break;
			}
			case 'contact': {
				/// TODO: implement submit
				// setError('Fill all fields');
				router.push('/admin');
				break;
			}
			default: {
				// Do nothing
			}
		}
	};

	return (
		<Fragment>
			<div className='flex flex-col h-full overflow-y-scroll p-5 md:p-10'>
				<div className=' flex justify-between items-center max-w-lg mb-3'>
					{stage === 2 && (
						<Button
							variant='success'
							className='shrink-0'
						>
							Add Service
						</Button>
					)}
					<div className='text-lg font-bold text-center'>
						{stage}/3
					</div>
				</div>
				<AnimatePresence>
					{state === 'about' && (
						<motion.form
							key='about'
							initial={{ x: '0%' }}
							animate={{ x: '0%' }}
							exit={{ x: '-1000%' }}
							transition={{
								type: 'tween',
								duration: 0.5,
							}}
							className='flex flex-col gap-4 max-w-lg'
							onSubmit={handleSubmit}
						>
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

							<div className='flex flex-col gap-4 w-full'>
								<NewInput
									className='w-full'
									type='text'
									label='Business Name'
									name='name'
									value={formData.name}
									onInput={handleAboutChange}
									onChange={handleAboutChange}
								/>
								{/* <NewInput
									className='w-full'
									type='text'
									label='Business Owner'
									name='owner'
									value={formData.owner}
									onInput={handleAboutChange}
									onChange={handleAboutChange}
								/> */}
								<NewInput
									className='w-full'
									type='text'
									label='Business Description'
									name='description'
									value={formData.description}
									onInput={handleAboutChange}
									onChange={handleAboutChange}
								/>
								<NewInput
									className='w-full'
									type='text'
									label='About Business'
									name='details'
									value={formData.details}
									onInput={handleAboutChange}
									onChange={handleAboutChange}
								/>
							</div>
							<MultipleImagesUploader
								handleFiles={handleFiles}
								folder='features_images'
								text='Add Business Images'
								initialImages={formData.images}
							/>
							<div className='mt-3 w-full'>
								<Button
									variant='primary'
									className='w-full'
								>
									Next
								</Button>
							</div>
						</motion.form>
					)}
					{state === 'services' && (
						<motion.form
							key='services'
							initial={{ x: '1000%' }}
							animate={{ x: '0%' }}
							exit={{ x: '-1000%' }}
							transition={{
								type: 'tween',
								duration: 0.5,
							}}
							className='flex flex-col gap-6'
							onSubmit={handleSubmit}
						>
							<div className='flex flex-col relative gap-5 w-[556px]'>
								{/* {formData.services.length > 0 && */}
								{initialServices.length > 0 &&
									// formData.services.map(
									initialServices.map(
										(service, i) => (
											<ServiceCardLandscape
												key={i}
												name={service.name}
												image={
													service.image
												}
												description={
													service.description
												}
											/>
										)
									)}
								<NewInput
									className='w-full'
									type='text'
									label='Service Rendered'
									name='services'
									value={formData.name}
									onInput={handleAboutChange}
								/>
								<NewInput
									className='w-full'
									type='text'
									label='Service Description'
									name='services'
									value={formData.description}
									onInput={handleAboutChange}
								/>
								<FileUploader
									handleFile={handleBusinessLogo}
									folder='profile_images'
									type='portrait'
									text='Add Service Image'
								/>
								<div className='mt-3 w-full flex gap-5'>
									<Button
										variant='primary'
										className='w-full'
									>
										Next
									</Button>
								</div>
							</div>
						</motion.form>
					)}
					{state === 'contact' && (
						<motion.form
							key='services'
							initial={{ x: '1000%' }}
							animate={{ x: '0%' }}
							exit={{ x: '-1000%' }}
							transition={{
								type: 'tween',
								duration: 0.5,
							}}
							className='flex flex-col justify-start items-start gap-6'
							onSubmit={handleSubmit}
						>
							<div className='flex flex-col justify-between h-96 items-start relative gap-5 w-[556px]'>
								<div className=''>
									<div
										onClick={() =>
											setShowContact(true)
										}
										className='mb-5 cursor-pointer'
									>
										<div className='flex justify-start items-center w-[556px] h-14 gap-2 px-3 py-5 rounded-xl bg-[#f2f2f2]/[0.32] border border-[#f2f2f2]'>
											<div className='flex justify-start items-center flex-grow relative gap-16 px-1'>
												<div className='flex-grow h-10 relative'>
													<div className='flex flex-col justify-start items-start w-[280px] h-10 absolute left-0 top-0 gap-1'>
														<p className='self-stretch w-[280px] h-3 text-xs text-left text-[#4f4f4f]'>
															Select
															Contact
															Type
														</p>
														<p className='self-stretch w-[280px] text-base text-left text-[#808080]'>
															None
														</p>
													</div>
												</div>
												<div className='flex justify-start items-start flex-grow-0 flex-shrink-0'>
													<div className='flex justify-start items-start relative'>
														<svg
															width={
																24
															}
															height={
																24
															}
															viewBox='0 0 24 24'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
															className='w-6 h-6 relative'
															preserveAspectRatio='none'
														>
															<path
																d='M19.9181 8.95001L13.3981 15.47C12.6281 16.24 11.3681 16.24 10.5981 15.47L4.07812 8.95001'
																stroke='#292D32'
																strokeWidth='1.5'
																strokeMiterlimit={
																	10
																}
																strokeLinecap='round'
																strokeLinejoin='round'
															/>
														</svg>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='flex flex-wrap gap-5'>
										{SocialFD.map(
											(icon, index) => (
												<div
													key={index}
													className='flex-shrink-0 flex-grow-0 h-[120px] w-[100px] cursor-pointer relative'
													// onClick={() => {
													// 	alert(
													// 		icon.name
													// 	);
													// }}
												>
													<div className='h-[100px] w-full flex items-center justify-center rounded-lg bg-gray-100'>
														{
															icon.icon
														}
													</div>
													<div className='h-[20px] w-full text-center text-xs capitalize'>
														{
															icon.name
														}
													</div>
													<IconButton
														className='hover:scale-110 absolute top-0 left-0 rounded-full bg-gray-300 hover:bg-red-300 p-1 -translate-x-1/2 -translate-y-1/2'
														onClick={() =>
															alert(
																'Delete Social Icon'
															)
														}
													>
														<svg
															width={
																24
															}
															height={
																24
															}
															viewBox='0 0 24 24'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
															className='w-4 h-4'
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
													</IconButton>
												</div>
											)
										)}
									</div>
								</div>
								<div className='mt-3 w-full'>
									<Button
										variant='primary'
										className='w-full'
									>
										Save Changes
									</Button>
								</div>
							</div>
						</motion.form>
					)}
				</AnimatePresence>
			</div>
			<Modal isOpen={showContact}>
				<div className='w-[504px] h-[504px] overflow-hidden rounded-xl bg-white shadow-mid'>
					<div className='w-full h-[84px] rounded-tl-xl rounded-tr-xl bg-white border-t-0 borderR-0 border-b border-l-0 border-[#e0e0e0] relative flex items-center justify-center'>
						<p className='text-xl w-full font-bold text-center'>
							Select Contact Type
						</p>
						<div
							className='absolute left-0 h-full px-5 flex items-center justify-center'
							onClick={() => setShowContact(false)}
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
						</div>
					</div>

					<div className='flex flex-col justify-start gap-10 w-full h-full overflow-hidden p-5'>
						<div className='flex flex-wrap gap-5'>
							{SOCIAL_ICONS.map((icon, index) => (
								<div
									key={index}
									className='flex-shrink-0 flex-grow-0 h-[120px] w-[100px] cursor-pointer hover:scale-110'
									onClick={() => {
										setSocialIcon(
											icon.name as SocialIconType
										);
										setSocialIconLogo(
											icon.icon as React.ReactNode
										);
										setShowContact(false);
										setShowSocialIcon(true);
									}}
								>
									<div className='h-[100px] w-full flex items-center justify-center rounded-lg bg-gray-100'>
										{icon.icon}
									</div>
									<div className='h-[20px] w-full text-center text-xs'>
										{icon.name}
									</div>
								</div>
							))}
						</div>
						{/* <Button
							variant='primary'
							className='w-full'
						>
							Next
						</Button> */}
					</div>
				</div>
			</Modal>

			<Modal isOpen={showSocialIcon}>
				<div className='w-[504px] h-[504px] overflow-hidden rounded-xl bg-white shadow-mid'>
					<div className='w-full h-[84px] rounded-tl-xl rounded-tr-xl bg-white border-t-0 border-0 border-b border-l-0 border-[#e0e0e0] relative flex items-center justify-center'>
						<p className='text-xl w-full font-bold text-center capitalize'>
							{`${socialIcon}`}
						</p>
						<div
							className='absolute left-0 h-full px-5 flex items-center justify-center'
							onClick={() => {
								setShowSocialIcon(false);
								setShowContact(true);
							}}
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
						</div>
					</div>

					<div className='flex flex-col justify-start gap-20 w-full h-full overflow-hidden p-5'>
						<div>
							<div className='h-[100px] w-[100px] mx-auto flex items-center justify-center rounded-lg bg-gray-100 mb-5'>
								{socialIconLogo}
							</div>
							<div className='flex flex-wrap gap-5 capitalize'>
								{socialIcon !== null && (
									<TextInput label={socialIcon} />
								)}
							</div>
						</div>
						<Button
							variant='primary'
							className='w-full'
							onClick={() => {
								setSocialFD([
									...SocialFD,
									{
										name: socialIcon || '',
										icon: socialIconLogo,
									},
								]);
								setShowSocialIcon(false);
							}}
						>
							Done
						</Button>
					</div>
				</div>
			</Modal>
		</Fragment>
	);
}
