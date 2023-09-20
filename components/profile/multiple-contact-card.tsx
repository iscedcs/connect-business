import React from 'react';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/dialog';
import * as Icons from '../../utils/icons';
import Link from 'next/link';
import { Card } from '../ui/card';
import { getUrlForLabel } from '@/utils/function-helpers';

export default function MultipleContactCard({
	label,
	socials,
	color,
}: {
	label: string;
	socials: SocialFieldI[];
	color?: string;
}) {
	return (
		<Dialog>
			<DialogTrigger
				className='hover:scale-105 transition-all h-16 w-16 md:h-24 md:w-24'
				style={{
					color: color && color,
				}}
			>
				{label.toLowerCase() === 'email' && <Icons.EmailIcon />}
				{label.toLowerCase() === 'address' && <Icons.AddressIcon />}
				{label.toLowerCase() === 'instagram' && (
					<Icons.InstagramIcon />
				)}
				{label.toLowerCase() === 'linkedIn' && <Icons.LinkedIcon />}
				{label.toLowerCase() === 'phone' && <Icons.PhoneIcon />}
				{label.toLowerCase() === 'snapChat' && (
					<Icons.CustomizeIcon />
				)}
				{label.toLowerCase() === 'tikTok' && (
					<Icons.CustomizeIcon />
				)}
				{label.toLowerCase() === 'twitter' && <Icons.TwitterIcon />}
				{label.toLowerCase() === 'website' && (
					<Icons.CustomizeIcon />
				)}
				{label.toLowerCase() === 'whatsapp' && (
					<Icons.WhatsappIcon />
				)}
				{label.toLowerCase() === 'string' && (
					<Icons.CustomizeIcon />
				)}
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='capitalize mb-3'>
						{label}
					</DialogTitle>
					{socials.map((social, k) => (
						<Link
							key={k}
							target='-blank'
							href={
								getUrlForLabel(
									label,
									social.content!
								) || ''
							}
						>
							<Card className='flex h-10 rounded-md overflow-hidden'>
								<div className='h-10 w-10 rounded-md overflow-hidden'>
									{social.label.toLowerCase() ===
										'email' && (
										<Icons.EmailIcon />
									)}
									{social.label.toLowerCase() ===
										'instagram' && (
										<Icons.InstagramIcon />
									)}
									{social.label.toLowerCase() ===
										'linkedIn' && (
										<Icons.LinkedIcon />
									)}
									{social.label.toLowerCase() ===
										'phone' && (
										<Icons.PhoneIcon />
									)}
									{social.label.toLowerCase() ===
										'snapChat' && (
										<Icons.CustomizeIcon />
									)}
									{social.label.toLowerCase() ===
										'tikTok' && (
										<Icons.CustomizeIcon />
									)}
									{social.label.toLowerCase() ===
										'twitter' && (
										<Icons.TwitterIcon />
									)}
									{social.label.toLowerCase() ===
										'website' && (
										<Icons.CustomizeIcon />
									)}
									{social.label.toLowerCase() ===
										'whatsapp' && (
										<Icons.WhatsappIcon />
									)}
									{social.label.toLowerCase() ===
										'string' && (
										<Icons.CustomizeIcon />
									)}
								</div>
								<div className='h-10 w-10 flex items-center px-3'>
									{social.content}
								</div>
							</Card>
						</Link>
					))}
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
