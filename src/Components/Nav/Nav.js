import React from 'react';
import './Nav.sass'
import {Link} from 'react-router-dom'
import logo from '../../img/A_logo.png'
const Nav = () => {
    return (
        <header className='Nav '>
            <div className='nav-container container'>
            <i className="fas fa-search"></i>
            <nav className=''>
                <Link to='#'><li>suits</li></Link>
                <Link to='#'><li>shirts</li></Link>
                <img src={logo} alt=""/>
                <Link to='#'><li>belts</li></Link>
                <Link to='#'><li>shoes</li></Link>
            </nav>
            <i className="fas fa-shopping-bag"></i>
            </div>
        </header>
    );
}

export default Nav;
