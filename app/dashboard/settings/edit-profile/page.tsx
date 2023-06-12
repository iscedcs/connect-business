'use client';
import Header from '@/components/dashboard/header';
import TextInput from '@/components/form/input/text-input';
import TextAreaInput from '@/components/form/input/textarea-input';
import Modal from '@/components/layouts/modal';
import BlurImage from '@/components/ui/blur-image';
import Button from '@/components/ui/button/button';
import IconButton from '@/components/ui/button/icon-button';
import { COMPANY_PROFILE, SOCIAL_ICONS } from '@/utils/data';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { Fragment } from 'react';

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

export default function EditProfile() {
	const router = useRouter();
	const [state, setState] = React.useState<EditProfileStage>('about');
	const [image, setImage] = React.useState<string>('');
	const [businessLogo, setBusinessLogo] = React.useState<string>('');
	const [businessName, setBusinessName] = React.useState<string>('');
	const [businessOwner, setBusinessOwner] = React.useState<string>('');
	const [businessDescription, setBusinessDescription] =
		React.useState<string>('');
	const [businessDetails, setBusinessDetails] = React.useState<string>('');
	const [serviceRendered, setServiceRendered] = React.useState<string>('');
	const [serviceDescription, setServiceDescription] =
		React.useState<string>('');
	const [serviceImage, setServiceImage] = React.useState<string>('');
	const [error, setError] = React.useState('');
	const [showContact, setShowContact] = React.useState<boolean>(false);
	const [socialIcon, setSocialIcon] = React.useState<SocialIconType>(null);
	const [socialIconLogo, setSocialIconLogo] =
		React.useState<React.ReactNode>('');
	React.useState<SocialIconType>(null);
	const stage = state === 'about' ? 1 : state === 'services' ? 2 : 3;

	const [showSocialIcon, setShowSocialIcon] = React.useState<boolean>(false);
	const [allSocialIcons, setAllSocialIcons] = React.useState<SocialIcons[]>(
		[]
	);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(state);

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
				router.push('/dashboard');
				break;
			}
			default: {
				// Do nothing
			}
		}
	};

	return (
		<Fragment>
			<Header />
			<div className='flex flex-col justify-start items-start h-full overflow-y-scroll p-10'>
				<p className='text-lg font-bold text-left mb-5'>
					{stage}/3
				</p>

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
							className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6'
							onSubmit={handleSubmit}
						>
							<div className='h-[132px] w-[132px] relative'>
								<div
									className={`h-[132px] w-[132px] flex items-center justify-center bg-gradient-to-b rounded-full p-[3px] from-black/0 to-black/100 overflow-hidden`}
								>
									{COMPANY_PROFILE.logo ? (
										<BlurImage
											src={
												COMPANY_PROFILE.logo ||
												'/icons/profile.svg'
											}
											height={128}
											width={128}
											alt='avatar'
											className={`w-32 h-32 object-cover object-center rounded-full bg-white`}
										/>
									) : (
										<div
											className={`w-32 h-32 flex items-center justify-center rounded-full bg-white text-black`}
										>
											<svg
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M12.1586 10.87C12.0586 10.86 11.9386 10.86 11.8286 10.87C9.44859 10.79 7.55859 8.84 7.55859 6.44C7.55859 3.99 9.53859 2 11.9986 2C14.4486 2 16.4386 3.99 16.4386 6.44C16.4286 8.84 14.5386 10.79 12.1586 10.87Z'
													stroke='currentColor'
													strokeWidth='1.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													d='M7.15875 14.56C4.73875 16.18 4.73875 18.82 7.15875 20.43C9.90875 22.27 14.4188 22.27 17.1688 20.43C19.5888 18.81 19.5888 16.17 17.1688 14.56C14.4288 12.73 9.91875 12.73 7.15875 14.56Z'
													stroke='currentColor'
													strokeWidth='1.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</div>
									)}
								</div>
								<div className='bg-gray-900/10 absolute top-0 left-0 w-full h-full rounded-full'>
									<svg
										width={24}
										height={24}
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className='w-6 h-6 absolute bottom-2 right-2'
										preserveAspectRatio='none'
									>
										<rect
											width={24}
											height={24}
											rx={6}
											fill='black'
										/>
										<path
											d='M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13'
											stroke='white'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M16.0379 3.02025L8.15793 10.9003C7.85793 11.2003 7.55793 11.7903 7.49793 12.2203L7.06793 15.2303C6.90793 16.3203 7.67793 17.0803 8.76793 16.9303L11.7779 16.5003C12.1979 16.4403 12.7879 16.1403 13.0979 15.8403L20.9779 7.96025C22.3379 6.60025 22.9779 5.02025 20.9779 3.02025C18.9779 1.02025 17.3979 1.66025 16.0379 3.02025Z'
											stroke='white'
											strokeWidth='1.5'
											strokeMiterlimit={10}
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M14.9062 4.15039C15.5763 6.54039 17.4463 8.41039 19.8463 9.09039'
											stroke='white'
											strokeWidth='1.5'
											strokeMiterlimit={10}
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</div>
							</div>
							<div className='flex-grow-0 flex-shrink-0 h-[200px] w-[556px] bg-gray-100 rounded-2xl flex flex-col items-center justify-center'>
								<svg
									width={64}
									height={64}
									viewBox='0 0 64 64'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='flex-grow-0 flex-shrink-0 w-16 h-16'
									preserveAspectRatio='xMidYMid meet'
								>
									<path
										d='M48 33.5H16C15.1828 33.5 14.5 32.8172 14.5 32C14.5 31.1828 15.1828 30.5 16 30.5H48C48.8172 30.5 49.5 31.1828 49.5 32C49.5 32.8172 48.8172 33.5 48 33.5Z'
										fill='#292D32'
										stroke='black'
									/>
									<path
										d='M32 49.5C31.1828 49.5 30.5 48.8172 30.5 48V16C30.5 15.1828 31.1828 14.5 32 14.5C32.8172 14.5 33.5 15.1828 33.5 16V48C33.5 48.8172 32.8172 49.5 32 49.5Z'
										fill='#292D32'
										stroke='black'
									/>
								</svg>
								<p className='flex-grow-0 flex-shrink-0 w-40 h-7 text-base text-center text-[#555556]'>
									Add Business Logo
								</p>
							</div>
							<div className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5 w-[556px]'>
								<TextInput label={'Business Name'} />
								<TextInput
									label={'Name of Business Owner'}
								/>
								<TextInput
									label={'Business Description'}
								/>
								<TextAreaInput
									label={'Business Details'}
									placeholder='Details of what your business is about.'
								/>
								<div className='flex-grow-0 flex-shrink-0 w-72 h-96 rounded-3xl bg-gray-100 flex flex-col items-center justify-center'>
									<svg
										width={64}
										height={64}
										viewBox='0 0 64 64'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className='flex-grow-0 flex-shrink-0 w-16 h-16'
										preserveAspectRatio='xMidYMid meet'
									>
										<path
											d='M48 33.5H16C15.1828 33.5 14.5 32.8172 14.5 32C14.5 31.1828 15.1828 30.5 16 30.5H48C48.8172 30.5 49.5 31.1828 49.5 32C49.5 32.8172 48.8172 33.5 48 33.5Z'
											fill='#292D32'
											stroke='black'
										/>
										<path
											d='M32 49.5C31.1828 49.5 30.5 48.8172 30.5 48V16C30.5 15.1828 31.1828 14.5 32 14.5C32.8172 14.5 33.5 15.1828 33.5 16V48C33.5 48.8172 32.8172 49.5 32 49.5Z'
											fill='#292D32'
											stroke='black'
										/>
									</svg>
									<p className='flex-grow-0 flex-shrink-0 text-base text-center text-[#555556]'>
										Add Business Images
									</p>
								</div>
								<div className='mt-3 w-full'>
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
							className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6'
							onSubmit={handleSubmit}
						>
							<div className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5 w-[556px]'>
								<TextInput label={'Service Rendered'} />
								<TextAreaInput
									label={'Service Description'}
									placeholder='Description of the service'
								/>
								<div className='flex-grow-0 flex-shrink-0 w-72 h-96 rounded-3xl bg-gray-100 flex flex-col items-center justify-center'>
									<svg
										width={64}
										height={64}
										viewBox='0 0 64 64'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className='flex-grow-0 flex-shrink-0 w-16 h-16'
										preserveAspectRatio='xMidYMid meet'
									>
										<path
											d='M48 33.5H16C15.1828 33.5 14.5 32.8172 14.5 32C14.5 31.1828 15.1828 30.5 16 30.5H48C48.8172 30.5 49.5 31.1828 49.5 32C49.5 32.8172 48.8172 33.5 48 33.5Z'
											fill='#292D32'
											stroke='black'
										/>
										<path
											d='M32 49.5C31.1828 49.5 30.5 48.8172 30.5 48V16C30.5 15.1828 31.1828 14.5 32 14.5C32.8172 14.5 33.5 15.1828 33.5 16V48C33.5 48.8172 32.8172 49.5 32 49.5Z'
											fill='#292D32'
											stroke='black'
										/>
									</svg>
									<p className='flex-grow-0 flex-shrink-0 text-base text-center text-[#555556]'>
										Add Service Image
									</p>
								</div>
								<div className='mt-3 w-full'>
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
							className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6'
							onSubmit={handleSubmit}
						>
							<div className='flex flex-col justify-between h-96 items-start flex-grow-0 flex-shrink-0 relative gap-5 w-[556px]'>
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
														<p className='self-stretch flex-grow-0 flex-shrink-0 w-[280px] h-3 text-xs text-left text-[#4f4f4f]'>
															Select
															Contact
															Type
														</p>
														<p className='self-stretch flex-grow-0 flex-shrink-0 w-[280px] text-base text-left text-[#808080]'>
															None
														</p>
													</div>
												</div>
												<div className='flex justify-start items-start flex-grow-0 flex-shrink-0'>
													<div className='flex justify-start items-start flex-grow-0 flex-shrink-0 relative'>
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
															className='flex-grow-0 flex-shrink-0 w-6 h-6 relative'
															preserveAspectRatio='none'
														>
															<path
																d='M19.9181 8.95001L13.3981 15.47C12.6281 16.24 11.3681 16.24 10.5981 15.47L4.07812 8.95001'
																stroke='#292D32'
																stroke-width='1.5'
																stroke-miterlimit={
																	10
																}
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
														</svg>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='flex flex-wrap gap-5'>
										{allSocialIcons.map(
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
								setAllSocialIcons([
									...allSocialIcons,
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
