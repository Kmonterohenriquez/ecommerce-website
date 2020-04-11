import React from 'react';
import './AdminCenter.sass';
import AddProductModel from '../../Components/AddProductModel/AddProductModel'

const AdminCenter = () => {
	return (
		<div className='AdminCenter'>
			<div className='AdminCenter-container sm-container'>
                <div className='header-container'>
                    <h1 className='title'>Admin Center</h1>
                    <button className='add-btn'><i className="fas fa-plus"></i>Add New</button>
                </div>
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>Age</th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                        <td className='btn-col'><button className='btn delete-btn'>Delete</button></td>
                        <td className='btn-col'><button className='btn edit-btn'>Edit</button></td>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                        <td className='btn-col'><button className='btn delete-btn'>Delete</button></td>
                        <td className='btn-col'><button className='btn edit-btn'>Edit</button></td>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                        <td className='btn-col'><button className='btn delete-btn'>Delete</button></td>
                        <td className='btn-col'><button className='btn edit-btn'>Edit</button></td>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                        <td className='btn-col'><button className='btn delete-btn'>Delete</button></td>
                        <td className='btn-col'><button className='btn edit-btn'>Edit</button></td>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                        <td className='btn-col'><button className='btn delete-btn'>Delete</button></td>
                        <td className='btn-col'><button className='btn edit-btn'>Edit</button></td>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                        <td className='btn-col'><button className='btn delete-btn'>Delete</button></td>
                        <td className='btn-col'><button className='btn edit-btn'>Edit</button></td>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                        <td className='btn-col'><button className='btn delete-btn'>Delete</button></td>
                        <td className='btn-col'><button className='btn edit-btn'>Edit</button></td>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                        <td className='btn-col'><button className='btn delete-btn'>Delete</button></td>
                        <td className='btn-col'><button className='btn edit-btn'>Edit</button></td>
                    </tr>
                    
                    
                </table>
            </div>
            <AddProductModel/>
		</div>
	);
};

export default AdminCenter;
