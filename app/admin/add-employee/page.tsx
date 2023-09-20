'use client';
import Modal from '@/components/shared/layouts/modal';
import Button from '@/components/shared/ui/button/button';
import React, { Fragment } from 'react';
import { useSession } from 'next-auth/react';
import NewInput from '@/components/shared/form/input/new-input';
import { useRouter } from 'next/navigation';
import AlertModal from '@/components/shared/layouts/alert-modal';

const AddEmployee = () => {
	const router = useRouter();
	const { data: session } = useSession();
	const [isLoading, setIsLoading] = React.useState(false);
	const [employeeAdded, setEmployeeAdded] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState(false);
	const [formData, setFormData] = React.useState({
		name: '',
		email: '',
		phone: '',
		role: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleAddEmployee = async (
		e: React.MouseEvent<HTMLButtonElement>
	) => {
		e.preventDefault();
		setIsLoading(true);
		console.log(formData);
		const data = {
			name: formData.name,
			email: formData.email,
			phone: formData.phone,
			role: formData.role,
		};

		const res = await fetch('/api/add-staff', {
			method: 'POST',
			body: JSON.stringify(data),
		})
			.then(async (res) => {
				// console.log(res);
				setIsLoading(false);
				if (!res.ok) {
					setErrorMessage(true);
					const fullRes = await res.json();
					// console.log(fullRes);
					return res.status;
				} else {
					setEmployeeAdded(true);
					setFormData({
						name: '',
						email: '',
						phone: '',
						role: '',
					});
				}
			})
			.catch((error) => {
				console.error(error);
			});
		return res;
	};
	return (
		<Fragment>
			<div className='grid grid-cols-12 w-full h-full gap-6 py-5 px-10 overflow-hidden'>
				<div className='col-span-12 md:col-span-8 lg:col-span-6 pt-20'>
					<form className='flex flex-col gap-5 max-w-2xl'>
						<NewInput
							variant='primary'
							type='text'
							onInput={handleChange}
							label={"Employee's Name"}
							onBlur={handleChange}
							name='name'
							value={formData.name}
						/>
						<NewInput
							variant='primary'
							type='text'
							onInput={handleChange}
							label={"Employee's Email Address"}
							onBlur={handleChange}
							name='email'
							value={formData.email}
						/>
						<NewInput
							variant='primary'
							type='text'
							onInput={handleChange}
							label={"Employee's Phone Number"}
							onBlur={handleChange}
							name='phone'
							value={formData.phone}
						/>
						<NewInput
							variant='primary'
							type='text'
							onInput={handleChange}
							label={"Employee's Role"}
							onBlur={handleChange}
							name='role'
							value={formData.role}
						/>
						<div className='mt-3'>
							<Button
								variant='primary'
								className='w-full'
								onClick={handleAddEmployee}
								isLoading={isLoading}
							>
								Add Employee
							</Button>
						</div>
					</form>
				</div>
			</div>
			<AlertModal
				type='success'
				isOpen={employeeAdded}
				onClose={() => setEmployeeAdded(false)}
				message={`Employee Added Successfully!!!`}
				title='Employee Added'
			/>
			<AlertModal
				type='error'
				isOpen={errorMessage}
				onClose={() => setErrorMessage(false)}
				message={`Something Went Wrong!!!`}
				title='Error'
			/>
		</Fragment>
	);
};

export default AddEmployee;
