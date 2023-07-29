import Templates from '@/components/settings/templates';
import { COMPANY_PROFILE } from '@/utils/data';
import React from 'react';

export default function CustomizeProfile() {
	return (
		<div className='flex justify-start items-start flex-wrap relative gap-4'>
			<Templates templates={COMPANY_PROFILE.templates} />
		</div>
	);
}
