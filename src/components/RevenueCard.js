import React from 'react';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';
import RevnueBar from './charts/RevnueBar';

const RevenueCard = () => {
	return (
		<Row>
			<Card border='dark' style={{ width: '18rem', height: '175px' }}>
				<Col>
					<p> Revenue</p>
					<h4>$13,893</h4>
				</Col>
				<Col className='position-absolute top-0 end-0 mr-1'>
					<p style={{ marginRight: '3px' }}>Monthly Goal</p>
					<span
						style={{ color: 'orange', fontWeight: 'bold', fontSize: '12px' }}>
						+11.3%
					</span>
				</Col>
				<ProgressBar
					variant='success'
					now={40}
					style={{ height: '5px', marginBottom: '5px' }}
				/>

				<RevnueBar />
			</Card>
		</Row>
	);
};

export default RevenueCard;
