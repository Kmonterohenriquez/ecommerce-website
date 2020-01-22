import React from 'react'
import './Footer.sass'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="grid-footer container">
                <div className="box-1">
                    <h1>logo</h1>
                </div>
                <div className="box-2">
                    <h1>BECOME AN INSIDER</h1>
                    <p>Promotions, new products, and sales. Directly to your inbox.</p>
                    <div className='email-input'>
                        <i className="far fa-envelope"></i>
                        <input type="text" placeholder='email@aaron.com'/>
                        <button>Submit</button>
                    </div>
                </div>
                <div className="box-3">
                    <div className='align-end'>
                        <ul>
                            <li><Link to='#'>Ties</Link></li>
                            <li><Link to='#'>Suits</Link></li>
                            <li><Link to='#'>Belts</Link></li>
                            <li><Link to='#'>Shirts</Link></li>
                            <li><Link to='#'>Return Policy</Link></li>
                            <li><Link to={'/licensing'}>Licensing</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
