import { getServerProfileData } from '@/app/lib/server-functions';
import EditServicesForm from '@/components/shared/form/edit-services-form';

const EditServices = async () => {
	const sd = await getServerProfileData();
	const servicesData: ServiceP[] = await sd.business.services;
	// console.log('server....', servicesData);
	const data = servicesData.map((item) => ({
		service_id: item.service_id,
		title: item.title,
		description: item.description,
		image: item.image,
		link: item.link,
	}));

	return (
		<div>
			<EditServicesForm servicesData={data} />
		</div>
	);
};

export default EditServices;
