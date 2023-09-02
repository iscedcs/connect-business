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
				{label === 'email' && <Icons.EmailIcon />}
				{label === 'instagram' && <Icons.InstagramIcon />}
				{label === 'linkedIn' && <Icons.LinkedIcon />}
				{label === 'phone' && <Icons.PhoneIcon />}
				{label === 'snapChat' && <Icons.CustomizeIcon />}
				{label === 'tikTok' && <Icons.CustomizeIcon />}
				{label === 'twitter' && <Icons.TwitterIcon />}
				{label === 'website' && <Icons.CustomizeIcon />}
				{label === 'whatsapp' && <Icons.WhatsappIcon />}
				{label === 'string' && <Icons.CustomizeIcon />}
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
									{social.label === 'email' && (
										<Icons.EmailIcon />
									)}
									{social.label === 'instagram' && (
										<Icons.InstagramIcon />
									)}
									{social.label === 'linkedIn' && (
										<Icons.LinkedIcon />
									)}
									{social.label === 'phone' && (
										<Icons.PhoneIcon />
									)}
									{social.label === 'snapChat' && (
										<Icons.CustomizeIcon />
									)}
									{social.label === 'tikTok' && (
										<Icons.CustomizeIcon />
									)}
									{social.label === 'twitter' && (
										<Icons.TwitterIcon />
									)}
									{social.label === 'website' && (
										<Icons.CustomizeIcon />
									)}
									{social.label === 'whatsapp' && (
										<Icons.WhatsappIcon />
									)}
									{social.label === 'string' && (
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
