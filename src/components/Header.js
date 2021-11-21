import React from 'react';
import {
	Navbar,
	Container,
	Nav,
	Form,
	FormControl,
	Button,
} from 'react-bootstrap';
const Header = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<Container>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav
						className='ms-auto '
						style={{ maxHeight: '80px', marginRight: '200px' }}
						navbarScroll>
						<Form
							className='d-flex'
							style={{ maxHeight: '80px', marginRight: '300px' }}>
							<FormControl
								type='search'
								placeholder='Add More'
								className='me-2'
								aria-label='Search'
							/>
							<Button variant='outline-success' className='custom-btn'>
								<i class='fas fa-search'></i>
							</Button>
						</Form>
						<Nav.Link href='#action1'>Undwell Now</Nav.Link>
						<Nav.Link href='#action2'>Sell a Property</Nav.Link>

						<Nav.Link href='#' disabled>
							<i class='fas fa-bars' style={{ color: 'black' }}></i>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
