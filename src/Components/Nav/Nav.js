import React from 'react';
import './Nav.sass'
import {Link} from 'react-router-dom'
import logo from '../../img/A_logo.png'

const Nav = () => {
    return (
        <header className='Nav '>
            <div className='nav-container container'>
                <i className="fas fa-search"></i>
                <nav >
                    <Link className='link' to='/all_products'><li>All products</li></Link>
                    <Link className='link' to='/suits'><li>suits</li></Link>
                    <Link to={'/'}><img src={logo} alt="logo"/></Link>
                    <Link className='link' to='/shirts'><li>shirts</li></Link>
                    <Link className='link' to='/shoes'><li>shoes</li></Link>
                </nav>
                <div className='right-side'>
                    <i className="fas fa-shopping-bag"></i>
                    <Link className='link' to='/login'><i className="fas fa-user"></i></Link>
                    <i className="menu-icon fas fa-ellipsis-v"></i>
                </div>
            </div>
        </header>
    );
}

export default Nav;
