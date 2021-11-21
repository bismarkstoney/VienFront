import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TotalSalesCard from './cards/TotalSalesCard';
import Revenue from './Revenue';

const MainBoard = () => {
	return (
		<Container className=' mt-3 mb-3'>
			<Row>
				<Revenue />
			</Row>
			<Row className=' mt-3 mb-3'>
				<Col>
					<TotalSalesCard />
				</Col>
			</Row>
		</Container>
	);
};

export default MainBoard;
