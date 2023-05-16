'use client';
import React, { Fragment, useState, ChangeEvent } from 'react';
import Header from '@/components/dashboard/header';
import SearchBar from '@/components/dashboard/search-bar';
import EmployeeCard from '@/components/employee/employee-card';
import { EMPLOYEES_DETAILS } from '@/utils/data';
import { EmployeeDetails } from '@/utils/types';

interface EmployeesProps {}

export default function Employees(props: EmployeesProps) {
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [searchResults, setSearchResults] =
		useState<EmployeeDetails[]>(EMPLOYEES_DETAILS);

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const query = event.target.value.toLowerCase();
		setSearchQuery(query);

		const filteredResults = EMPLOYEES_DETAILS.filter(
			(employee) =>
				employee.name.toLowerCase().includes(query) ||
				employee.email.toLowerCase().includes(query) ||
				employee.position.toLowerCase().includes(query)
		);
		setSearchResults(filteredResults);
	};

	return (
		<Fragment>
			<Header
				profileImage='/img/avatar.jpeg'
				headerTitle='Employees'
				profileName='Da Civic'
				notificationCount={10}
			/>
			<SearchBar onChange={handleSearch} />
			<div className='grid grid-cols-12 w-full gap-6 px-2 py-5 overflow-hidden overflow-y-scroll'>
				{searchResults.map((employee) => (
					<EmployeeCard
						key={employee.id}
						name={employee.name}
						email={employee.email}
						position={employee.position}
						image={employee.image}
					/>
				))}
			</div>
		</Fragment>
	);
}
