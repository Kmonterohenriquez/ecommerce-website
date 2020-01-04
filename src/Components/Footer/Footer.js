import React from 'react'
import './Footer.sass'
const Footer = () => {
    return (
        <div className='Footer'>
            <div className="grid-footer container">
                <div className="box">
                    <ul>
                        <li>Return Policy</li>
                        <li>Shipping FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="box">
                    <h1>BECOME AN INSIDER</h1>
                    <p>Promotions, new products, and sales. Directly to your inbox.</p>
                    <div className='email-input'>
                        <input type="text"/><i className="far fa-envelope"></i>
                    </div>
                </div>
                <div className="box">
                    <h1>logo</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
