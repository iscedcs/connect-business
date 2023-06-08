import React from 'react';

export default function Text({
	color,
	type,
	size,
	lineHeight,
	className,
	children,
}: TextProps) {
	const colors = `text-${color}`;
	const types = `font-${type}`;
	const sizes = `text-${size}`;
	const lh = `leading-[${lineHeight}]`;
	return (
		<div className={`${colors} ${types} ${sizes} ${className} ${lh}`}>
			{children}
		</div>
	);
}
