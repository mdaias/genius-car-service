import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (

        <nav className=' sticky top-0 bg-neutral-100'>
            <div>
                <NavLink className='text-white font-bold font-serif p-1' to='/home'>Home</NavLink>
                <NavLink className='text-white font-bold font-serif p-1' to='/services'>Services</NavLink>
                <NavLink className='text-white font-bold font-serif p-1' to='/services'>Hire Expert</NavLink>
            </div>
            <div>
                <NavLink className='text-white font-bold font-serif p-1' to='/about'>About</NavLink>
                <NavLink className='text-white font-bold font-serif p-1' to='/login'>LogIn</NavLink>
            </div>
        </nav>

    );
};

export default Header;