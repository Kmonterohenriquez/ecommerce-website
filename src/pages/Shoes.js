import React from 'react';
import PageTitle from '../Components/PageTitle/PageTitle'
import data from '../data'
import {Link} from 'react-router-dom'
import Item from '../Components/Item/Item'

const Shoes = () => {
	return (
		<div className='Shoes'>
			<PageTitle title='Shoes'/>
			<div className='container'>
				<div className='Item-grid'>
					{data
						.filter(e => e.category === 'Shoes')
						.map(item => (
							<Link key={item.id} to={`/item-details/${item.id}`}>
								<Item item={item} />
							</Link>
						))}
				</div>
			</div>
		</div>
	);
};

export default Shoes;
