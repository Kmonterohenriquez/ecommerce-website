import React from 'react';
import './AddProductModel.sass';
const AddProductModel = (props) => {
	return (
		<div className='AddProductModel'>
			<i className="close-icon fas fa-times" onClick={props.AddBtnToggle}></i>
			<h1>Add Product</h1>
			<hr />
			<form action=''>
				<div className='img-container'>
					<img src='' alt='' />
				</div>
				<div className='right-side'>
					<label htmlFor=''>Product Name</label>
					<input type='text' placeholder='Enter a Name' />
					<label htmlFor=''>Quantity</label>
					<input type='text' placeholder='Enter quantity' />
					<label>Description</label>
					<textarea
						name=''
						id=''
						cols='30'
						rows='10'
						placeholder='Briefly description of the product...'
					></textarea>
				</div>
			</form>
			<div className="btn-container">
				<button className='btn cancel-btn' onClick={props.AddBtnToggle}>Cancel</button>
				<button className='btn add-btn'>Add</button>
			</div>
		</div>
	);
};

export default AddProductModel;
