'use client';
import Checkbox from '@/components/form/checkbox/checkbox';
import TextInput from '@/components/form/input/text-input';
import Button from '@/components/ui/button/button';
import Text from '@/components/ui/text';
import Link from 'next/link';
import React, { Fragment } from 'react';
import SigninLayout from '../sign-in/signin-layout';
import BlurImage from '@/components/ui/blur-image';
import SelectInput from '@/components/form/select/select-input';
import { API, URLS } from '@/utils/consts';
import axios from 'axios';
import Modal from '@/components/layouts/modal';

export default function SignUp() {
	const [failureMessage, setFailureMessage] = React.useState('');
	const [successMessage, setSuccessMessage] = React.useState('');
	const [formData, setFormData] = React.useState({
		name: '',
		email: '',
		type: 'Service Based Business',
		password: '',
		confirm_password: '',
		termsAgreed: false,
	});

	const config = {
		headers: {
			'x-api-key': process.env.X_API_KEY,
		},
	};

	const [successModal, setSuccessModal] = React.useState(false);
	const [failureModal, setFailureModal] = React.useState(false);
	console.log(formData);

	const options = [
		'Service Based Business',
		'Product Based Business',
		'Product and Service Based Business',
	];

	const handleSelect = (option: string) => {
		console.log('Selected option:', option);
		setFormData((prevFormData) => ({
			...prevFormData,
			type: option,
		}));
	};

	const handleChecked = (checked: boolean) => {
		console.log(checked);
		setFormData((prevFormData) => ({
			...prevFormData,
			termsAgreed: checked,
		}));
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;
		const fieldValue = type === 'checkbox' ? checked : value;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: fieldValue,
		}));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = {
			name: formData.name,
			email: formData.email,
			type: formData.type,
			password: formData.password,
			confirm_password: formData.password,
		};

		console.log(data);

		try {
			if (
				!formData.name ||
				!formData.email ||
				!formData.type ||
				!formData.password ||
				formData.password !== formData.confirm_password
			) {
				throw new Error('Invalid form data'); // Throw an error instead of sending a response
			}

			const { data: response } = await axios.post(
				API + URLS.business.auth.create,
				data,
				config
			);
			console.log(response);

			if (!response) {
				throw new Error('Hello! Something went wrong');
			}
			setSuccessModal(true);
			setSuccessMessage(response);
			setFormData({
				name: '',
				email: '',
				type: 'Service Based Business',
				password: '',
				confirm_password: '',
				termsAgreed: false,
			});
		} catch ({ error }: any) {
			const errorMessage =
				error?.response?.data?.message || error?.message;

			setFailureModal(true);
			setFailureMessage(errorMessage);
			console.error(errorMessage); // Log the error
		}
	};

	const leftSide = (
		<div className='hidden lg:block col-span-1 h-screen relative'>
			<BlurImage
				src='/img/card-colors.png'
				alt='Card Colors'
				height={1080}
				width={1080}
				priority
				className='w-full h-full object-cover object-left'
			/>
			<div className='h-full w-full bg-black/40 flex flex-col justify-center items-center absolute top-0 left-0 text-white'>
				<div className='w-full h-[50%] bg-gradient-to-b from-black/0 via-black/75 to-black/100 absolute bottom-0 left-0'></div>
				<div className=' h-[500px] xl:h-[650px] 2xl:h-[750px] w-full flex flex-col justify-end z-50'>
					<div className='mx-auto max-w-[400px] xl:w-[479px] xl:text-xl text-regular font-bold '>
						<p className='text-center mb-5 xl:mb-10'>
							Exchange your business information with ease,
							go paperless with our digital business card!
						</p>
						<Button
							variant='secondary'
							className='w-full'
							href='/sign-in'
						>
							Sign In
						</Button>
					</div>
				</div>
			</div>
		</div>
	);

	const rightSide = (
		<div className='flex flex-col justify-center items-center col-span-2 lg:col-span-1 px-3 lg:px-0 pt-10 lg:pt-0'>
			<form
				method='POST'
				onSubmit={handleSubmit}
				className='overflow-hidden bg-white flex flex-col justify-between max-w-[400px] h-[500px] xl:h-[650px] 2xl:h-[750px]'
			>
				<div className='mx-auto h-6 xl:h-10 mb-5'>
					<BlurImage
						src='/img/logo_full_black.svg'
						alt='ISCE Connect Logo'
						height={48}
						width={132}
						className='object-cover object-center w-full h-full'
					/>
				</div>
				<div className=''>
					<div className='flex flex-col justify-center items-center xl:gap-2 mb-4 xl:mb-6'>
						<Text
							color='black'
							className='text-large xl:text-2xl text-center font-bold'
						>
							Get Started
						</Text>
						<p className='max-w-[400px] text-tiny xl:text-base text-center text-black'>
							Start your journey with ISCE connect for
							business.
						</p>
					</div>
					<div className='flex flex-col gap-3 xl:gap-6'>
						<div className='flex flex-col gap-2 xl:gap-6'>
							<TextInput
								className='w-full'
								label='Business Name'
								name='name'
								onBlur={handleChange}
							/>
							<TextInput
								className='w-full'
								variant='email'
								label='Business Email'
								name='email'
								onBlur={handleChange}
							/>
							<SelectInput
								options={options}
								label='Business Type'
								onSelect={handleSelect}
								name='type'
							/>
							<TextInput
								variant='password'
								className='w-full'
								label='Password'
								name='password'
								onBlur={handleChange}
							/>
							<TextInput
								variant='password'
								className='w-full'
								label='Confirm Password'
								name='confirm_password'
								onBlur={handleChange}
							/>
						</div>
						<div className='flex justify-start items-start relative gap-3'>
							<div className='h-4 xl:h-6 w-4 xl:w-6'>
								<Checkbox
									checked={false}
									onChange={handleChecked}
								/>
							</div>
							<p className='max-w-[364px] text-sm text-left text-black'>
								<span className='max-w-[364px] text-tiny xl:text-base text-left text-black'>
									By registering, you agree to our{' '}
									<Link
										href={'/terms'}
										className='font-bold'
									>
										Terms of Use
									</Link>{' '}
									and{' '}
									<Link
										href={'/privacy'}
										className='font-bold'
									>
										Privacy Policy
									</Link>
									.
								</span>
							</p>
						</div>
					</div>
				</div>
				<Button
					variant='primary'
					className='w-full'
				>
					Sign Up
				</Button>
			</form>
		</div>
	);
	return (
		<Fragment>
			<SigninLayout
				left={leftSide}
				right={rightSide}
			/>
			<Modal
				onClose={() => setSuccessModal(false)}
				isOpen={successModal}
			>
				<div className='h-[500px] w-[500px] flex justify-center items-center bg-white rounded-3xl'>
					<svg
						width={132}
						height={132}
						viewBox='0 0 132 132'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='w-[132px] h-[132px] relative'
						preserveAspectRatio='xMidYMid meet'
					>
						<rect
							width={132}
							height={132}
							rx={66}
							fill='#00B96B'
							fillOpacity='0.12'
						/>
						<path
							d='M66.0013 84.3337C76.1265 84.3337 84.3346 76.1255 84.3346 66.0003C84.3346 55.8751 76.1265 47.667 66.0013 47.667C55.8761 47.667 47.668 55.8751 47.668 66.0003C47.668 76.1255 55.8761 84.3337 66.0013 84.3337Z'
							fill='#00B96B'
						/>
						<path
							d='M63.3947 72.5633C63.028 72.5633 62.6797 72.4166 62.423 72.1599L57.2347 66.9716C56.703 66.4399 56.703 65.5599 57.2347 65.0283C57.7664 64.4966 58.6464 64.4966 59.178 65.0283L63.3947 69.2449L72.818 59.8216C73.3497 59.2899 74.2297 59.2899 74.7614 59.8216C75.293 60.3533 75.293 61.2333 74.7614 61.7649L64.3664 72.1599C64.1097 72.4166 63.7614 72.5633 63.3947 72.5633Z'
							fill='#FFFFFE'
						/>
					</svg>
				</div>
			</Modal>
			<Modal
				onClose={() => setFailureModal(false)}
				isOpen={failureModal}
			>
				<div className='h-[500px] w-[500px] flex flex-col items-center justify-center bg-white rounded-3xl gap-3'>
					<svg
						width={132}
						height={132}
						viewBox='0 0 132 132'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='flex-grow-0 flex-shrink-0 w-[132px] h-[132px] relative'
						preserveAspectRatio='xMidYMid meet'
					>
						<rect
							width={132}
							height={132}
							rx={66}
							fill='#BA1A1A'
							fillOpacity='0.12'
						/>
						<path
							d='M66.0013 47.667C55.8996 47.667 47.668 55.8987 47.668 66.0003C47.668 76.102 55.8996 84.3337 66.0013 84.3337C76.103 84.3337 84.3346 76.102 84.3346 66.0003C84.3346 55.8987 76.103 47.667 66.0013 47.667ZM64.6263 58.667C64.6263 57.9153 65.2496 57.292 66.0013 57.292C66.753 57.292 67.3763 57.9153 67.3763 58.667V67.8337C67.3763 68.5853 66.753 69.2087 66.0013 69.2087C65.2496 69.2087 64.6263 68.5853 64.6263 67.8337V58.667ZM67.688 74.0303C67.5963 74.2687 67.468 74.452 67.303 74.6353C67.1196 74.8003 66.918 74.9287 66.698 75.0203C66.478 75.112 66.2396 75.167 66.0013 75.167C65.763 75.167 65.5246 75.112 65.3046 75.0203C65.0846 74.9287 64.883 74.8003 64.6996 74.6353C64.5346 74.452 64.4063 74.2687 64.3146 74.0303C64.223 73.8103 64.168 73.572 64.168 73.3337C64.168 73.0953 64.223 72.857 64.3146 72.637C64.4063 72.417 64.5346 72.2153 64.6996 72.032C64.883 71.867 65.0846 71.7387 65.3046 71.647C65.7446 71.4637 66.258 71.4637 66.698 71.647C66.918 71.7387 67.1196 71.867 67.303 72.032C67.468 72.2153 67.5963 72.417 67.688 72.637C67.7796 72.857 67.8346 73.0953 67.8346 73.3337C67.8346 73.572 67.7796 73.8103 67.688 74.0303Z'
							fill='#BA1A1A'
						/>
					</svg>
					<span>{failureMessage}</span>
				</div>
			</Modal>
		</Fragment>
	);
}
