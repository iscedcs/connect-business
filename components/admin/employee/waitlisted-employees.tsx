import React from 'react';
import EmployeeCard from './employee-card';

export default function WaitlistedEmployees({
	searchResults,
	handleCardClick,
	handleDelete,
	handleOnboard,
}: OnboardedEmployeesProps) {
	const isEmpty = searchResults.length === 0;

	const sortedResults = searchResults.sort((a, b) =>
		a.name.localeCompare(b.name)
	);
	return (
		<div className='grid grid-cols-12 w-full gap-6 px-2 py-5 overflow-hidden overflow-y-scroll'>
			{!isEmpty ? (
				sortedResults.map((member, index) => (
					<EmployeeCard
						key={member.member_id}
						name={member.name}
						email={member.email}
						position={member.role}
						image={member.image}
						onClick={() => handleCardClick(member)}
						waitlist={member.waitlist}
						onDelete={() => handleDelete(member.member_id)}
						onOnboard={() =>
							handleOnboard(
								member.member_id!,
								member.waitlist
							)
						}
						index={index}
						deleted={member.deleted}
					/>
				))
			) : (
				<div className='text-center text-2xl text-gray-500 col-span-12 min-h-[300px] flex items-center justify-center'>
					No New Employees, Add New Employess In The Add
					Employees Section Section
				</div>
			)}
		</div>
	);
}
