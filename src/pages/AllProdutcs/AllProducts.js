import React from 'react';
import './AllProducts.sass';
import data from '../../data';
import Item from '../../Components/Item/Item';
import { Link } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle/PageTitle'
const AllProducts = () => {
	console.log('data', data);
	return (
		<div className='AllProducts'>
			<PageTitle title='All Products'/>
			
			<div className='container'>
				<div className='top-container'>
					<p>{data.length} products</p>
					<select name='' id=''>
						<option value=''>Sort</option>
						<option value=''>Featured</option>
						<option value=''>Best selling</option>
						<option value=''>Price: low to high</option>
						<option value=''>Price: high to low</option>
						<option value=''>Alphabetically: A-Z</option>
						<option value=''>Alphabetically: Z-A</option>
					</select>
				</div>
				<div className='Item-grid'>
					{data.map(item => (
						<Link key={item.id} to={`/item-details/${item.id}`}>
							<Item item={item} />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default AllProducts;
