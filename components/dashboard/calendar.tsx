import React, { useState } from 'react';

interface CalendarProps {
	onSelectDate?: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onSelectDate }) => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [currentDate, setCurrentDate] = useState(new Date());

	const handleDateClick = (date: Date) => {
		setSelectedDate(date);
		onSelectDate && onSelectDate(date);
	};

	const handlePreviousClick = () => {
		const previousMonth = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth() - 1
		);
		setCurrentDate(previousMonth);
	};

	const handleNextClick = () => {
		const nextMonth = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth() + 1
		);
		setCurrentDate(nextMonth);
	};

	const handleTodayClick = () => {
		setCurrentDate(new Date());
		setSelectedDate(null);
	};

	const generateCalendarGrid = () => {
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth();
		const daysInMonth = new Date(year, month + 1, 0).getDate();
		const firstDayOfWeek = new Date(year, month, 1).getDay();

		const calendarGrid = [];
		const daysInPrevMonth = new Date(year, month, 0).getDate();
		const daysInNextMonth = 42 - (firstDayOfWeek + daysInMonth);

		// Add days from previous month
		for (let i = firstDayOfWeek - 1; i >= 0; i--) {
			const day = daysInPrevMonth - i;
			const date = new Date(year, month - 1, day);

			calendarGrid.push(
				<div
					key={`prev-${day}`}
					className='text-gray-400 cursor-pointer flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-6 w-6 relative p-2 rounded-full hover:bg-black/20 transition-colors duration-500'
					onClick={() => handleDateClick(date)}
				>
					{day}
				</div>
			);
		}

		// Add days from current month
		for (let day = 1; day <= daysInMonth; day++) {
			const date = new Date(year, month, day);
			const isSelected =
				selectedDate &&
				date.toDateString() === selectedDate.toDateString();
			const isToday =
				date.toDateString() === new Date().toDateString();

			calendarGrid.push(
				<div
					key={date.toISOString()}
					className={`cursor-pointer ${
						isSelected || isToday ? 'bg-black text-white' : ''
					}  flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-6 w-6 relative p-2 rounded-full hover:bg-black/20 transition-colors duration-500`}
					onClick={() => handleDateClick(date)}
				>
					{day}
				</div>
			);
		}

		// Add days from next month
		for (let day = 1; day <= daysInNextMonth; day++) {
			const date = new Date(year, month + 1, day);

			calendarGrid.push(
				<div
					key={`next-${day}`}
					className='text-gray-400 cursor-pointer flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-6 w-6 relative p-2 rounded-full hover:bg-black/20 transition-colors duration-500'
					onClick={() => handleDateClick(date)}
				>
					{day}
				</div>
			);
		}

		return calendarGrid;
	};

	const getMonthName = (month: number) => {
		const monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		return monthNames[month];
	};

	return (
		<div>
			<div className='grid grid-cols-7 gap-2 text-tiny'>
				<div className='col-span-7 flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative p-1'>
					<button onClick={handlePreviousClick}>
						<svg
							width={16}
							height={16}
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='flex-grow-0 flex-shrink-0 w-4 h-4 relative'
							preserveAspectRatio='xMidYMid meet'
						>
							<path
								d='M9.99925 13.28L5.65258 8.9333C5.13924 8.41997 5.13924 7.57997 5.65258 7.06664L9.99925 2.71997'
								stroke='#000001'
								strokeWidth='1.5'
								strokeMiterlimit={10}
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
					<div className='flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-black'>
						{getMonthName(currentDate.getMonth())}{' '}
						{currentDate.getFullYear()}
					</div>
					<button onClick={handleNextClick}>
						<svg
							width={16}
							height={16}
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='flex-grow-0 flex-shrink-0 w-4 h-4 relative'
							preserveAspectRatio='xMidYMid meet'
						>
							<path
								d='M6.00075 13.28L10.3474 8.9333C10.8608 8.41997 10.8608 7.57997 10.3474 7.06664L6.00075 2.71997'
								stroke='#000001'
								strokeWidth='1.5'
								strokeMiterlimit={10}
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
				</div>
				<div className='col-span-7 grid grid-cols-7 border-b pb-2 mb-2'>
					<div className='text-center text-gray-400'>Su</div>
					<div className='text-center text-gray-400'>Mo</div>
					<div className='text-center text-gray-400'>Tu</div>
					<div className='text-center text-gray-400'>We</div>
					<div className='text-center text-gray-400'>Th</div>
					<div className='text-center text-gray-400'>Fr</div>
					<div className='text-center text-gray-400'>Sa</div>
				</div>
				<div className='col-span-7 grid grid-cols-7'>
					{generateCalendarGrid()}
				</div>
				<button
					onClick={handleTodayClick}
					className='mx-auto col-span-7 px-3'
				>
					TODAY
				</button>
			</div>
		</div>
	);
};

export default Calendar;
