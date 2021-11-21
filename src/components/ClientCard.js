import React from 'react';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';

const ClientCard = () => {
	return (
		<Row>
			<Card border='dark' style={{ width: '18rem', height: '175px' }}>
				<Col>
					<p> Clients</p>
					<h4>$1,232</h4>
				</Col>
				<Col className='position-absolute top-0 end-0 mr-1'>
					<p style={{ marginRight: '3px' }}>Subscribed</p>
					<span
						style={{ color: 'orange', fontWeight: 'bold', fontSize: '12px' }}>
						+3.2%
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

export default ClientCard;
