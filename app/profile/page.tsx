'use client';
import ExchangeContactButton from '@/components/profile/exchange-contact-button';
import TabMenu from '@/components/profile/profile-tabs';
import ServiceCard from '@/components/profile/service-card';
import BlurImage from '@/components/shared/ui/blur-image';
import Button from '@/components/shared/ui/button/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CARD_VIEW, CUSTOMER_TAB } from '@/utils/data';
import { formatName } from '@/utils/function-helpers';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { Fragment, useEffect, useState } from 'react';

export default function Connect() {
	const [data, setData] = useState<CardFullDataI | null>(null);
	const searchParams = useSearchParams();
	const id = searchParams.get('id');
	const type = searchParams.get('type');
	const apiUrl = `api/card?id=${id}&type=${type}`;
	console.log(apiUrl);
	console.log(data);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(apiUrl);
			const data = await response.json();
			setData(data.data);
		}

		fetchData();
	}, []);

	if (data) {
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
						defaultValue='account'
						className='w-[400px]'
					>
						<TabsList className='grid w-full grid-cols-2'>
							<TabsTrigger value='account'>
								Account
							</TabsTrigger>
							<TabsTrigger value='password'>
								Password
							</TabsTrigger>
						</TabsList>
						<TabsContent value='account'>
							<Card>
								<CardHeader>
									<CardTitle>Account</CardTitle>
									<CardDescription>
										Make changes to your account
										here. Click save when you're
										done.
									</CardDescription>
								</CardHeader>
								<CardContent className='space-y-2'>
									<div className='space-y-1'>
										<Label htmlFor='name'>
											Name
										</Label>
										<Input
											id='name'
											defaultValue='Pedro Duarte'
										/>
									</div>
									<div className='space-y-1'>
										<Label htmlFor='username'>
											Username
										</Label>
										<Input
											id='username'
											defaultValue='@peduarte'
										/>
									</div>
								</CardContent>
								<CardFooter>
									<Button variant='primary'>
										Save changes
									</Button>
								</CardFooter>
							</Card>
						</TabsContent>
						<TabsContent value='password'>
							<Card>
								<CardHeader>
									<CardTitle>Password</CardTitle>
									<CardDescription>
										Change your password here.
										After saving, you'll be logged
										out.
									</CardDescription>
								</CardHeader>
								<CardContent className='space-y-2'>
									<div className='space-y-1'>
										<Label htmlFor='current'>
											Current password
										</Label>
										<Input
											id='current'
											type='password'
										/>
									</div>
									<div className='space-y-1'>
										<Label htmlFor='new'>
											New password
										</Label>
										<Input
											id='new'
											type='password'
										/>
									</div>
								</CardContent>
								<CardFooter>
									<Button variant='primary'>
										Save password
									</Button>
								</CardFooter>
							</Card>
						</TabsContent>
					</Tabs>

					<TabMenu
						tabs={CUSTOMER_TAB}
						color={data.card.card.theme_color}
					/>
					<div className='w-screen flex flex-col justify-start py-2 lg:justify-center md:flex-row flex-wrap md:flex-nowrap h-[160px] md:h-fit gap-3 md:gap-5 overflow-x-scroll px-4 lg:px-10'>
						{data.card.fields.map((social, i) => (
							<Link
								key={i}
								href={social.content}
								className='hover:scale-105 transition-all h-16 w-16 md:h-24 md:w-24'
								style={{ color: CARD_VIEW.user.theme }}
							>
								{social.icon}
							</Link>
						))}
					</div>
					{data.business.services.length > 0 && (
						<div className='flex flex-col gap-4 w-full'>
							<p className='font-bold'>Our Service</p>
							<div className='flex gap-3 flex-nowrap overflow-x-scroll pb-5 w-full'>
								{data.business.services.map(
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
											link={service.link}
										/>
									)
								)}
							</div>
						</div>
					)}
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
		return <div>Card does not exist</div>;
	}
}
