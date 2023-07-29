'use client';
import TextInput from '@/components/shared/form/input/text-input';
import Modal from '@/components/layouts/modal';
import Button from '@/components/shared/ui/button/button';
import React, { Fragment } from 'react';
import addEmployee from '@/app/api/add-employee/route';
import { useSession } from 'next-auth/react';

export default function AddEmployee() {
	const { data: session } = useSession();
	console.log(session?.user);

	const [employeeAdded, setEmployeeAdded] = React.useState(false);
	const [formData, setFormData] = React.useState({
		business_id: '',
		name: '',
		email: '',
		phone: '',
		role: '',
		gender: 'Not Specified',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
		console.log(formData);
	};

	const handleAddEmployee = async (
		e: React.MouseEvent<HTMLButtonElement>
	) => {
		e.preventDefault();

		const data = {
			business_id: formData.business_id,
			name: formData.name,
			email: formData.email,
			phone: formData.phone,
			role: formData.role,
			gender: formData.gender,
		};

		try {
			// if (
			// 	!formData.name ||
			// 	!formData.email ||
			// 	!formData.type ||
			// 	!formData.password ||
			// 	formData.password !== formData.confirm_password
			// ) {
			// 	throw new Error('Invalid form data');
			// }

			const { data: response } = await addEmployee(data);
			console.log(response);

			if (!response) {
				throw new Error('Hello! Something went wrong');
			}
			setFormData({
				business_id: '',
				name: '',
				email: '',
				phone: '',
				role: '',
				gender: 'Not Specified',
			});
		} catch ({ error }: any) {
			const errorMessage =
				error?.response?.data?.message || error?.message;
			console.error(errorMessage); // Log the error
		}
		setEmployeeAdded(true);
	};
	return (
		<Fragment>
			<div className='grid grid-cols-12 w-full h-full gap-6 py-5 px-10 overflow-hidden'>
				<div className='col-span-12 md:col-span-8 lg:col-span-6 pt-20'>
					<form className='flex flex-col gap-5'>
						<TextInput
							label={"Employee's Name"}
							onBlur={handleChange}
							name='name'
						/>
						<TextInput
							label={"Employee's Email Address"}
							onBlur={handleChange}
							name='email'
						/>
						<TextInput
							label={"Employee's Phone Number"}
							onBlur={handleChange}
							name='phone'
						/>
						<TextInput
							label={"Employee's Role"}
							onBlur={handleChange}
							name='role'
						/>
						<div className='mt-3'>
							<Button
								variant='primary'
								className='w-full'
								onClick={handleAddEmployee}
							>
								Add Employee
							</Button>
						</div>
					</form>
				</div>
			</div>
			<Modal isOpen={employeeAdded}>
				<div
					className='w-[504px] h-[504px] relative overflow-hidden rounded-xl bg-[#fffffe]'
					style={{
						boxShadow: '0px 12px 24px 0 rgba(0,0,0,0.1)',
					}}
				>
					<div className='w-[504px] h-[84px] absolute left-0 top-0 rounded-tl-xl rounded-tr-xl bg-[#fffffe] border-t-0 border-r-0 border-b border-l-0 border-[#e0e0e0]'>
						<p className='w-[300px] h-7 absolute left-[100px] top-8 text-xl font-bold text-center text-[#000001]'>
							Employee Added
						</p>
					</div>
					<svg
						width={132}
						height={132}
						viewBox='0 0 132 132'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='w-[132px] h-[132px] absolute left-[186px] top-36'
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
							d='M66.0006 107.667C89.0125 107.667 107.667 89.0119 107.667 66C107.667 42.9882 89.0125 24.3334 66.0006 24.3334C42.9888 24.3334 24.334 42.9882 24.334 66C24.334 89.0119 42.9888 107.667 66.0006 107.667Z'
							fill='#00B96B'
						/>
						<path
							d='M60.084 80.9167C59.2507 80.9167 58.459 80.5834 57.8757 80L46.084 68.2084C44.8757 67 44.8757 65 46.084 63.7917C47.2923 62.5834 49.2923 62.5834 50.5007 63.7917L60.084 73.375L81.5007 51.9584C82.709 50.75 84.709 50.75 85.9173 51.9584C87.1257 53.1667 87.1257 55.1667 85.9173 56.375L62.2923 80C61.709 80.5834 60.9173 80.9167 60.084 80.9167Z'
							fill='#FFFFFE'
						/>
					</svg>
					<div className='flex flex-col justify-center items-center absolute px-10 top-[388px] w-full overflow-hidden rounded-3xl'>
						<Button
							variant='primary'
							className='w-full'
							onClick={() => setEmployeeAdded(false)}
						>
							OK
						</Button>
					</div>
					<p className='w-[400px] absolute left-[52px] top-[308px] text-base text-center text-[#000001]'>
						You have successfully added a new employee to your
						business.
					</p>
				</div>
			</Modal>
		</Fragment>
	);
}
