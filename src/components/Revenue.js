import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import ProgressCard1 from './cards/ProgressCard1';
import ClientCard from './ClientCard';
import RevenueCard from './RevenueCard';

const Revenue = () => {
	return (
		<Container fluid style={{ margin: '10px' }}>
			<Row>
				<Col md={{ span: 3 }} style={{ marginRight: '10px' }}>
					<ProgressCard1 />
				</Col>
				<Col md={{ span: 3 }} style={{ marginRight: '10px' }}>
					<RevenueCard />
				</Col>
				<Col md={{ span: 3 }}>
					<ClientCard />
				</Col>
			</Row>
		</Container>
	);
};

export default Revenue;
