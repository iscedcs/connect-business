import React, { useState } from 'react';
import NewInput from './input/new-input';
import Button from '../ui/button/button';

export default function EditAppointmentForm({
	date,
	time,
	service,
	description,
	setShowEdit,
}: {
	date: string;
	time: string;
	service: string;
	description: string;
	setShowEdit: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		date: date,
		time: time,
		service: service,
		description: description,
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
		// console.log(formData);
		setIsLoading(false);
		setShowEdit(false);
	};
	return (
		<form
			className=''
			onSubmit={handleSubmit}
		>
			<div className='mb-10'>
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
					name='time'
					value={formData.time}
					onInput={handleChange}
				/>
				<NewInput
					type='text'
					label='Service'
					name='service'
					value={formData.service}
					onInput={handleChange}
				/>
				<NewInput
					type='text'
					label='Additional Details'
					name='description'
					value={formData.description}
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
