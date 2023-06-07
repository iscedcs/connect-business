import { useState, useRef, RefObject } from 'react';
import classNames from 'classnames';

const VerificationCodeValidationBox = ({
	onCodeComplete,
	error,
}: VerificationCodeValidationBoxProps) => {
	const [code, setCode] = useState<string[]>(['', '', '', '']);
	const refs: Record<string, RefObject<HTMLInputElement>> = {
		input1: useRef<HTMLInputElement>(null),
		input2: useRef<HTMLInputElement>(null),
		input3: useRef<HTMLInputElement>(null),
		input4: useRef<HTMLInputElement>(null),
	};

	const handleInputChange = (index: number, value: string) => {
		const newCode = [...code];
		newCode[index] = value;
		setCode(newCode);

		if (value !== '' && index < 3) {
			const nextInputRef = refs[
				`input${index + 2}`
			] as RefObject<HTMLInputElement>;

			if (nextInputRef && nextInputRef.current) {
				nextInputRef.current.focus();
			}
		} else if (value === '' && index > 0) {
			const prevInputRef = refs[
				`input${index}`
			] as RefObject<HTMLInputElement>;

			if (prevInputRef && prevInputRef.current) {
				prevInputRef.current.focus();
			}
		}

		if (newCode.every((digit) => digit !== '')) {
			const fullCode = newCode.join('');
			onCodeComplete(fullCode);
		}
	};

	const getInputClass = (index: number) => {
		return classNames(
			'w-20 h-20 text-[1.5rem] font-bold text-center border-b-2 rounded-lg active:border-b-[#007AFF] focus:border-b-[#007AFF] outline-none',
			{
				'border-blue-500': code[index] !== '',
			}
		);
	};

	return (
		<div className='flex space-x-4 max-w-[400px]'>
			<input
				className={getInputClass(0)}
				type='text'
				maxLength={1}
				value={code[0]}
				onChange={(e) => handleInputChange(0, e.target.value)}
				ref={refs.input1}
			/>
			<input
				className={getInputClass(1)}
				type='text'
				maxLength={1}
				value={code[1]}
				onChange={(e) => handleInputChange(1, e.target.value)}
				ref={refs.input2}
			/>
			<input
				className={getInputClass(2)}
				type='text'
				maxLength={1}
				value={code[2]}
				onChange={(e) => handleInputChange(2, e.target.value)}
				ref={refs.input3}
			/>
			<input
				className={getInputClass(3)}
				type='text'
				maxLength={1}
				value={code[3]}
				onChange={(e) => handleInputChange(3, e.target.value)}
				ref={refs.input4}
			/>
		</div>
	);
};

export default VerificationCodeValidationBox;
