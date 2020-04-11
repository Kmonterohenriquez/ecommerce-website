import React from 'react'
import PageTitle from '../Components/PageTitle/PageTitle'
import Item from '../Components/Item/Item'
import data from '../data'
import {Link} from 'react-router-dom'

const Shirts = () => {
    return (
        <div className='Shirts'>
            <PageTitle title='Shirts'/>
            <div className='container'>
				<div className='Item-grid'>
					{data
						.filter(e => e.category === 'shirt')
						.map(item => (
							<Link key={item.id} to={`/item-details/${item.id}`}>
								<Item item={item} />
							</Link>
						))}
				</div>
			</div>
        </div>
    )
}

export default Shirts
