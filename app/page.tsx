import HexCodeGenerator from '@/components/hexa-code-generator';
import DashboardLayout from './dashboard/layout';

export default function Home() {
	return (
		<DashboardLayout>
			<div className='flex items-center justify-center flex-col'>
				Welcome to connect for business
				<p>Waiting for an home page</p>
			</div>
			{/* <HexCodeGenerator /> */}
		</DashboardLayout>
	);
}
