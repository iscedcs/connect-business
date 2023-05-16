'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/button/button';
import TextInput from '@/components/form/input/text-input';
import Text from '@/components/ui/text';
import Link from 'next/link';
import VerificationCodeValidationBox from '@/components/form/verification-code-box/verification-code-input';

type ResetPageState =
	| 'enter-email'
	| 'enter-verification-code'
	| 'enter-new-password'
	| 'reset-successful';

const PasswordResetPage = () => {
	const [state, setState] = useState<ResetPageState>('enter-email');
	const [email, setEmail] = useState('');
	const [verificationCode, setVerificationCode] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');
	const handleVerificationCode = (code: string) => {
		setVerificationCode(code);
	};
	console.log(error);
	console.log(verificationCode);

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const verificationCodeRegex = /^\d{4}$/;
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

	async function handleInputChange(
		event: React.ChangeEvent<HTMLInputElement>
	) {
		// handle input change logic
		switch (state) {
			case 'enter-email': {
				!email.match(emailRegex)
					? setError('Please enter a valid email address.')
					: setError('');
				break;
			}
			case 'enter-verification-code': {
				// TODO: Implement server-side logic to validate verification code.
				if (!verificationCode.match(verificationCodeRegex)) {
					setError('Please enter a valid verification code.');
					return;
				}
				break;
			}
			case 'enter-new-password': {
				// TODO: Implement server-side logic to update password.
				if (!newPassword.match(passwordRegex)) {
					setError(
						'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.'
					);
					return;
				} else if (newPassword !== confirmPassword) {
					setError('Passwords do not match');
				}
				break;
			}
			default: {
				// Do nothing
			}
		}
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		switch (state) {
			case 'enter-email': {
				// TODO: Implement server-side logic to send verification code to email.
				!email.match(emailRegex)
					? setError('Please enter a valid email address.')
					: setError('');

				setState('enter-verification-code');
				break;
			}
			case 'enter-verification-code': {
				// TODO: Implement server-side logic to validate verification code.
				if (verificationCode.match(verificationCodeRegex)) {
					setState('enter-new-password');
				} else {
					setError('Please enter a valid verification code.');
					return;
				}
				break;
			}
			case 'enter-new-password': {
				// TODO: Implement server-side logic to update password.
				if (!newPassword.match(passwordRegex)) {
					setError(
						'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.'
					);
					return;
				} else if (newPassword !== confirmPassword) {
					setError('Passwords do not match');
				}
				setState('reset-successful');
				break;
			}
			default: {
				// Do nothing
			}
		}
	};

	return (
		<div className='flex justify-center items-center h-screen'>
			<div className='-mt-24'>
				<div className='mx-auto h-6 xl:h-10 mb-5'>
					<Image
						src='/img/logo_full_black.svg'
						alt='ISCE Connect Logo'
						height={48}
						width={132}
						className='object-contain object-center w-full h-full'
					/>
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ type: 'tween', duration: 0.5 }}
					className='bg-white rounded-md flex w-[500px]'
				>
					<AnimatePresence>
						{state === 'enter-email' && (
							<motion.form
								key='enter-email-form'
								initial={{ x: '0%' }}
								animate={{ x: '0%' }}
								exit={{ x: '-1000%' }}
								transition={{
									type: 'tween',
									duration: 0.5,
								}}
								onSubmit={handleSubmit}
								className='flex flex-col justify-between rounded-lg shadow-mid py-20 px-12 w-full shrink-0 grow-0 items-center gap-4 aspect-square'
							>
								<div className='text-center'>
									<Text
										color='black'
										className=' text-h6 font-bold'
									>
										Reset Your Password
									</Text>
									<Text
										color='black'
										className=''
									>
										Please enter your ISCE
										registered email address.
									</Text>
								</div>
								<TextInput
									className='w-full'
									variant='email'
									label='Business Email'
									name='email'
									onBlur={(event) =>
										setEmail(event.target.value)
									}
									// error={error !== ''}
									onInput={handleInputChange}
								/>
								<div className='w-full'>
									<Button
										variant='primary'
										className='w-full'
									>
										Send Code
									</Button>
									<Text
										color='black'
										className='text-small text-center mt-4'
									>
										Remember your password?{' '}
										<Link
											href='/sign-in'
											className='font-bold'
										>
											Sign In
										</Link>
									</Text>
								</div>
							</motion.form>
						)}
						{state === 'enter-verification-code' && (
							<motion.form
								key='enter-verification-code-form'
								initial={{ x: '1000%' }}
								animate={{ x: '0%' }}
								exit={{ x: '-1000%' }}
								transition={{
									type: 'tween',
									duration: 0.5,
								}}
								onSubmit={handleSubmit}
								className='flex flex-col justify-between rounded-md shadow-mid py-20 px-12  w-full shrink-0 grow-0 items-center gap-4 aspect-square'
							>
								<div className='text-center'>
									<Text
										color='black'
										className=' text-h6 font-bold'
									>
										Verification Code
									</Text>
									<Text
										color='black'
										className=''
									>
										Please enter the 4-digit
										verification code to proceed.
									</Text>
								</div>

								<VerificationCodeValidationBox
									onCodeComplete={
										handleVerificationCode
									}
								/>
								<div className='w-full'>
									<Button
										variant='primary'
										className='w-full'
									>
										Confirm Code
									</Button>
									<Text
										color='black'
										className='text-small text-center mt-4'
									>
										I did not receive a code.{' '}
										<button className='font-bold'>
											Resend
										</button>
									</Text>
								</div>
							</motion.form>
						)}
						{state === 'enter-new-password' && (
							<motion.form
								key='enter-new-password-form'
								initial={{ x: '1000%' }}
								animate={{ x: '0%' }}
								exit={{ x: '-1000%' }}
								transition={{
									type: 'tween',
									duration: 0.5,
								}}
								onSubmit={handleSubmit}
								className='flex flex-col justify-between rounded-md shadow-mid py-20 px-12  w-full shrink-0 grow-0 items-center gap-4 aspect-square'
							>
								<div className='text-center'>
									<Text
										color='black'
										className=' text-h6 font-bold'
									>
										New Password
									</Text>
									<Text
										color='black'
										className=''
									>
										Please enter your new
										password.
									</Text>
								</div>
								<TextInput
									variant='password'
									className='w-full'
									label='New Password'
									name='newPassword'
									onBlur={(event) =>
										setNewPassword(
											event.target.value
										)
									}
								/>
								<TextInput
									variant='password'
									className='w-full'
									label='Confirm New Password'
									name='confirmPassword'
									onBlur={(event) =>
										setConfirmPassword(
											event.target.value
										)
									}
								/>
								<div className='w-full'>
									<Button
										variant='primary'
										className='w-full'
									>
										Set New Password
									</Button>
								</div>
							</motion.form>
						)}
						{state === 'reset-successful' && (
							<motion.div
								key='reset-successful-message'
								initial={{ x: '1000%' }}
								animate={{ x: '0%' }}
								exit={{ x: '-1000%' }}
								transition={{
									type: 'tween',
									duration: 0.5,
								}}
								className='min-w-[504px] min-h-[504px] flex flex-col justify-between items-center pb-20 overflow-hidden rounded-xl bg-[#fffffe] shadow-mid'
							>
								<p className='py-6 text-large font-bold border-b text-center w-full'>
									Password Reset Successful
								</p>

								<div className='h-[132px] w-[132px] bg-success bg-opacity-20 rounded-full flex justify-center items-center'>
									<Image
										src='/icons/success.svg'
										height={132}
										width={132}
										alt='success logo'
										className=' object-contain object-center h-full w-full'
									/>
								</div>

								<Text
									color='black'
									className='max-w-[400px] text-center'
								>
									You have successfully set a new
									password for your account.
								</Text>
								<Button
									variant='primary'
									className='w-full max-w-[400px]'
									href='sign-in'
								>
									Sign In
								</Button>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			</div>
		</div>
	);
};

export default PasswordResetPage;
