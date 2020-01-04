import React from 'react';
import './Products.sass';

const Products = (props) => {
	return (
		<div className='Products'>
			<div className='sm-container'>
				<h1>{props.title}</h1>
				<div className='Products-grid '>
					<div className='item-box'><img src="" alt=""/></div>
					<div className='item-box'><img src="" alt=""/></div>
					<div className='item-box'><img src="" alt=""/></div>
				</div>
			</div>
		</div>
	);
};

export default Products;
