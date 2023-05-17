import React, { useState } from 'react';

interface Button {
	id: string;
	label: string;
	className?: string;
	onClick?: () => void;
}

interface EmployeesButtonGroupProps {
	buttons: Button[];
}

const EmployeesButtonGroup: React.FC<EmployeesButtonGroupProps> = ({
	buttons,
}) => {
	const [activeButton, setActiveButton] = useState<string>(buttons[0].id);

	const handleButtonClick = (buttonId: string, onClick?: () => void) => {
		setActiveButton(buttonId);
		if (onClick) {
			onClick();
		}
	};

	return (
		<div className='flex-grow w-full h-10'>
			<div className='flex justify-start items-center h-10 flex-grow-0 flex-shrink-0 relative gap-3 lg:gap-6'>
				{buttons.map((button) => (
					<button
						key={button.id}
						id={button.id}
						className={`flex-grow-0 flex-shrink-0 min-w-min text-tiny lg:text-base xl:text-lg text-center h-10 ${
							activeButton === button.id
								? 'text-black border-b-2 border-black font-semibold'
								: 'text-gray-500'
						} ${button.className || ''}`}
						onClick={() =>
							handleButtonClick(button.id, button.onClick)
						}
					>
						{button.label}
					</button>
				))}
			</div>
			<div
				className={`border-b-2 border-black absolute bottom-0 left-0 transition-all duration-300 ${
					activeButton !== buttons[0].id
						? 'transform translate-x-full'
						: ''
				}`}
			></div>
		</div>
	);
};

export default EmployeesButtonGroup;
