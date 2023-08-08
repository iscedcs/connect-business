'use client';
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface AppointmentData {
	date: string;
	appointments: number;
}

interface LineChartP {
	data: AppointmentData[];
}

const LineChart: React.FC<LineChartP> = ({ data }) => {
	const svgRef = useRef<SVGSVGElement | null>(null);

	useEffect(() => {
		const svg = d3.select(svgRef.current);

		const margin = { top: 20, right: 20, bottom: 30, left: 40 };
		const width = 800 - margin.left - margin.right;
		const height = 400 - margin.top - margin.bottom;

		const weekStart = new Date();
		weekStart.setDate(weekStart.getDate() - 6); // 7 days ago

		const filteredData = data.filter(
			(d) => new Date(d.date) >= weekStart
		);

		const xScale = d3
			.scalePoint<number>()
			.domain([0, 1, 2, 3, 4, 5, 6]) // Days of the week (0 = Sunday)
			.range([0, width])
			.padding(0.5); // Adjust padding between labels

		const yScale = d3
			.scaleLinear()
			.domain([0, d3.max(filteredData, (d) => d.appointments) || 0])
			.range([height, 0]);

		const line = d3
			.line<AppointmentData>()
			.x((d) => xScale(new Date(d.date).getDay()) as number) // Map day index to x-coordinate
			.y((d) => yScale(d.appointments));

		svg.selectAll('*').remove();

		const g = svg
			.append('g')
			.attr('transform', `translate(${margin.left},${margin.top})`);

		g.append('path')
			.datum(filteredData)
			.attr('d', line)
			.attr('fill', 'none')
			.attr('stroke', 'blue');

		g.append('g')
			.attr('transform', `translate(0,${height})`)
			.call(
				d3
					.axisBottom(xScale)
					.tickValues([0, 1, 2, 3, 4, 5, 6])
					.tickFormat((d) => {
						const dayNames = [
							'S',
							'M',
							'T',
							'W',
							'T',
							'F',
							'S',
						];
						return dayNames[d];
					})
			);

		g.append('g')
			.call(d3.axisLeft(yScale))
			.append('text')
			.attr('fill', '#000')
			.attr('transform', 'rotate(-90)')
			.attr('y', -margin.left)
			.attr('dy', '0.71em')
			.attr('text-anchor', 'end')
			.text('Appointment Amount');
	}, [data]);

	return (
		<svg
			ref={svgRef}
			width='100%'
			height='400'
			className='h-full w-full object-contain'
		/>
	);
};

export default LineChart;
