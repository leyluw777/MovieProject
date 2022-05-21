import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
                    <h1>
                        <NavLink to='/' className='nav-title'>
                            MustSee
                        </NavLink>
                    </h1>
        </div>
    )
}

export default Navbar;