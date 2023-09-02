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
			{label === 'Email' && <Icons.EmailIcon />}
			{label === 'Instagram' && <Icons.InstagramIcon />}
			{label === 'LinkedIn' && <Icons.LinkedIcon />}
			{label === 'Phone' && <Icons.PhoneIcon />}
			{label === 'SnapChat' && <Icons.CustomizeIcon />}
			{label === 'TikTok' && <Icons.CustomizeIcon />}
			{label === 'Twitter' && <Icons.TwitterIcon />}
			{label === 'Website' && <Icons.CustomizeIcon />}
			{label === 'Whatsapp' && <Icons.WhatsappIcon />}
			{label === 'String' && <Icons.CustomizeIcon />}
		</Link>
	);
}
