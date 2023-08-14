import { options } from '@/app/api/auth/[...nextauth]/options';
import SettingsCard from '@/components/admin/settings/settings-card';
import { customizeIcon, editIcon, updateIcon } from '@/utils/icons';
import { getServerSession } from 'next-auth';
import React, { Fragment } from 'react';

export default async function Settings() {
	const session = await getServerSession(options);
	const role = session?.user.role;
	return (
		<Fragment>
			<div className='flex flex-wrap items-start justify-center lg:justify-start p-4 lg:p-10 gap-5'>
				{role === 'admin' && (
					<SettingsCard
						title='Edit Business Profile'
						icon={editIcon}
						link='/admin/settings/edit-business'
					/>
				)}
				<SettingsCard
					title='Edit User Profile'
					icon={editIcon}
					link='/admin/settings/edit-user'
				/>
				{role === 'admin' && (
					<>
						<SettingsCard
							title='Edit Services'
							icon={editIcon}
							link='/admin/settings/edit-services'
						/>
						<SettingsCard
							title='Edit Social Links'
							icon={editIcon}
							link='/admin/settings/edit-social'
						/>
					</>
				)}
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
