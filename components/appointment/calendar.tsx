'use client';
import React, { useState } from 'react';
import Modal from '../layouts/modal';
import AppointmentListItem from './appointment-list-item';

const Calendar: React.FC<CalendarProps> = ({
	onSelectDate,
	type,
	appointmentList,
}) => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [currentDate, setCurrentDate] = useState(new Date());
	const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
	const [iscActive, setIsActive] = useState(true);
	const [showEventListModal, setShowEventListModal] = useState(false);
	const [showAddEventModal, setShowAddEventModal] = useState(false);

	const handleMonthChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const selectedMonth = parseInt(event.target.value);
		setCurrentMonth(selectedMonth);
		const updatedDate = new Date(
			currentDate.getFullYear(),
			selectedMonth
		);
		setCurrentDate(updatedDate);
	};

	const handleDateClick = (date: Date) => {
		setSelectedDate(date);

		// Check if the clicked date has an event
		const hasEvent = appointmentList.some(
			(event) =>
				new Date(event.start).toDateString() ===
					date.toDateString() ||
				(new Date(event.start) <= date &&
					new Date(event.end) >= date)
		);

		if (hasEvent) {
			setShowEventListModal(true);
		} else {
			// Show modal to add event for the clicked date
			setShowAddEventModal(true);
		}

		!hasEvent && onSelectDate && onSelectDate(date);
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
		const daysInNextMonth = 35 - (firstDayOfWeek + daysInMonth);

		// Add days from previous month
		for (let i = firstDayOfWeek - 1; i >= 0; i--) {
			const day = daysInPrevMonth - i;
			const date = new Date(year, month - 1, day);
			const hasAppointment = hasAppointmentOnDate(date);

			calendarGrid.push(
				<div
					key={`prev-${day}`}
					className={`${
						hasAppointment ? 'bg-black text-white' : ''
					} text-gray-400 cursor-pointer flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-6 w-6 relative p-2 lg:p-4 m-1 rounded-full hover:bg-black/20 transition-colors duration-500`}
					onClick={() => handleDateClick(date)}
				>
					{day}
				</div>
			);
		}

		// Add days from current month
		for (let day = 1; day <= daysInMonth; day++) {
			const date = new Date(year, month, day);
			const hasAppointment = hasAppointmentOnDate(date);
			const isSelected =
				selectedDate &&
				date.toDateString() === selectedDate.toDateString();
			const isToday =
				date.toDateString() === new Date().toDateString();

			calendarGrid.push(
				<div
					key={date.toISOString()}
					className={`cursor-pointer ${
						isSelected || isToday
							? 'bg-black text-white border-2 border-blue-500'
							: ''
					} ${
						hasAppointment ? 'bg-black text-white' : ''
					} flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-6 w-6 relative p-2 lg:p-4 m-1 rounded-full hover:bg-black/20 transition-colors duration-500`}
					onClick={() => handleDateClick(date)}
				>
					{day}
				</div>
			);
		}

		// Add days from next month
		for (let day = 1; day <= daysInNextMonth; day++) {
			const date = new Date(year, month + 1, day);
			const hasAppointment = hasAppointmentOnDate(date);

			calendarGrid.push(
				<div
					key={`next-${day}`}
					className={`${
						hasAppointment ? 'bg-black text-white' : ''
					} text-gray-400 cursor-pointer flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-6 w-6 relative p-2 lg:p-4 m-1 rounded-full hover:bg-black/20 transition-colors duration-500`}
					onClick={() => handleDateClick(date)}
				>
					{day}
				</div>
			);
		}

		return calendarGrid;
	};

	const hasAppointmentOnDate = (date: Date) => {
		return appointmentList.some((event) => {
			const eventStartDate = new Date(event.start);
			const eventEndDate = new Date(event.end);
			return (
				eventStartDate.toDateString() === date.toDateString() ||
				(eventStartDate <= date && eventEndDate >= date)
			);
		});
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

	const EventListModal: React.FC<{
		date: Date;
		events: CalendarEvent[];
	}> = ({ date, events }) => {
		return (
			<Modal isOpen={showEventListModal}>
				<div className='bg-white w-[500px] flex flex-col gap-3 justify-between rounded-lg shadow-mid p-4 md:p-10'>
					<h2>Event List for {date.toDateString()}</h2>
					{events.map((event, index) => (
						<AppointmentListItem
							key={index}
							creator={event.creator}
							title={event.title}
							date={event.start}
							endDate={event.end}
							location={event.location}
							description={event.description}
							attendees={event.attendees}
						/>
					))}
					<button onClick={() => setShowEventListModal(false)}>
						Close
					</button>
				</div>
			</Modal>
		);
	};

	if (type === 'small') {
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
						<div className='text-center text-gray-400'>
							Su
						</div>
						<div className='text-center text-gray-400'>
							Mo
						</div>
						<div className='text-center text-gray-400'>
							Tu
						</div>
						<div className='text-center text-gray-400'>
							We
						</div>
						<div className='text-center text-gray-400'>
							Th
						</div>
						<div className='text-center text-gray-400'>
							Fr
						</div>
						<div className='text-center text-gray-400'>
							Sa
						</div>
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
	} else {
		return (
			<div className='px-2'>
				<div className='grid grid-cols-7 gap-2 text-tiny shadow-mid rounded-lg p-5 lg:p-10'>
					<div className='col-span-7 flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative p-1 mb-5'>
						<select
							className='flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-black outline-none'
							value={currentMonth}
							onChange={handleMonthChange}
						>
							<option value='0'>January</option>
							<option value='1'>February</option>
							<option value='2'>March</option>
							<option value='3'>April</option>
							<option value='4'>May</option>
							<option value='5'>June</option>
							<option value='6'>July</option>
							<option value='7'>August</option>
							<option value='8'>September</option>
							<option value='9'>October</option>
							<option value='10'>November</option>
							<option value='11'>December</option>
						</select>
						<button
							onClick={handleTodayClick}
							className='flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-black outline-none'
						>
							TODAY
						</button>
					</div>
					<div className='col-span-7 grid grid-cols-7 pb-2 mb-2'>
						<div className={`p-3 w-min `}>Sun</div>
						<div className={`p-3 w-min `}>Mon</div>
						<div className={`p-3 w-min `}>Tue</div>
						<div
							className={`p-3 w-min ${
								iscActive && 'border-b-2 border-black'
							}`}
						>
							Wed
						</div>
						<div className={`p-3 w-min`}>Thu</div>
						<div className={`p-3 w-min`}>Fri</div>
						<div className={`p-3 w-min`}>Sat</div>
					</div>
					<div className='col-span-7 grid grid-cols-7 lg:gap-4'>
						{generateCalendarGrid()}
					</div>
				</div>
				{showEventListModal && selectedDate && (
					<EventListModal
						date={selectedDate}
						events={appointmentList.filter(
							(event) =>
								new Date(event.start).toDateString() ===
									selectedDate.toDateString() ||
								(new Date(event.start) <=
									selectedDate &&
									new Date(event.end) >=
										selectedDate)
						)}
					/>
				)}
			</div>
		);
	}
};

export default Calendar;
