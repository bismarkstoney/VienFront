import React, { Component } from 'react';

import { Doughnut } from 'react-chartjs-2';

class TotalSalesChart extends Component {
	constructor() {
		super();
		this.state = {
			name: 'React',
			data: {
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				datasets: [
					{
						data: [10, 20, 30],
					},
				],
				//labels: ['Red', 'Yellow', 'Blue'],
			},
		};
	}

	render() {
		return (
			<div style={{ height: '90px', width: '90px' }}>
				<Doughnut
					data={this.state.data}
					color='#FFA500'
					width={90}
					height={90}
					options={{
						responsive: true,
						maintainAspectRatio: true,
					}}
				/>
			</div>
		);
	}
}
export default TotalSalesChart;
