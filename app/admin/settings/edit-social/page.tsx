import { getServerProfileData } from '@/app/lib/server-functions';
import EditSocialsForm from '@/components/shared/form/edit-socials-form';

const EditSocial = async () => {
	const sd = await getServerProfileData();
	// console.log('server....', sd.business.features);
	const socialsData: SocialsFormP = {
		features: sd.business.features || [],
	};
	return (
		<div>
			<EditSocialsForm socialsData={socialsData} />
		</div>
	);
};

export default EditSocial;
