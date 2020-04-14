import React, { useState } from 'react';
import './AddProductModel.sass';
const AddProductModel = props => {
	const [name, setName] = useState('');
	const [qty, setQty] = useState(0);
	const [description, setDescription] = useState('');

	function showResult(){
		console.clear()
		console.log("Name: ", name)
		console.log("qty: ", qty)
		console.log("Description: ", description)
		props.AddBtnToggle()
	}
	
	return (
		<div className='AddProductModel'>
			<i className='close-icon fas fa-times' onClick={props.AddBtnToggle}></i>
			<h1>Add Product</h1>
			<hr />
			<form action=''>
				<div className='img-container'>
					<i className='fas fa-plus'></i>
					<img src='' alt='' />
				</div>
				<div className='right-side'>
					<label htmlFor=''>Product Name</label>
					<input type='text' placeholder='Enter a Name' onChange={(e)=> setName(e.target.value)}/>
					<label htmlFor=''>Quantity</label>
					<input className='qty' type='number' placeholder='Enter quantity' onChange={(e)=> setQty(e.target.value)}/>
					<label>Description</label>
					<textarea
						name=''
						id=''
						cols='30'
						rows='10'
						placeholder='Briefly description of the product...'
						onChange={(e)=> setDescription(e.target.value)}
					></textarea>
				</div>
			</form>
			<div className='btn-container'>
				<button className='btn cancel-btn' onClick={props.AddBtnToggle}>
					Cancel
				</button>
				<button className='btn add-btn' onClick={showResult}>Add</button>
			</div>
		</div>
	);
};

export default AddProductModel;
