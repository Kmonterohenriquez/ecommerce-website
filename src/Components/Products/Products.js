import React from 'react';
import './Products.sass';
import suit from '../../img/4074.jpg'
import img from '../../img/4041.jpg'

const Products = (props) => {
	return (
		<div className='Products'>
			<div className='sm-container'>
				<h1>{props.title}</h1>
				<div className='Products-grid '>
					<div className='item-box'><img src={suit} alt=""/></div>
					<div className='item-box'><img src={img} alt=""/></div>
					<div className='item-box'><img src={suit} alt=""/></div>
				</div>
			</div>
		</div>
	);
};

export default Products;
