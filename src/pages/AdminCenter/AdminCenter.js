import React, { useState } from 'react';
import './AdminCenter.sass';
import AddProductModel from '../../Components/AddProductModel/AddProductModel';

const AdminCenter = () => {
	const [addBtn, setAddBtn] = useState(false);

	function AddBtnToggle() {
		setAddBtn(!addBtn);
	}
	return (
		<div className='AdminCenter'>
			{addBtn ? (
				<>
					<div className='unclickable' onClick={()=>setAddBtn(!addBtn)}></div>
					<AddProductModel AddBtnToggle={AddBtnToggle} />
				</>
			) : null}
			<div className='AdminCenter-container sm-container'>
				<div className='header-container'>
					<h1 className='title'>Admin Center</h1>
					<button className='add-btn' onClick={() => setAddBtn(!addBtn)}>
						<i className='fas fa-plus'></i>Add New
					</button>
				</div>
				<table>
					<tr>
						<th>Product</th>
						<th>Qty</th>
						<th>Price</th>
						<th></th>
						<th></th>
					</tr>
					<tr>
						<td>Jill</td>
						<td>5</td>
						<td>50</td>
						<td className='btn-col'>
							<button className='btn delete-btn'>Delete</button>
						</td>
						<td className='btn-col'>
							<button className='btn edit-btn'>Edit</button>
						</td>
					</tr>
					<tr>
						<td>Jill</td>
						<td>5</td>
						<td>50</td>
						<td className='btn-col'>
							<button className='btn delete-btn'>Delete</button>
						</td>
						<td className='btn-col'>
							<button className='btn edit-btn'>Edit</button>
						</td>
					</tr>
					<tr>
						<td>Jill</td>
						<td>5</td>
						<td>50</td>
						<td className='btn-col'>
							<button className='btn delete-btn'>Delete</button>
						</td>
						<td className='btn-col'>
							<button className='btn edit-btn'>Edit</button>
						</td>
					</tr>
					<tr>
						<td>Jill</td>
						<td>5</td>
						<td>50</td>
						<td className='btn-col'>
							<button className='btn delete-btn'>Delete</button>
						</td>
						<td className='btn-col'>
							<button className='btn edit-btn'>Edit</button>
						</td>
					</tr>
					<tr>
						<td>Jill</td>
						<td>5</td>
						<td>50</td>
						<td className='btn-col'>
							<button className='btn delete-btn'>Delete</button>
						</td>
						<td className='btn-col'>
							<button className='btn edit-btn'>Edit</button>
						</td>
					</tr>
					<tr>
						<td>Jill</td>
						<td>5</td>
						<td>50</td>
						<td className='btn-col'>
							<button className='btn delete-btn'>Delete</button>
						</td>
						<td className='btn-col'>
							<button className='btn edit-btn'>Edit</button>
						</td>
					</tr>
					<tr>
						<td>Jill</td>
						<td>5</td>
						<td>50</td>
						<td className='btn-col'>
							<button className='btn delete-btn'>Delete</button>
						</td>
						<td className='btn-col'>
							<button className='btn edit-btn'>Edit</button>
						</td>
					</tr>
					<tr>
						<td>Jill</td>
						<td>5</td>
						<td>50</td>
						<td className='btn-col'>
							<button className='btn delete-btn'>Delete</button>
						</td>
						<td className='btn-col'>
							<button className='btn edit-btn'>Edit</button>
						</td>
					</tr>
				</table>
			</div>
		</div>
	);
};

export default AdminCenter;
