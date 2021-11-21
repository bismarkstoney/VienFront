import React from 'react';
import { Row, Button, Container, Image } from 'react-bootstrap';
import bismark from './bismark.jpg';
import ProfileDetails from './ProfileDetails';
const UserProfile = () => {
	return (
		<Container className='border border-1 mt-3 mb-3'>
			<Row className='d-flex justify-content-center'>
				<Image
					src={bismark}
					roundedCircle
					style={{
						width: '120px',
						height: '90px',
						marginTop: '30px',
						marginLeft: '10px',
					}}
				/>

				<p style={{ alignItems: 'center', paddingLeft: '110px' }}>
					<strong>Obeng Bismark </strong>
					<br />
					Home Buyer
				</p>
				<Button variant='outline-success' className='btn  custom-btn'>
					Edit Profile
				</Button>
			</Row>
			<hr />
			<Row>
				<ProfileDetails />
			</Row>
		</Container>
	);
};

export default UserProfile;
