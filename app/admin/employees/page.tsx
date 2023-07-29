'use client';
import React, { Fragment, useState, ChangeEvent } from 'react';
import { COMPANY_PROFILE } from '@/utils/data';
import Modal from '@/components/layouts/modal';
import BlurImage from '@/components/shared/ui/blur-image';
import EmployeesButtonGroup from '@/components/admin/employee/employee-button-group';
import SearchBar from '@/components/admin/search-bar';
import WaitlistedEmployees from '@/components/admin/employee/waitlisted-employees';
import OnboardedEmployees from '@/components/admin/employee/onboarded-employees';

export default function Employees(props: EmployeesProps) {
	const [activeTab, setActiveTab] = useState<string>('onboarded');
	const [selectedEmployee, setSelectedEmployee] =
		useState<EmployeeDetails | null>(null);

	const [profileModalOpen, setprofileModalOpen] = useState<boolean>(false);
	const [profileDeleteOpen, setprofileDeleteOpen] = useState<boolean>(false);
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [searchResults, setSearchResults] = useState<EmployeeDetails[]>(
		COMPANY_PROFILE.employees
	);

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const query = event.target.value.toLowerCase();
		setSearchQuery(query);

		const filteredResults = COMPANY_PROFILE.employees.filter(
			(employee) =>
				employee.name.toLowerCase().includes(query) ||
				employee.email.toLowerCase().includes(query) ||
				employee.position.toLowerCase().includes(query)
		);
		setSearchResults(filteredResults);
	};

	const handleSetActiveTab = (tab: string) => {
		setActiveTab(tab);
	};

	const handleCloseModal = () => {
		setprofileModalOpen(false);
	};

	const handleDeleteModal = () => {
		setprofileDeleteOpen(true);
		setprofileModalOpen(false);
	};

	const handleCloseDeleteModal = () => {
		setprofileDeleteOpen(false);
	};

	const handleDelete = () => {
		alert('Deleted');
		setprofileDeleteOpen(false);
	};

	const handleCardClick = (employee: EmployeeDetails) => {
		setSelectedEmployee(employee);
		setprofileModalOpen(!profileModalOpen);
	};
	const onboardedEmployees = searchResults.filter(
		(employee) => employee.status === 'onboarded'
	);
	const waitlistedEmployees = searchResults.filter(
		(employee) => employee.status === 'waitlisted'
	);

	let buttons = [
		{
			id: 'onboardedBtn',
			label: 'Onboarded Employees',
			onClick: () =>
				handleSetActiveTab && handleSetActiveTab('onboarded'),
		},
		{
			id: 'waitlistedBtn',
			label: 'Waitlisted Employees',
			onClick: () =>
				handleSetActiveTab && handleSetActiveTab('waitlisted'),
		},
	];

	return (
		<Fragment>
			<div className='flex flex-col md:flex-row justify-between items-center px-4 md:px-10 gap-6'>
				<EmployeesButtonGroup buttons={buttons} />
				<SearchBar
					onChange={handleSearch}
					showAddEmployee
				/>
			</div>
			{activeTab === 'onboarded' && (
				<OnboardedEmployees
					handleCardClick={handleCardClick}
					searchResults={onboardedEmployees}
					handleDelete={handleDeleteModal}
				/>
			)}
			{activeTab === 'waitlisted' && (
				<WaitlistedEmployees
					handleCardClick={handleCardClick}
					searchResults={waitlistedEmployees}
					handleDelete={handleDeleteModal}
				/>
			)}
			<Modal isOpen={profileModalOpen}>
				{selectedEmployee && (
					<div className='bg-white rounded-lg w-[600px] shadow-mid'>
						<div className='flex justify-center items-center w-full h-16 border-b text-large font-bold relative'>
							<button
								onClick={handleCloseModal}
								className='w-16 h-16 rounded-full absolute left-0 top-0 px-6'
							>
								<svg
									width={24}
									height={24}
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									preserveAspectRatio='none'
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
							</button>
							Profile
						</div>
						<div className='flex flex-col w-full gap-6 md:gap-12 px-4 md:px-10 pt-4 pb-10'>
							<div className='mx-auto'>
								<div className='flex flex-col justify-center items-center gap-4 cursor-pointer'>
									<div className='bg-gradient-to-b from-white to-black p-[2px] h-[90px] md:h-[120px] w-[90px] md:w-[120px] rounded-full overflow-hidden'>
										{selectedEmployee.image ? (
											<BlurImage
												height={120}
												width={120}
												className='flex-grow-0 bg-white flex-shrink-0 object-cover object-top rounded-full h-[85px] md:h-[115px] w-[85px] md:w-[115px]'
												src={
													selectedEmployee.image
												}
												alt='profile'
											/>
										) : (
											<div
												className={`h-[85px] md:h-[115px] w-[85px] md:w-[115px] bg-white flex items-center justify-center rounded-full`}
											>
												<svg
													width='50'
													height='50'
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
									<div className='flex flex-col justify-center items-center flex-grow-0 flex-shrink-0'>
										<p className='w-full text-lg md:text-xl font-bold text-center text-[#000001]'>
											{selectedEmployee.name}
										</p>
									</div>
								</div>
							</div>
							<div className='flex flex-col gap-4'>
								<div className='flex flex-col justify-center items-center gap-6'>
									<div className='w-full border-b pb-3 flex justify-between text-sm gap-2'>
										<div className=''>Role</div>
										<div className='font-semibold max-w-sm'>
											{selectedEmployee.name}
										</div>
									</div>
									<div className='w-full border-b pb-3 flex justify-between text-sm gap-2'>
										<div className=''>
											Email Address
										</div>
										<div className='font-semibold max-w-sm'>
											{selectedEmployee.email}
										</div>
									</div>
									<div className='w-full border-b pb-3 flex justify-between text-sm gap-2'>
										<div className=''>
											Phone Number
										</div>
										<div className='font-semibold max-w-sm'>
											{selectedEmployee.phone}
										</div>
									</div>
									<div className='w-full border-b pb-3 flex justify-between text-sm gap-2'>
										<div className=''>Gender</div>
										<div className='font-semibold max-w-sm'>
											{selectedEmployee.gender}
										</div>
									</div>
									<div className='w-full border-b pb-3 flex justify-between text-sm gap-2'>
										<div className=''>
											Home Address
										</div>
										<div className='font-semibold max-w-sm'>
											{
												selectedEmployee.address
											}
										</div>
									</div>
								</div>
								{selectedEmployee.status ===
									'waitlisted' && (
									<div className='flex justify-evenly'>
										<button
											onClick={
												handleDeleteModal
											}
											className='min-w-min text-red-500 capitalize px-5 py-2 rounded-full text-[10px] lg:text-base font-semibold '
										>
											delete employee
										</button>
										<button className='min-w-min text-white capitalize px-5 py-2 rounded-full text-[10px] lg:text-base font-semibold bg-black'>
											confirm employee
										</button>
									</div>
								)}
							</div>
						</div>
					</div>
				)}
			</Modal>
			<Modal isOpen={profileDeleteOpen}>
				<div className='bg-white rounded-lg max-w-[600px] shadow-mid'>
					<div className='flex justify-center items-center w-full h-16 border-b text-large font-bold relative'>
						<button
							onClick={handleCloseDeleteModal}
							className='w-16 h-16 rounded-full absolute left-0 top-0 px-6'
						>
							<svg
								width={24}
								height={24}
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								preserveAspectRatio='none'
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
						</button>
						Delete Profile
					</div>
					<div className='flex flex-col gap-6 md:gap-12 px-4 md:px-10 pt-4 pb-10'>
						<div className='flex flex-col gap-4'>
							<div className='flex flex-col justify-center items-center py-24'>
								Are you sure you want to delete this
								profile?
							</div>
							<div className='flex flex-col items-center gap-3'>
								<button
									onClick={handleDelete}
									className='w-[200px] bg-red-700 text-white capitalize px-5 py-2 rounded-full font-semibold'
								>
									delete profile
								</button>
								<button
									onClick={handleCloseDeleteModal}
									className='min-w-min capitalize px-5 py-2 rounded-full font-semibold'
								>
									Cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</Fragment>
	);
}
