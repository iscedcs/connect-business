import { getServerProfileData } from '@/app/lib/server-functions';
import EditUserForm from '@/components/shared/form/edit-user-form';

const EditUser = async () => {
	const sd = await getServerProfileData();
	// console.log('server....', sd);
	const userData: UserFormP = {
		name: sd.user.name || '',
		email: sd.user.email || '',
		phone: sd.user.phone || '',
		profile_image: sd.user.profile_image || '',
		gender: sd.user.gender || '',
	};
	return (
		<div>
			<EditUserForm userData={userData} />
		</div>
	);
};

export default EditUser;
