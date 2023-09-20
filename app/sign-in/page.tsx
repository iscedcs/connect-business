'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Button from '@/components/shared/ui/button/button';
import Text from '@/components/shared/ui/text';
import Link from 'next/link';
import SigninLayout from './signin-layout';
import BlurImage from '@/components/shared/ui/blur-image';
import { signIn } from 'next-auth/react';
import NewInput from '@/components/shared/form/input/new-input';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

interface Error {
	message: string;
	title: string;
}

export default function SignUp() {
	const searchParams = useSearchParams();
	const errorMessage = searchParams.get('error');
	const [userName, setUserName] = useState('');
	const [passWord, setPassWord] = useState('');
	const [errorUsername, setErrorUsername] = useState<boolean>(false);
	const [errorPassword, setErrorPassword] = useState<boolean>(false);
	const [errorLogin, setErrorLogin] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [errors, setErrors] = useState<Error[]>([]);

	const hasLoginError = () => {
		if (errors.some((error) => error.title === 'login')) {
			setErrorLogin(true);
		} else setErrorLogin(false);
	};

	// const handleInput = (e: FormEvent<HTMLFormElement>) => {};
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		setIsLoading(true);
		e.preventDefault();

		if (!userName) {
			setErrors((prevErrors) => [
				...prevErrors,
				{ message: 'Please enter username', title: 'username' },
			]);
			setErrorUsername(true);
			setIsLoading(false);
			return;
		}
		if (!passWord) {
			setErrors((prevErrors) => [
				...prevErrors,
				{ message: 'Please Enter Password', title: 'password' },
			]);
			setErrorPassword(true);
			setIsLoading(false);
			return;
		}

		try {
			const result = await signIn('credentials', {
				email: userName,
				password: passWord,
				redirect: true,
				callbackUrl: '/admin',
			});
			setIsLoading(true);
			return result;
		} catch (error) {
			setIsLoading(false);
			setErrors((prevErrors) => [
				...prevErrors,
				{ message: error as string, title: 'login' },
			]);
			console.log(error);
			return;
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		// console.log(errors);

		if (name === 'username') {
			setUserName(value);
		} else if (name === 'password') {
			setPassWord(value);
		}

		// Clear existing errors
		// setErrors([]);

		// Validate input fields
		if (name === 'username' && value.trim() === '') {
			setErrors((prevErrors) => [
				...prevErrors,
				{ message: 'Username Connot Be Empty', title: name },
			]);
		}

		if (name === 'password' && value.trim() === '') {
			setErrors((prevErrors) => [
				...prevErrors,
				{ message: 'Password Connot Be Empty', title: name },
			]);
		}
	};

	const leftSide = (
		<div className='flex flex-col justify-center items-center col-span-3 lg:col-span-1 px-3 lg:px-0 pt-10 lg:pt-0'>
			<form
				className='overflow-hidden bg-white flex flex-col justify-between max-w-[400px] w-full min-w-[280px] px-2 h-[500px] xl:h-[650px] 2xl:h-[750px]'
				onSubmit={handleSubmit}
			>
				<div className=''>
					<div className='mx-auto h-6 xl:h-10 mb-5'>
						<Image
							src='/img/logo_full_black.svg'
							alt='ISCE Connect Logo'
							height={48}
							width={132}
							className='object-contain object-center w-full h-full'
						/>
					</div>
					<div className=''>
						<div className='flex flex-col justify-center items-center xl:gap-2 mb-4 xl:mb-6'>
							<Text
								color='black'
								className='text-large xl:text-2xl text-center font-bold'
							>
								Welcome back
							</Text>
							<Text
								color='black'
								className='lg:min-w-[400px] text-tiny xl:text-base text-center text-black'
							>
								Sign into your ISCE business account
							</Text>
						</div>
						<div className='flex flex-col gap-3 xl:gap-6'>
							{errorLogin && (
								<div className='text-rose-600 text-xs text-center'>
									Error Occured
								</div>
							)}
							{errorMessage !== '' && (
								<div className='text-rose-600 text-xs text-center capitalize'>
									{errorMessage}
								</div>
							)}
							<div className='flex flex-col gap-2 xl:gap-6'>
								<NewInput
									type='text'
									className='w-full'
									label='Business ID'
									name='username'
									value={userName}
									onInput={handleChange}
									onBlur={handleChange}
									hasError={errorUsername}
									errorMessage='UserName Error'
								/>
								<NewInput
									type='password'
									className='w-full'
									label='Password'
									name='password'
									value={passWord}
									onInput={handleChange}
									onBlur={handleChange}
									hasError={errorPassword}
									errorMessage='Password Error'
								/>
							</div>
							<Text
								color='black'
								className='text-tiny xl:text-base text-center'
							>
								Forgot password?{' '}
								<Link
									href='/reset-password'
									className='font-bold'
								>
									Reset
								</Link>
								.
							</Text>
						</div>
					</div>
				</div>
				<Button
					isLoading={isLoading}
					variant='primary'
					className='w-full'
					type={'submit'}
				>
					Sign In
				</Button>
			</form>
		</div>
	);

	const rightSide = (
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
				<div className='h-[500px] xl:h-[650px] 2xl:h-[750px] w-full flex flex-col justify-end z-50'>
					<div className='mx-auto max-w-[400px] xl:w-[479px] xl:text-xl text-regular font-bold '>
						<p className='text-center mb-5 xl:mb-10'>
							Exchange your business information with ease,
							go paperless with our digital business card!
						</p>
						<Button
							variant='secondary'
							className='w-full'
							href='/sign-up'
						>
							Sign up
						</Button>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<SigninLayout
			left={leftSide}
			right={rightSide}
		/>
	);
}
