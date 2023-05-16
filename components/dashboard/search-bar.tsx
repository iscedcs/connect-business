import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import EmployeesButtonGroup from './employee-button-group';

interface SearchBarProps {
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function SearchBar({ onChange }: SearchBarProps) {
	const pathName = usePathname();
	const buttons = [
		{
			id: 'onboardedBtn',
			label: 'Onboarded Employees',
			onClick: () => alert('Onboarded Button Clicked'),
		},
		{
			id: 'waitlistedBtn',
			label: 'Waitlisted Employees',
			onClick: () => alert('Waitlisted Button Clicked'),
		},
	];

	return (
		<div className='flex justify-end items-center w-full gap-6'>
			{pathName === '/dashboard/employees' && (
				<EmployeesButtonGroup buttons={buttons} />
			)}
			<div className='flex-grow-0 flex-shrink-0 w-[180px] h-10 rounded-full bg-black'>
				<Link
					className='w-full h-full flex items-center justify-center'
					href={'/dashboard/add-employee'}
				>
					<p className='text-sm font-bold text-center text-white'>
						Add Employee
					</p>
				</Link>
			</div>
			<div className='flex-grow-0 flex-shrink-0 w-[300px] h-10 overflow-hidden rounded-xl border border-black'>
				<div className='flex justify-between items-center relative gap-[196px]'>
					<input
						className='w-full h-10 text-sm text-start pl-4 pr-10 outline-none shadow-mw'
						placeholder='Search'
						name='search bar'
						spellCheck={false}
						data-ms-editor={true}
						onChange={onChange}
					/>
					<button
						className='absolute w-8 h-8 right-0'
						// onClick={on}
					>
						<svg
							width={16}
							height={16}
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='flex-grow-0 flex-shrink-0 w-4 h-4'
							preserveAspectRatio='xMidYMid meet'
						>
							<path
								d='M7.66732 14C11.1651 14 14.0007 11.1644 14.0007 7.66665C14.0007 4.16884 11.1651 1.33331 7.66732 1.33331C4.16951 1.33331 1.33398 4.16884 1.33398 7.66665C1.33398 11.1644 4.16951 14 7.66732 14Z'
								stroke='#000001'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M14.6673 14.6666L13.334 13.3333'
								stroke='#000001'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}
