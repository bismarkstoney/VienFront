import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import TotalSalesChart from '../charts/TotalSalesChart';

const TotalSalesCard = () => {
	return (
		<Row>
			<Card border='dark' style={{ width: '18rem', height: '175px' }}>
				<Col>
					<p> Total Sales</p>
					<h4>+$985.56</h4>
				</Col>

				<Col>
					<TotalSalesChart />
				</Col>
			</Card>
		</Row>
	);
};

export default TotalSalesCard;
