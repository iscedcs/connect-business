import React, { Dispatch, useState } from 'react';
import NewInput from './input/new-input';
import Button from '../ui/button/button';
import { useRouter } from 'next/navigation';

export default function ExchangeContactForm({
	setShowAlert,
}: {
	setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		job_title: '',
		phone: '',
		email: '',
	});
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);
		console.log(formData);
		setIsLoading(false);
		setShowAlert(true);
	};
	return (
		<form
			className='flex flex-col justify-between'
			onSubmit={handleSubmit}
		>
			<div className='mb-10'>
				<NewInput
					type='text'
					label='Full Name'
					name='name'
					value={formData.name}
					onInput={handleChange}
				/>
				<NewInput
					type='text'
					label='Job Title'
					name='job_title'
					value={formData.job_title}
					onInput={handleChange}
				/>
				<NewInput
					type='text'
					label='Phone Number'
					name='phone'
					value={formData.phone}
					onInput={handleChange}
				/>
				<NewInput
					type='text'
					label='Email Address'
					name='email'
					value={formData.email}
					onInput={handleChange}
				/>
			</div>

			<Button
				isLoading={isLoading}
				variant='primary'
				className='w-full text-white capitalize px-5 py-2 rounded-full text-[10px] lg:text-base font-semibold bg-black'
			>
				Done
			</Button>
		</form>
	);
}
