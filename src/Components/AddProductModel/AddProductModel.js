import React from 'react';
import './AddProductModel.sass';
const AddProductModel = () => {
	return (
		<div className='AddProductModel'>
			<h1>Add Product</h1>
			<hr />
			<form action=''>
				<img src='' alt='' />
				<label htmlFor=''>Product Name</label>
				<input type='text' placeholder='Enter a Name' />
				<label>Description</label>
				<textarea
					name=''
					id=''
					cols='30'
					rows='10'
					placeholder='Briefly description of the product...'
				></textarea>
			</form>
		</div>
	);
};

export default AddProductModel;
