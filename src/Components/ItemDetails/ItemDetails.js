import React from 'react'

const ItemDetails = () => {
    return (
        <div className='ItemDetails'>
            <div className='left-side'>
				<img src={item.image} alt={item.name} />
			</div>
			<div className='right-side'>
				<h1 className='Item-name'>{item.name}</h1>
				<p className='Item-price'>${item.price} </p>
				<hr />
				{item.size.map(size => (
					<div>{size}</div>
				))}
				<p className='Item-description'>{item.description}</p>
			</div>
        </div>
    )
}

export default ItemDetails
