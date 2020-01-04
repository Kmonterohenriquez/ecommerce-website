import React, { Component } from 'react';
// import UpperLine from '../Components/UpperLine/UpperLine';
import Showcase from '../Components/Showcase/Showcase'
import Products from '../Components/Products/Products';
import {Link} from 'react-router-dom'
import WhyAaron from '../Components/WhyAaron/WhyAaron'
import NewReleases from '../Components/NewReleases/NewReleases'
import Footer from '../Components/Footer/Footer'
class Home extends Component {
	state = {};
	render() {
		return (
			<div className='Home'>
				{/* <UpperLine /> */}
				<Showcase />
				<Products title='Our Products' />
				<WhyAaron/>
				{/* <Products title='New Releases' /> */}
				<NewReleases />
				<Link to={'/licensing'}>Licensing</Link>
				<Footer />
			</div>
		);
	}
}

export default Home;
