import React from 'react';
import './AllProducts.sass';
import data from '../../data';
import Item from '../../Components/Item/Item';
import Footer from '../../Components/Footer/Footer';
const AllProducts = () => {
	console.log('data', data);
	return (
		<div className='AllProducts'>
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
						<Item item={item} />
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default AllProducts;
