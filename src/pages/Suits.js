import React from 'react';
import PageTitle from '../Components/PageTitle/PageTitle';
import Item from '../Components/Item/Item';
import data from '../data';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Suits = () => {
	return (
		<div className='Suits'>
			<PageTitle title='Suits' />
			<div className='container'>
				<div className='Item-grid'>
					{data
						.filter(e => e.category === 'suit')
						.map(item => (
							<Link key={item.id} to={`/item-details/${item.id}`}>
								<Item item={item} />
							</Link>
						))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Suits;
