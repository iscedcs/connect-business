'use client';
import React, { useState } from 'react';

export default function SelectInput({
	options,
	className,
	label,
	onSelect,
	name,
}: SelectInputProps) {
	const [showOptions, setShowOptions] = useState(false);
	const [selectedOption, setSelectedOption] = useState(options[0]);

	const handleOptionSelect = (option: string) => {
		setSelectedOption(option);
		setShowOptions(false);
		if (onSelect) {
			onSelect(option);
		}
	};

	return (
		<div className={`relative z-[10] ${className}`}>
			<div className='flex justify-start items-center flex-grow-0 flex-shrink-0 w-full h-14 gap-2 px-3 py-5 rounded-xl bg-gray-100/[0.32] border border-gray-100'>
				<div
					className='flex justify-between items-center w-full relative'
					onClick={() => setShowOptions(!showOptions)}
				>
					<div className='flex-grow-0 w-5/6 flex-shrink-0 h-10 relative'>
						<div className='flex flex-col justify-start items-start w-full h-10 absolute left-0 top-0 gap-1'>
							<p className='self-stretch flex-grow-1 flex-shrink-0 w-full h-3 text-xs text-left text-[#4f4f4f]'>
								{label}
							</p>
							<p className='self-stretch flex-grow-0 flex-shrink-0 w-full text-[14px] text-left text-black'>
								{selectedOption}
							</p>
						</div>
					</div>
					<div className='flex justify-start items-start flex-grow-0 flex-shrink-0'>
						<div
							className={`flex justify-start items-start flex-grow-0 flex-shrink-0 relative ${
								showOptions ? 'rotate-180' : ''
							}`}
						>
							<svg
								width={24}
								height={24}
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='transition-all duration-500 flex-grow-0 flex-shrink-0 w-6 h-6 relative'
								preserveAspectRatio='none'
							>
								<path
									d='M19.92 8.94995L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08002 8.94995'
									stroke='#292D32'
									strokeWidth='1.5'
									strokeMiterlimit={10}
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
			{showOptions && (
				<div className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-4 absolute bg-white border border-gray-100 w-full shadow-sm p-5'>
					{options.map((option, index) => (
						<div
							className='flex justify-start items-center flex-grow-0 flex-shrink-0 w-[292px] relative gap-2 p-2 rounded bg-[#fffffe]'
							key={index}
							onClick={() => handleOptionSelect(option)}
						>
							<p className='flex-grow-0 flex-shrink-0 w-[300px] text-sm text-left text-black'>
								<input
									type='radio'
									name={name}
									checked={option === selectedOption}
									value={option}
									readOnly
									className='mr-3 scale-150'
								/>
								{option}
							</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
