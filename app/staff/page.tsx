import Appointment from '@/components/admin/appointment/appointment';

export default function Dashboard() {
	const appointmentsData = [
		{ date: '2023-07-31', appointments: 5 },
		{ date: '2023-08-01', appointments: 5 },
		{ date: '2023-08-02', appointments: 10 },
		{ date: '2023-08-03', appointments: 2 },
		{ date: '2023-08-04', appointments: 6 },
		{ date: '2023-08-05', appointments: 8 },
		{ date: '2023-08-06', appointments: 20 },
		{ date: '2023-08-07', appointments: 7 },
		// ... more data
	];

	return (
		<div className='px-4 md:px-10'>
			<div className='grid grid-cols-12 gap-6 overflow-hidden mt-5'>
				<div className='col-span-12 md:col-span-6 lg:col-span-8 xl:col-span-9 overflow-hidden overflow-y-scroll'>
					<div className='flex flex-col border border-gray-200 rounded-2xl p-8 shadow-mid'>
						<div className='flex items-center justify-between'>
							<div className='font-bold uppercase'>
								Appointment
							</div>
							<div className=''>This Week</div>
						</div>
						<div className='min-h-32 w-full min-w-[300px] bg-gray-50'>
							<div className='w-[744px] h-80 relative overflow-hidden rounded-lg bg-[#f2f2f2]/[0.32]'>
								<div className='flex flex-col justify-start items-start absolute left-7 top-10 gap-6'>
									<div className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-8'>
										<p className='flex-grow-0 flex-shrink-0 w-3 h-4 text-xs text-center text-[#000001]'>
											5
										</p>
										<p className='flex-grow-0 flex-shrink-0 w-3 h-4 text-xs text-center text-[#000001]'>
											4
										</p>
										<p className='flex-grow-0 flex-shrink-0 w-3 h-4 text-xs text-center text-[#000001]'>
											3
										</p>
										<p className='flex-grow-0 flex-shrink-0 w-3 h-4 text-xs text-center text-[#000001]'>
											2
										</p>
										<p className='flex-grow-0 flex-shrink-0 w-3 h-4 text-xs text-center text-[#000001]'>
											1
										</p>
									</div>
								</div>
								<div className='flex justify-start items-start absolute left-[68px] top-[108px] gap-[92px]'>
									<div className='flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[180px] relative gap-4'>
										<svg
											width={2}
											height={140}
											viewBox='0 0 2 140'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
											className='flex-grow-0 flex-shrink-0'
											preserveAspectRatio='none'
										>
											<line
												x1={1}
												x2={1}
												y2={140}
												stroke='#F2F2F2'
												stroke-width={2}
											/>
										</svg>
										<p className='flex-grow-0 flex-shrink-0 w-3 h-5 text-xs text-center text-[#000001]'>
											S
										</p>
									</div>
									<div className='flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[180px] relative gap-4'>
										<svg
											width={2}
											height={140}
											viewBox='0 0 2 140'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
											className='flex-grow-0 flex-shrink-0'
											preserveAspectRatio='none'
										>
											<line
												x1={1}
												x2={1}
												y2={140}
												stroke='#F2F2F2'
												stroke-width={2}
											/>
										</svg>
										<p className='flex-grow-0 flex-shrink-0 w-3 h-5 text-xs text-center text-[#000001]'>
											M
										</p>
									</div>
									<div className='flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[180px] relative gap-4'>
										<svg
											width={2}
											height={140}
											viewBox='0 0 2 140'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
											className='flex-grow-0 flex-shrink-0'
											preserveAspectRatio='none'
										>
											<line
												x1={1}
												x2={1}
												y2={140}
												stroke='#F2F2F2'
												stroke-width={2}
											/>
										</svg>
										<p className='flex-grow-0 flex-shrink-0 w-3 h-5 text-xs text-center text-[#000001]'>
											T
										</p>
									</div>
									<div className='flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[180px] relative gap-4'>
										<svg
											width={2}
											height={140}
											viewBox='0 0 2 140'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
											className='flex-grow-0 flex-shrink-0'
											preserveAspectRatio='none'
										>
											<line
												x1={1}
												x2={1}
												y2={140}
												stroke='#F2F2F2'
												stroke-width={2}
											/>
										</svg>
										<p className='flex-grow-0 flex-shrink-0 w-3 h-5 text-xs text-center text-[#000001]'>
											W
										</p>
									</div>
									<div className='flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[180px] relative gap-4'>
										<svg
											width={2}
											height={140}
											viewBox='0 0 2 140'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
											className='flex-grow-0 flex-shrink-0'
											preserveAspectRatio='none'
										>
											<line
												x1={1}
												x2={1}
												y2={140}
												stroke='#F2F2F2'
												stroke-width={2}
											/>
										</svg>
										<p className='flex-grow-0 flex-shrink-0 w-3 h-5 text-xs text-center text-[#000001]'>
											T
										</p>
									</div>
									<div className='flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[180px] relative gap-4'>
										<svg
											width={2}
											height={140}
											viewBox='0 0 2 140'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
											className='flex-grow-0 flex-shrink-0'
											preserveAspectRatio='none'
										>
											<line
												x1={1}
												x2={1}
												y2={140}
												stroke='#F2F2F2'
												stroke-width={2}
											/>
										</svg>
										<p className='flex-grow-0 flex-shrink-0 w-3 h-5 text-xs text-center text-[#000001]'>
											F
										</p>
									</div>
									<div className='flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[180px] relative gap-4'>
										<svg
											width={2}
											height={140}
											viewBox='0 0 2 140'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
											className='flex-grow-0 flex-shrink-0'
											preserveAspectRatio='none'
										>
											<line
												x1={1}
												x2={1}
												y2={140}
												stroke='#F2F2F2'
												stroke-width={2}
											/>
										</svg>
										<p className='flex-grow-0 flex-shrink-0 w-3 h-5 text-xs text-center text-[#000001]'>
											S
										</p>
									</div>
								</div>
								<svg
									width={652}
									height={202}
									viewBox='0 0 652 202'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='w-[628px] h-32 absolute left-[76px] top-10'
									preserveAspectRatio='none'
								>
									<g filter='url(#filter0_f_2001_22545)'>
										<path
											d='M14 188L102.427 141.22C110.607 136.893 120.396 136.887 128.581 141.203L201.656 179.737C203.875 180.907 206.242 181.774 208.692 182.313L215.433 183.799C226.889 186.323 238.705 181.438 245.033 171.561L302.293 82.1963C311.917 67.1762 332.945 64.8654 345.601 77.4372L421.533 152.863C430.099 161.372 443.156 163.432 453.926 157.972L529.433 119.691C534.605 117.069 540.464 116.118 546.2 116.968L638 130.576'
											stroke='#E0E0E0'
											stroke-width={4}
											stroke-linecap='round'
										/>
									</g>
									<path
										d='M14 167.31L103.728 110.137C113.769 103.74 126.756 104.391 136.107 111.76L198.945 161.286C212.642 172.081 232.77 167.863 240.98 152.476L297.677 46.2146C306.963 28.8115 330.852 26.2092 343.667 41.205L420.741 131.395C428.972 141.027 442.644 143.931 454.08 138.478L528.349 103.059C533.28 100.708 538.791 99.8498 544.203 100.591L638 113.445'
										stroke='#000001'
										stroke-width={4}
										stroke-linecap='round'
									/>
									{/* <defs>
										<filter
											id='filter0_f_2001_22545'
											x={0}
											y='55.3008'
											width={652}
											height='146.699'
											filterUnits='userSpaceOnUse'
											color-interpolation-filters='sRGB'
										>
											<feflood
												flood-opacity={0}
												result='BackgroundImageFix'
											/>
											<feblend
												mode='normal'
												in='SourceGraphic'
												in2='BackgroundImageFix'
												result='shape'
											/>
											<fegaussianblur
												stdDeviation={6}
												result='effect1_foregroundBlur_2001_22545'
											/>
										</filter>
									</defs> */}
								</svg>
							</div>
						</div>
					</div>
				</div>
				<Appointment />
			</div>
		</div>
	);
}
