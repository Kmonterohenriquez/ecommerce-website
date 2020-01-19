import React from 'react';
import './Item.sass';
const Item = props => {
	const { item } = props;
	return (
		<div className='Item'>
			<img src={item.image} alt={item.name} />
			<div className='Item-info'>
                <h1 className='Item-name'>{item.name}</h1>
                <p className='Item-price'>${item.price} </p>
            </div>
		</div>
	);
};

export default Item;
