import { options } from '@/app/api/auth/[...nextauth]/options';
import { getStaff } from '@/app/lib/server-functions';
import Employees from '@/components/employees/employees';
import { getServerSession } from 'next-auth';

export default async function EmployeesPage() {
	const session = await getServerSession(options);
	const data = await getStaff();
	const onboarded: EmployeesProps = data.data.team_members.onboarded;
	const waitlisted: EmployeesProps = data.data.team_members.waitlisted;
	return (
		<Employees
			role={session?.user.role!}
			onboarded={onboarded}
			waitlisted={waitlisted}
		/>
	);
}
