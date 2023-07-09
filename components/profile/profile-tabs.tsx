import React from 'react';
import TabItem from './tab-item';

export default function TabMenu({ tabs, color }: TabMenuProps) {
	return (
		<div className='flex justify-start gap-5'>
			{tabs.map((tab, index) => (
				<TabItem
					key={index}
					text={tab.text}
					href={tab.href}
					color={color}
				/>
			))}
		</div>
	);
}
