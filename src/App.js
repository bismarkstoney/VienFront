import { Row, Col, Container } from 'react-bootstrap';

import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainBoard from './components/MainBoard';
import Footer from './components/Footer';
function App() {
	return (
		<div className='App'>
			<Header />
			<Container>
				<Row>
					<Col className='col-3'>
						<UserProfile />
					</Col>
					<Col className='col-9'>
						<MainBoard />
					</Col>
					<Col className='col-12'>
						<Footer />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
