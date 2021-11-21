import React, { PureComponent } from 'react';

import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const data = [
	{
		name: 'Page A',
		uv: 500,
		pv: 70,
		amt: 70,
	},
	{
		name: 'Page B',
		uv: 400,
		pv: 60,
		amt: 60,
	},
	{
		name: 'Page C',
		uv: 700,
		pv: 40,
		amt: 40,
	},
	{
		name: 'Page D',
		uv: 600,
		pv: 40,
		amt: 40,
	},
	{
		name: 'Page E',
		uv: 700,
		pv: 30,
		amt: 30,
	},
	{
		name: 'Page F',
		uv: 600,
		pv: 40,
		amt: 40,
	},
	{
		name: 'Page G',
		uv: 600,
		pv: 40,
		amt: 40,
	},
];

export default class Example extends PureComponent {
	render() {
		return (
			<ResponsiveContainer width='100%' height='100%'>
				<BarChart width={150} height={4} data={data}>
					<Bar dataKey='uv' fill='#FFA500' />
				</BarChart>
			</ResponsiveContainer>
		);
	}
}
