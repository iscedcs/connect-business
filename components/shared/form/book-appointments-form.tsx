import React, { useState } from 'react';
import NewInput from './input/new-input';
import Button from '../ui/button/button';

export default function BookAppointmentForm({
	service,
	setShowAppointment,
}: {
	service: string;
	setShowAppointment: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		title: service,
		description: '',
		phone: '',
		email: '',
		date: '',
		start_time: '',
		name: '',
		end_time: '',
		service: service,
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
		setShowAppointment(false);
	};
	return (
		<form
			className=''
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
				<div className='grid md:grid-cols-2 md:space-x-3'>
					<NewInput
						type='text'
						label='Date'
						name='date'
						value={formData.date}
						onInput={handleChange}
					/>
					<NewInput
						type='text'
						label='Time'
						name='start_time'
						value={formData.start_time}
						onInput={handleChange}
					/>
				</div>
				<NewInput
					type='text'
					label='Additional Details'
					name='description'
					value={formData.description}
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
