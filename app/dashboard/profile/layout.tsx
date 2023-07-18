import TemplateOne from '@/components/templates/template-one';
import TemplateThree from '@/components/templates/template-three';
import TemplateTwo from '@/components/templates/template-two';
import { COMPANY_PROFILE } from '@/utils/data';
import Link from 'next/link';

export default function ProfileLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const activeTemplate = COMPANY_PROFILE.templates.find(
		(template) => template.active
	);
	const defaultTemplate = COMPANY_PROFILE.templates.find(
		(template) => template.default
	);
	const template = activeTemplate ? activeTemplate : defaultTemplate;
	const theme = template!.themeColor ? template!.themeColor : 'black';

	let layout;
	switch (template?.name) {
		case 'Template-1':
			layout = (
				<TemplateOne color={template.themeColor}>
					{children}
				</TemplateOne>
			);
			break;
		case 'Template-2':
			layout = (
				<TemplateTwo color={template.themeColor}>
					{children}
				</TemplateTwo>
			);
			break;
		case 'Template-3':
			layout = (
				<TemplateThree color={template.themeColor}>
					{children}
				</TemplateThree>
			);
			break;
		default:
			layout = (
				// Default layout when template is not found
				<div className=''>{children}</div>
			);
			break;
	}

	return (
		<div className='w-full h-full relative overflow-y-scroll'>
			<Link
				href={'dashboard/settings/customize-profile'}
				className='w-[200px] h-10 fixed bottom-5 right-24 hover:scale-105 rounded-full flex justify-center items-center gap-2 z-[1000] bg-black'
				// style={{
				// 	background: theme,
				// }}
			>
				<div className='flex-grow-0 flex-shrink-0 relative'>
					<svg
						width={25}
						height={24}
						viewBox='0 0 25 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='flex-grow-0 flex-shrink-0 w-6 h-6 relative'
						preserveAspectRatio='none'
					>
						<path
							d='M3.9975 20.5004C4.8275 21.3304 6.1675 21.3304 6.9975 20.5004L19.9975 7.50043C20.8275 6.67043 20.8275 5.33043 19.9975 4.50043C19.1675 3.67043 17.8275 3.67043 16.9975 4.50043L3.9975 17.5004C3.1675 18.3304 3.1675 19.6704 3.9975 20.5004Z'
							stroke='#FFFFFE'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M18.5078 8.98999L15.5078 5.98999'
							stroke='#FFFFFE'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M9 2.44L10.5 2L10.06 3.5L10.5 5L9 4.56L7.5 5L7.94 3.5L7.5 2L9 2.44Z'
							stroke='#FFFFFE'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M5 8.44L6.5 8L6.06 9.5L6.5 11L5 10.56L3.5 11L3.94 9.5L3.5 8L5 8.44Z'
							stroke='#FFFFFE'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M20 13.44L21.5 13L21.06 14.5L21.5 16L20 15.56L18.5 16L18.94 14.5L18.5 13L20 13.44Z'
							stroke='#FFFFFE'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
				<p className='flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#fffffe]'>
					Customize Profile
				</p>
			</Link>
			{layout}
		</div>
	);
}
