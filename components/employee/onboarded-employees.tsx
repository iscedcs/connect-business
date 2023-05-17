import { EmployeeDetails } from '@/utils/types';
import React from 'react';
import EmployeeCard from './employee-card';

interface OnboardedEmployeesProps {
	searchResults: EmployeeDetails[];
	handleCardClick: any;
}

export default function WaitlistedEmployees({
	searchResults,
	handleCardClick,
}: OnboardedEmployeesProps) {
	const isEmpty = searchResults.length === 0;
	const sortedResults = searchResults.sort((a, b) =>
		a.name.localeCompare(b.name)
	);

	return (
		<div className='grid grid-cols-12 w-full gap-6 px-2 py-5 overflow-hidden overflow-y-scroll'>
			{!isEmpty ? (
				sortedResults.map((employee) => (
					<EmployeeCard
						key={employee.id}
						name={employee.name}
						email={employee.email}
						position={employee.position}
						image={employee.image}
						onClick={() => handleCardClick(employee)}
						status={employee.status}
					/>
				))
			) : (
				<div className='text-center text-2xl text-gray-500 col-span-12'>
					No employees found
				</div>
			)}
		</div>
	);
}
