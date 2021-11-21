import React from 'react';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';

const ProgressCard1 = () => {
	return (
		<Row>
			<Card border='dark' style={{ width: '18rem', height: '175px' }}>
				<Col>
					<p> Sales</p>
					<h4>98.1%</h4>
				</Col>
				<Col className='position-absolute top-0 end-0 mr-1'>
					<p style={{ marginRight: '3px' }}>Monthly Goal</p>
					<span
						style={{ color: '#016450', fontWeight: 'bold', fontSize: '12px' }}>
						+11.3%
					</span>
				</Col>
				<ProgressBar
					variant='success'
					now={40}
					style={{ height: '5px', marginBottom: '5px' }}
				/>
				<span style={{ fontSize: '12px' }}>Year Goal</span>
			</Card>
		</Row>
	);
};

export default ProgressCard1;
