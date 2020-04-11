import React from 'react';
import data from '../../data';
import './ItemDetails.sass';

const ItemDetails = props => {
	const result = data.filter(curr => curr.id === +props.match.params.id);
	const item = result[0];
	console.log('data from single item', item);
	return (
		<div className='ItemDetails'>
			<div className='xsm-container'>
				<div className='item-info'>
					<div className='left-side'>
						<img src={item.image} alt={item.name} />
					</div>
					<div className='right-side'>
						<h1 className='Item-name'>{item.name}</h1>
						<p className='Item-price'>${item.price} </p>
						<hr />
						<p style={{ marginBottom: '8px' }}>Size</p>
						<div className='all-sizes'>
							{item.size
								? item.size.map(size => (
										<div className='size'>
											<p>{size}</p>
										</div>
								  ))
								: null}
						</div>
						<button className='AddItem-btn'>ADD TO CART</button>
						<p className='Item-description'>{item.description}</p>
						<div className="share-btn">
							<p><i className="fab fa-facebook-f"></i> Share</p>
							<p><i className="fab fa-twitter"></i> Tweet</p>
							<p><i className="fab fa-pinterest-p"></i> Pin it</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemDetails;
