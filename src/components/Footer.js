import React from 'react';
import { Row, Col, Container, Nav } from 'react-bootstrap';
const Footer = () => {
	return (
		<Container style={{ marginTop: '30px' }}>
			<Row>
				<Col>
					<p style={{ paddingTop: '30px' }}>
						Counter Delivery, Carters Beach <br /> PostCentre, Westport
					</p>
				</Col>
				<Col>
					<Nav defaultActiveKey='#' className='flex-column'>
						<Nav.Link eventKey='disabled' disabled>
							<strong>About</strong>
						</Nav.Link>
						<Nav.Link href='#' className='link-dark'>
							Company
						</Nav.Link>
						<Nav.Link eventKey='link-1' className='link-dark'>
							Team
						</Nav.Link>
						<Nav.Link eventKey='link-2' className='link-dark'>
							Carreers
						</Nav.Link>
						<Nav.Link eventKey='link-1' className='link-dark'>
							Blog
						</Nav.Link>
					</Nav>
				</Col>
				<Col>
					<Nav defaultActiveKey='#' className='flex-column'>
						<Nav.Link eventKey='disabled' disabled>
							<strong>Support</strong>
						</Nav.Link>
						<Nav.Link href='#' className='link-dark'>
							Trust & Safety
						</Nav.Link>
						<Nav.Link eventKey='link-1' className='link-dark'>
							Neighborhood Support
						</Nav.Link>
						<Nav.Link eventKey='link-2' className='link-dark'>
							Cancellation Options
						</Nav.Link>
						<Nav.Link eventKey='link-1' className='link-dark'>
							Help Center
						</Nav.Link>
					</Nav>
				</Col>
				<Col>
					<Nav defaultActiveKey='#' className='flex-column'>
						<Nav.Link eventKey='disabled' disabled>
							<strong>Address</strong>
						</Nav.Link>
						<Nav.Link href='#' className='link-dark' disabled>
							<p>
								Counter Delivery, Carters Beach <br />
								PostCentre, Westport
							</p>
						</Nav.Link>
						<Nav.Link eventKey='link-1' className='link-dark'>
							<Row>
								<Col>
									<i
										class='fab fa-facebook-f'
										style={{
											boxShadow: '2px 2px 2px 2px ',

											padding: '8px',
											color: '#016450',
											borderRadius: '15px',
											width: '30px',
											height: '30px',
											alignItems: 'center',
										}}></i>
								</Col>
								<Col>
									<i
										class='fab fa-instagram'
										style={{
											boxShadow: '2px 2px 2px 2px #fff',
											backgroundColor: '#016450',
											padding: '8px',
											color: '#fff',
											borderRadius: '15px',
											width: '30px',
											height: '30px',
											alignItems: 'center',
										}}></i>
								</Col>
								<Col style={{}}>
									<i
										class='fab fa-twitter-square'
										style={{
											boxShadow: '2px 2px 2px 2px ',

											padding: '8px',
											color: '#016450',
											borderRadius: '15px',
											width: '30px',
											height: '30px',
											alignItems: 'center',
										}}></i>
								</Col>
							</Row>
						</Nav.Link>
					</Nav>
				</Col>
			</Row>
			<Row>
				<Col className='d-flex justify-content-center mt-3'>
					<p>
						Privacy Policy | Terms & Conditions | &copy;Udwell, LLC. All rights
						reserved.{' '}
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
