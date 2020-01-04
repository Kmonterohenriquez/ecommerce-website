import React from 'react';
import './NewReleases.sass'

const NewReleases = () => {
	return (
		<div className='NewReleases'>
			<div className='sm-container'>
                <h1 className='NewReleases-title'>New Releases</h1>
                <div className='NewReleases-grid'>
                    <div className='item-box'>
                        <img src='https://image.dhgate.com/0x0s/f2-albu-g5-M00-10-35-rBVaI1mmToqAMGm5AADUGZu6zeY579.jpg/2017-men-039-s-suits-new-suit-custom-3-pieces.jpg' alt='pic' />
                        <div className='info'>
                            <h1 className='product-name'>Product Name</h1>
                                     <p className="product-price">$57.99</p>
                        </div>
                    </div>
                    <div className='item-box'>
                        <img src='https://image.dhgate.com/0x0s/f2-albu-g5-M00-10-35-rBVaI1mmToqAMGm5AADUGZu6zeY579.jpg/2017-men-039-s-suits-new-suit-custom-3-pieces.jpg' alt='pic' />
                        <div className='info'>
                            <h1 className='product-name'>Product Name</h1>
                                     <p className="product-price">$57.99</p>
                        </div>
                    </div>
                    <div className='item-box'>
                        <img src='https://image.dhgate.com/0x0s/f2-albu-g5-M00-10-35-rBVaI1mmToqAMGm5AADUGZu6zeY579.jpg/2017-men-039-s-suits-new-suit-custom-3-pieces.jpg' alt='pic' />
                        <div className='info'>
                            <h1 className='product-name'>Product Name</h1>
                                     <p className="product-price">$57.99</p>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default NewReleases;
