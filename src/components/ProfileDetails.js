import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const ProfileDetails = () => {
	return (
		<Container>
			<ListGroup variant='flush'>
				<ListGroup.Item>
					<span className='left'> Profile </span>
					<i class='far fa-user right'></i>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className='left'> My Listing </span>
					<i class='far fa-clipboard-list right'></i>
				</ListGroup.Item>

				<ListGroup.Item>
					<span className='left'> Saved Homes </span>
					<i class='fas fa-home right'></i>{' '}
				</ListGroup.Item>

				<ListGroup.Item>
					<span className='left'> Saved Search</span>
					<i class='fas fa-search right'></i>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className='left'> Messages</span>
					<i class='fas fa-sms right'></i>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className='left'> Notifications </span>
					<i class='far fa-bell right'></i>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className='left'> Billing</span>
					<i class='fas fa-calculator right'></i>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className='left'>Analytics</span>
					<i class='fas fa-chart-pie right'></i>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className='left'>Blog</span>
					<i class='far fa-edit right'></i>
				</ListGroup.Item>
			</ListGroup>
		</Container>
	);
};

export default ProfileDetails;
