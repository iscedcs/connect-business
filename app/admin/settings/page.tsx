'use client';
import SettingsCard from '@/components/admin/settings/settings-card';
import { customizeIcon, editIcon, updateIcon } from '@/utils/icons';
import React, { Fragment } from 'react';

export default function Settings() {
	return (
		<Fragment>
			<div className='flex flex-wrap items-start justify-center lg:justify-start p-4 lg:p-10 gap-5'>
				<SettingsCard
					title='Edit Business Profile'
					icon={editIcon}
					link='/admin/settings/edit-business'
				/>
				<SettingsCard
					title='Edit User Profile'
					icon={editIcon}
					link='/admin/settings/edit-user'
				/>
				<SettingsCard
					title='Edit Social Links'
					icon={editIcon}
					link='/admin/settings/edit-social'
				/>
				<SettingsCard
					title='Customize Business Profile'
					icon={customizeIcon}
					link='/admin/settings/customize-profile'
				/>
				<SettingsCard
					title='Update Passwoord'
					icon={updateIcon}
					link='/admin/settings/update-password'
				/>
			</div>
		</Fragment>
	);
}
