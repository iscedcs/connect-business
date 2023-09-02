'use client';
import ExchangeContactButton from '@/components/profile/exchange-contact-button';
import ServiceCard from '@/components/profile/service-card';
import BlurImage from '@/components/shared/ui/blur-image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { formatName, splitArrayByLabel } from '@/utils/function-helpers';
import { useSearchParams } from 'next/navigation';
import React, { Fragment, useEffect, useState } from 'react';
import SingleContactCard from '@/components/profile/single-contact-card';
import MultipleContactCard from '@/components/profile/multiple-contact-card';
import { Skeleton } from '@/components/ui/skeleton';

export default function Connect() {
	const [data, setData] = useState<CardFullDataI | null>(null);
	const searchParams = useSearchParams();
	const id = searchParams.get('id');
	const type = searchParams.get('type');
	const apiUrl = `api/card?id=${id}&type=${type}`;

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(apiUrl);
				const data = await response.json();
				setData(data.data);
			} catch (error) {
				console.log('something went wrong!!!');
			}
		}
		fetchData();
	}, []);

	if (data) {
		const allServices = [
			...data?.business.services,
			...data?.card.services,
		];
		const allSocials: SocialFieldI[] = [
			...data?.business.features,
			...data?.card.fields,
		];
		const result: OutputObject = splitArrayByLabel(allSocials);
		// console.log(result);

		return (
			<Fragment>
				<div className='w-full h-[120px] xs:h-[192px] relative'>
					<div className='overflow-hidden rounded-t-2xl'>
						<BlurImage
							src={data.business.base_image}
							alt='header-image'
							width={1080}
							height={200}
							className='w-full h-[120px] xs:h-[192px] object-center object-cover'
						/>
					</div>
					<div className='flex flex-col justify-center items-center absolute top-3/4 p-5 md:p-10 left-1/2 -translate-x-1/2 gap-3 w-[92%] md:w-[80%] bg-white rounded-2xl shadow-mid overflow-hidden'>
						<div className='flex-grow-0 flex-shrink-0 w-[80px] md:w-[120px] h-[80px] md:h-[120px] overflow-hidden rounded-full bg-gradient-to-b from-black/0 via-black/100 to-black/100 p-[2px]'>
							<BlurImage
								className='w-full h-full rounded-full object-center object-cover'
								src={data.user.profile_image}
								alt='profile-image'
								height={110}
								width={110}
							/>
						</div>
						<div className='flex flex-col gap-2 justify-center items-center'>
							<p className='text-xl font-bold text-center'>
								{formatName(data.user.name)}
							</p>
							<p className='flex-grow-0 flex-shrink-0 text-xs text-center w-full'>
								{data.user.name}
								{data.user.job_title &&
									`| ${data.user.job_title}`}
							</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center mt-[80px] md:mt-[180px] text-center px-4 py-20 gap-5 md:gap-10'>
					<Tabs
						defaultValue='connect'
						className='w-full'
					>
						<TabsList className=''>
							<TabsTrigger
								className={`w-24`}
								// style={{
								// 	borderColor:
								// 		data.card.card.theme_color,
								// }}
								value='connect'
							>
								Connect
							</TabsTrigger>
							<TabsTrigger
								className={`w-24`}
								// style={{
								// 	borderColor:
								// 		data.card.card.theme_color,
								// }}
								value='about'
							>
								About
							</TabsTrigger>
						</TabsList>
						<TabsContent value='connect'>
							<div className='w-full'>
								<div className='w-screen flex flex-col justify-start py-2 lg:justify-center md:flex-row flex-wrap md:flex-nowrap h-[160px] md:h-fit gap-3 md:gap-5 overflow-x-scroll px-4 lg:px-10'>
									{Object.keys(result).map(
										(label, k) => {
											console.log(
												result[label]
											);
											if (
												result[label]
													.length > 1
											) {
												return (
													<MultipleContactCard
														key={k}
														socials={
															result[
																label
															]
														}
														label={
															label
														}
													/>
												);
											} else {
												return (
													<SingleContactCard
														key={k}
														href={
															result[
																label
															][0]
																.content ||
															''
														}
														label={
															label
														}
													/>
												);
											}
										}
									)}
								</div>
								{allServices.length > 0 && (
									<div className='flex flex-col gap-4 w-full'>
										<p className='font-bold'>
											Our Service
										</p>
										<div className='flex gap-3 flex-nowrap overflow-x-scroll pb-5 w-full'>
											{allServices.map(
												(service, k) => (
													<ServiceCard
														key={k}
														image={
															service.service_image
														}
														title={
															service.service_name
														}
														description={
															service.service_description
														}
														link={
															service.link
														}
													/>
												)
											)}
										</div>
									</div>
								)}
							</div>
						</TabsContent>
						<TabsContent value='about'>
							<div className='w-full'>
								<p className='flex-grow-0 flex-shrink-0 max-w-2xl text-base text-black'>
									{data.business.description}
								</p>
								<div className='flex gap-3 flex-nowrap overflow-x-scroll pb-5 w-full justify-start lg:justify-center'>
									{data.business.images.map(
										(i, k) => (
											<div
												className='w-60 shrink-0 overflow-hidden rounded-3xl'
												key={k}
											>
												<BlurImage
													src={i.url}
													className='max-w-72 h-96 rounded-3xl object-cover'
													alt='About 1'
													height={384}
													width={288}
												/>
											</div>
										)
									)}
								</div>
							</div>
						</TabsContent>
					</Tabs>

					<div className='fixed h-20 px-4  bottom-0 left-0 w-full flex gap-2 md:gap-10 justify-center items-center'>
						<div className='w-1/2 px-4 text-center py-3 max-w-[300px] text-[10px] bg-black text-white rounded-2xl'>
							Save Contact
						</div>
						<ExchangeContactButton />
					</div>
				</div>
			</Fragment>
		);
	} else {
		return (
			<Fragment>
				<div className='w-full h-[120px] xs:h-[192px] relative'>
					<div className='overflow-hidden rounded-t-2xl'>
						<Skeleton className='w-full h-[120px] xs:h-[192px] border border-gray-300 object-center object-cover' />
					</div>
					<div className='flex flex-col justify-center items-center absolute top-3/4 p-5 md:p-10 left-1/2 -translate-x-1/2 gap-3 w-[92%] md:w-[80%] bg-white rounded-2xl shadow-mid overflow-hidden'>
						<div className='flex-grow-0 flex-shrink-0 w-[80px] md:w-[120px] h-[80px] md:h-[120px] overflow-hidden rounded-full bg-gradient-to-b from-black/0 via-black/100 to-black/100 p-[2px]'>
							<Skeleton className='border border-gray-300 w-full h-full rounded-full object-center object-cover' />
						</div>
						<div className='flex flex-col gap-2 justify-center items-center'>
							<Skeleton className='border border-gray-300 h-6 w-32' />
							<Skeleton className='border border-gray-300 h-4 w-24' />
						</div>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center mt-[80px] md:mt-[180px] text-center px-4 py-20 gap-5 md:gap-10'>
					<Tabs
						defaultValue='connect'
						className='w-full'
					>
						<TabsList className='gap-2'>
							<Skeleton className='border border-gray-300 h-6 w-20' />
							<Skeleton className='border border-gray-300 h-6 w-20' />
						</TabsList>
						<div className='w-full'>
							<div className='w-full flex justify-center py-2 flex-wrap gap-3 md:gap-5 px-4'>
								{[1, 2, 3, 4, 5, 6, 7, 8].map((k) => {
									return (
										<Skeleton
											key={k}
											className='border border-gray-300 h-14 w-14 md:h-24 md:w-24'
										/>
									);
								})}
							</div>
							<div className='flex flex-col gap-4 w-full'>
								<p className='font-bold'>Our Service</p>
								<div className='flex gap-3 flex-nowrap overflow-x-scroll pb-5 w-full'>
									{[1, 2, 3, 4].map((k) => (
										<Skeleton
											key={k}
											className='flex-grow-0 flex-shrink-0 w-40 md:w-72 aspect-[3/4] rounded-2xl border border-gray-300'
										/>
									))}
								</div>
							</div>
						</div>
					</Tabs>

					{data && (
						<div className='fixed h-20 px-4  bottom-0 left-0 w-full flex gap-2 md:gap-10 justify-center items-center'>
							<div className='w-1/2 px-4 text-center py-3 max-w-[300px] text-[10px] bg-black text-white rounded-2xl'>
								Save Contact
							</div>
							<ExchangeContactButton />
						</div>
					)}
				</div>
			</Fragment>
		);
	}
}
