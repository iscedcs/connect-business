import { getServerProfileData } from '@/app/lib/server-functions';
import EditBusinessForm from '@/components/shared/form/edit-business-form';
import React from 'react';

const EditBusiness = async () => {
	const sd = await getServerProfileData();
	const businessData: BusinessFormP = {
		name: sd.business.name || '',
		logo: sd.business.base_image || '',
		description: sd.business.description || '',
		details: sd.business.details || '',
		images: sd.business.images,
	};
	return (
		<div>
			<EditBusinessForm businessData={businessData} />
		</div>
	);
};

export default EditBusiness;
