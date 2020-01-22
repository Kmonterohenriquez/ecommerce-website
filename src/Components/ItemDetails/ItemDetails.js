import React from 'react';
import data from '../../data';
const ItemDetails = props => {
	const result = data.filter(curr => curr.id === +props.match.params.id);
	const item = result[0];
	console.log('data from single item', item);
	return (
		<div className='ItemDetails'>
			<div className='left-side'>
				<img src={item.image} alt={item.name} />
			</div>
			<div className='right-side'>
				<h1 className='Item-name'>{item.name}</h1>
				<p className='Item-price'>${item.price} </p>
				<hr />
				{item.size ? item.size.map(size => <div>{size}</div>) : null}

				<p className='Item-description'>{item.description}</p>
			</div>
		</div>
	);
};

export default ItemDetails;
