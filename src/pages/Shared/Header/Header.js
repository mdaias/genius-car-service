import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import {signOut} from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth)

    const handleLogout = () =>{
        signOut(auth)
    }

    return (

        <nav className=' sticky w-auto top-0 flex md:justify-between justify-between  items-center md:bg-neutral-100 md:h-20'>
            <div className='flex justify-start items-center'>
                <NavLink className='text-white md:text-lg text-xs font-bold md:ml-3 ml-1 no-underline font-serif p-1' to='/home'>Home</NavLink>
                <NavLink className='text-white md:text-lg text-xs font-bold md:ml-3 ml-1 no-underline font-serif p-1' to='/services'>Services</NavLink>
                <NavLink className='text-white md:text-lg text-xs font-bold md:ml-3 ml-1 no-underline font-serif p-1' to='/checkout'>Hire Expert</NavLink>
            </div>
            <div className='flex justify-start items-center'>
                <NavLink className='text-white md:text-lg text-xs mr-2 ml-1 md:ml-2 no-underline font-bold font-serif p-1' to='/about'>About</NavLink>
                {
                    user ?
                        <NavLink onClick={handleLogout} className='text-white md:text-lg text-xs mr-2 ml-1 md:ml-2 no-underline font-bold font-serif p-1' to=''>Logout</NavLink>
                    :
                        <NavLink className='text-white md:text-lg text-xs mr-2 ml-1 md:ml-2 no-underline font-bold font-serif p-1' to='/login'>LogIn</NavLink>}
            </div>
        </nav>

    );
};

export default Header;