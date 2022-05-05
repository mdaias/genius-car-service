import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div>
                <NavLink className='text-white font-bold font-serif p-1' to='/home'>Home</NavLink>
                <NavLink className='text-white font-bold font-serif p-1' to='/services'>Services</NavLink>
                <NavLink className='text-white font-bold font-serif p-1' to='/about'>About</NavLink>
            </div>
            <div>
                <NavLink className='text-white font-bold font-serif p-1' to='/login'>LogIn</NavLink>
                <NavLink className='text-white font-bold font-serif p-1' to='/registration'>Registration</NavLink>
            </div>
        </nav>
    );
};

export default Header;