import Header from '@/components/dashboard/header';
import TextInput from '@/components/form/input/text-input';
import Button from '@/components/ui/button/button';
import Text from '@/components/ui/text';
import Link from 'next/link';
import React, { Fragment } from 'react';

export default function UpdatePassword() {
	return (
		<Fragment>
			<Header />
			<form className='p-10 flex flex-col text-black gap-5 lg:w-1/2 mt-10'>
				<div className=''>
					<TextInput
						variant='password'
						className='w-full'
						label='Current Password'
						name='currentPassword'
					/>
					<Text
						color='black'
						className='text-tiny xl:text-base text-left'
					>
						Forgot password?{' '}
						<Link
							href={'/reset-password'}
							className='font-bold'
						>
							Reset
						</Link>
						.
					</Text>
				</div>
				<TextInput
					variant='password'
					className='w-full'
					label='New Password'
					name='newPassword'
				/>
				<TextInput
					variant='password'
					className='w-full'
					label='Confirm Password'
					name='confirmPassword'
				/>
				<div className='mt-5'>
					<Button
						variant='primary'
						className='w-full'
					>
						Update Password
					</Button>
				</div>
			</form>
		</Fragment>
	);
}
