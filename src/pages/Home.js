import React, { Component } from 'react';
// import UpperLine from '../Components/UpperLine/UpperLine';
import Showcase from '../Components/Showcase/Showcase'
class Home extends Component {
	state = {};
	render() {
		return (
			<div className='Home'>
				{/* <UpperLine /> */}
				<Showcase />
			</div>
		);
	}
}

export default Home;
