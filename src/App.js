import React from 'react';
import './App.sass';
import routes from './routes';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import { withRouter } from 'react-router';

function App(props) {
	const currLocation = props.location.pathname;
	return (
		<div className='App'>
			<Nav />
			{routes}
			{currLocation !== "/admin_center"? <Footer /> : null}
			
		</div>
	);
}

export default withRouter(App);
