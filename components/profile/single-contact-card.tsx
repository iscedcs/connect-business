import Link from 'next/link';
import React from 'react';
import * as Icons from '../../utils/icons';
import { getUrlForLabel } from '@/utils/function-helpers';

export default function SingleContactCard({
	href,
	label,
	color,
}: {
	href: string;
	label: string;
	color?: string;
}) {
	return (
		<Link
			target='_blank'
			href={getUrlForLabel(label, href) || ''}
			className='hover:scale-105 transition-all h-16 w-16 md:h-24 md:w-24'
			style={{
				color: color && color,
			}}
		>
			{label.toLowerCase() === 'email' && <Icons.EmailIcon />}
			{label.toLowerCase() === 'address' && <Icons.AddressIcon />}
			{label.toLowerCase() === 'instagram' && <Icons.InstagramIcon />}
			{label.toLowerCase() === 'linkedin' && <Icons.LinkedIcon />}
			{label.toLowerCase() === 'phone' && <Icons.PhoneIcon />}
			{label.toLowerCase() === 'snapchat' && <Icons.CustomizeIcon />}
			{label.toLowerCase() === 'tiktok' && <Icons.CustomizeIcon />}
			{label.toLowerCase() === 'twitter' && <Icons.TwitterIcon />}
			{label.toLowerCase() === 'website' && <Icons.CustomizeIcon />}
			{label.toLowerCase() === 'whatsapp' && <Icons.WhatsappIcon />}
			{label.toLowerCase() === 'string' && <Icons.CustomizeIcon />}
		</Link>
	);
}
