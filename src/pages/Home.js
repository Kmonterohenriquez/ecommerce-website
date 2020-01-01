import React, { Component } from 'react';
// import UpperLine from '../Components/UpperLine/UpperLine';
import Showcase from '../Components/Showcase/Showcase'
import NewProduct from '../Components/NewProduct/NewProduct';
import {Link} from 'react-router-dom'
class Home extends Component {
	state = {};
	render() {
		return (
			<div className='Home'>
				{/* <UpperLine /> */}
				<Showcase />
				<NewProduct />
				<Link to={'/licensing'}>Licensing</Link>
			</div>
		);
	}
}

export default Home;
