import React, { Fragment } from 'react';

export default function ProfileServices() {
	return (
		<Fragment>
			<div className='flex justify-center items-center relative gap-3'>
				<div
					className='flex-grow-0 flex-shrink-0 w-[280px] h-[368px] relative rounded-xl bg-[#fffffe]'
					style={{
						boxShadow:
							'4px 0px 20px 0 rgba(0,0,0,0.04), 0px 4px 24px 0 rgba(0,0,0,0.04)',
					}}
				>
					<div className="w-[280px] h-[304px] absolute left-0 top-0 rounded-tl rounded-tr bg-[url('/img/about-1.jpg')] bg-cover bg-no-repeat bg-center" />
					<div className='flex flex-col justify-start items-start w-[248px] absolute left-4 top-80 gap-2'>
						<p className='self-stretch flex-grow-0 flex-shrink-0 w-[248px] h-6 text-lg font-bold text-left text-[#000001]'>
							Event Planning
						</p>
					</div>
				</div>
				<div
					className='flex-grow-0 flex-shrink-0 w-[280px] h-[368px] relative rounded-xl bg-[#fffffe]'
					style={{
						boxShadow:
							'4px 0px 20px 0 rgba(0,0,0,0.04), 0px 4px 24px 0 rgba(0,0,0,0.04)',
					}}
				>
					<div className="w-[280px] h-[304px] absolute left-0 top-0 rounded-tl rounded-tr bg-[url('/img/about-1.jpg')] bg-cover bg-no-repeat bg-center" />
					<div className='flex flex-col justify-start items-start w-[248px] absolute left-4 top-80 gap-2'>
						<p className='self-stretch flex-grow-0 flex-shrink-0 w-[248px] h-6 text-lg font-bold text-left text-[#000001]'>
							Hall Rentals
						</p>
					</div>
				</div>
				<div
					className='flex-grow-0 flex-shrink-0 w-[280px] h-[368px] relative rounded-xl bg-[#fffffe]'
					style={{
						boxShadow:
							'4px 0px 20px 0 rgba(0,0,0,0.04), 0px 4px 24px 0 rgba(0,0,0,0.04)',
					}}
				>
					<div className="w-[280px] h-[304px] absolute left-0 top-0 rounded-tl rounded-tr bg-[url('/img/about-1.jpg')] bg-cover bg-no-repeat bg-center" />
					<div className='flex flex-col justify-start items-start w-[248px] absolute left-4 top-80 gap-2'>
						<p className='self-stretch flex-grow-0 flex-shrink-0 w-[248px] h-6 text-lg font-bold text-left text-[#000001]'>
							Event Hosting
						</p>
					</div>
				</div>
				<div
					className='flex-grow-0 flex-shrink-0 w-[280px] h-[368px] relative rounded-xl bg-[#fffffe]'
					style={{
						boxShadow:
							'4px 0px 20px 0 rgba(0,0,0,0.04), 0px 4px 24px 0 rgba(0,0,0,0.04)',
					}}
				>
					<div className="w-[280px] h-[368px] absolute left-0 top-0 rounded-tl rounded-tr bg-[url('/img/about-1.jpg')] bg-cover bg-no-repeat bg-center">
						<div className='w-[280px] h-[368px] absolute left-4 top-4 rounded bg-[#000001]/[0.68]'>
							<div className='flex flex-col justify-start items-start w-[248px] absolute left-4 top-10 gap-2'>
								<p className='self-stretch flex-grow-0 flex-shrink-0 w-[248px] h-6 text-lg font-bold text-left text-[#fffffe]'>
									Event Materials
								</p>
								<div className='flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3'>
									<p className='self-stretch flex-grow-0 flex-shrink-0 w-[248px] text-base text-left text-[#fffffe]'>
										We provide the best planners
										and materials suited to meet
										all your occasions including
										birthdays, bridal and baby
										showers, wedding, burial,
										house opening events and lots
										more.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
