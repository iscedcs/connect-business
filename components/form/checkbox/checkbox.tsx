'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { CheckboxProps } from '@/utils/types';

const Checkbox = ({ checked, onChange }: CheckboxProps) => {
	const [isChecked, setIsChecked] = useState<boolean>(checked);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = event.target;
		setIsChecked(checked);
		onChange && onChange(checked);
	};

	return (
		<div className='inline-block'>
			<label
				className='cursor-pointer'
				style={{ marginBottom: '8px' }}
			>
				<input
					type='checkbox'
					checked={isChecked}
					onChange={handleChange}
					style={{ display: 'none' }}
				/>
				<div className='hover:scale-110'>
					<Image
						src={
							isChecked
								? '/icons/checkbox-checked.svg'
								: '/icons/checkbox-unchecked.svg'
						}
						alt='Checkbox'
						height={24}
						width={24}
					/>
				</div>
			</label>
		</div>
	);
};

export default Checkbox;
