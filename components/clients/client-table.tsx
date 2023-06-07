'use client';
import React, { useState } from 'react';
import ClientItem from './client-item';

export default function ClientTable({ selectedClients }: ClientTableProps) {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 20;

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const renderClients = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = currentPage * itemsPerPage;
		const clientsToShow = selectedClients.slice(startIndex, endIndex);

		return clientsToShow.map((client, index) => (
			<ClientItem
				key={index}
				fullName={client.fullName}
				jobTitle={client.jobTitle}
				phone={client.phone}
				email={client.email}
			/>
		));
	};

	const renderPagination = () => {
		const totalPages = Math.ceil(selectedClients.length / itemsPerPage);
		const visiblePages = Math.min(totalPages, 5);
		const pageNumbers = Array.from(
			{ length: visiblePages },
			(_, index) => index + 1
		);
		const currentPageIndex = currentPage - 1;

		const handlePreviousPage = () => {
			if (currentPage > 1) {
				setCurrentPage((prevPage) => prevPage - 1);
			}
		};

		const handleNextPage = () => {
			if (currentPage < totalPages) {
				setCurrentPage((prevPage) => prevPage + 1);
			}
		};

		let adjustedPageNumbers = pageNumbers;

		if (totalPages > visiblePages) {
			const maxOffset = totalPages - visiblePages;
			const middleIndex = Math.floor(visiblePages / 2);

			if (currentPageIndex >= maxOffset - middleIndex) {
				adjustedPageNumbers = Array.from(
					{ length: visiblePages },
					(_, index) => totalPages - visiblePages + index + 1
				);
			} else if (currentPageIndex > middleIndex) {
				const startIndex = currentPageIndex - middleIndex;
				adjustedPageNumbers = pageNumbers.map(
					(_, index) => startIndex + index + 1
				);
			}
		}

		return (
			<div className='flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1'>
				{/* previous page */}
				<svg
					width={44}
					height={44}
					viewBox='0 0 44 44'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-11 h-11 relative'
					preserveAspectRatio='xMidYMid meet'
					onClick={handlePreviousPage}
				>
					<path
						d='M23.9992 27.28L19.6526 22.9333C19.1392 22.42 19.1392 21.58 19.6526 21.0666L23.9992 16.72'
						stroke='#000001'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>

				{adjustedPageNumbers.map((pageNumber) => (
					<div
						key={pageNumber}
						className={`flex-grow-0 flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl ${
							pageNumber === currentPage
								? 'bg-black text-white'
								: 'text-gray-500'
						}`}
						onClick={() => handlePageChange(pageNumber)}
					>
						<p className='w-4 text-sm font-bold text-center'>
							{pageNumber}
						</p>
					</div>
				))}

				{/* next page */}
				<svg
					width={44}
					height={44}
					viewBox='0 0 44 44'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-grow-0 flex-shrink-0 w-11 h-11 relative'
					preserveAspectRatio='xMidYMid meet'
					onClick={handleNextPage}
				>
					<path
						d='M19.9395 27.2801L24.2861 22.9334C24.7995 22.4201 24.7995 21.5801 24.2861 21.0668L19.9395 16.7201'
						stroke='#000001'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</div>
		);
	};

	return (
		<div className='w-full'>
			<div className='grid grid-cols-4 py-3 mx-4 mb-5'>
				<div className='text-sm font-bold px-5'>Full Name</div>
				<div className='text-sm font-bold px-5'>Job Title</div>
				<div className='text-sm font-bold px-5'>Phone Number</div>
				<div className='text-sm font-bold px-5'>Email Address</div>
			</div>
			<div className='overflow-y-scroll h-[calc(100vh-340px)] py-2'>
				{renderClients()}
			</div>
			{/* Pagination */}
			<div className='flex justify-between items-center mx-4 py-2'>
				<p className='flex-grow-0 flex-shrink-0 text-sm text-left text-[#828282]'>
					{(currentPage - 1) * itemsPerPage + 1}-
					{Math.min(
						currentPage * itemsPerPage,
						selectedClients.length
					)}{' '}
					results of {selectedClients.length}
				</p>
				<div className='flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1'>
					{renderPagination()}
				</div>
			</div>
		</div>
	);
}
