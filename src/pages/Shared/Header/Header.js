import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=''>
            <div className='mx-5'>
                <NavLink className='ml-5 text-xs text-white font-bold font-serif p-1' to='/home'>Home</NavLink>
                <NavLink className='ml-5 text-xs text-white font-bold font-serif p-1' to='/services'>Services</NavLink>
                <NavLink className='ml-5 text-xs text-white font-bold font-serif p-1' to='/about'>About</NavLink>
            </div>
            <div className='mx-5'>
                <NavLink className='ml-5 text-white text-sm font-bold font-serif p-1' to='/login'>LogIn</NavLink>
                <NavLink className='ml-5 text-white text-sm font-bold font-serif p-1' to='/registration'>Registration</NavLink>
            </div>
        </nav>
    );
};

export default Header;