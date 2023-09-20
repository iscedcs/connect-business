import { options } from '@/app/api/auth/[...nextauth]/options';
import SettingsCard from '@/components/admin/settings/settings-card';
import { CustomizeIcon, EditIcon, UpdateIcon } from '@/utils/icons';
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
						icon={<EditIcon />}
						link='/admin/settings/edit-business'
					/>
				)}
				<SettingsCard
					title='Edit User Profile'
					icon={<EditIcon />}
					link='/admin/settings/edit-user'
				/>
				{role === 'admin' && (
					<>
						<SettingsCard
							title='Edit Services'
							icon={<EditIcon />}
							link='/admin/settings/edit-services'
						/>
						<SettingsCard
							title='Edit Social Links'
							icon={<EditIcon />}
							link='/admin/settings/edit-social'
						/>
					</>
				)}
				<SettingsCard
					title='Customize Business Profile'
					icon={<CustomizeIcon />}
					link='/admin/settings/customize-profile'
				/>
				<SettingsCard
					title='Update Passwoord'
					icon={<UpdateIcon />}
					link='/admin/settings/update-password'
				/>
			</div>
		</Fragment>
	);
}
