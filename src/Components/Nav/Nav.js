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
                <Link to='/all_products'><li>All products</li></Link>
                <Link to='/suits'><li>suits</li></Link>
                <Link to={'/'}><img src={logo} alt="logo"/></Link>
                <Link to='/shirts'><li>shirts</li></Link>
                <Link to='/shoes'><li>shoes</li></Link>
            </nav>
            <div className='right-side'>
                <i className="fas fa-shopping-bag"></i>
                <Link to='/login'><i className="fas fa-user"></i></Link>
            </div>
            </div>
        </header>
    );
}

export default Nav;
