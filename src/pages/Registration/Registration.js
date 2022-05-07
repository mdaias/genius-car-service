import React from 'react';
import "./Registration.css";

const Registration = () => {
    return (
        <div className='register-form container bg-zinc-50'>

            <h1 className=' text-center text-emerald-500'>Registration</h1>

            <form className=' mt-10'>
                <input type="text" name='name' placeholder='Enter your full-name' />

                <input type="email" name="email" placeholder='Enter a valid email address' id="" />

                <input type="password" name="password" placeholder='Password' id="" />
                <input type="password" name="confirmPassword" placeholder='Confirm Password' id="" />

                <input className='w-50 mx-auto text-white bg-blue-300' type="submit" value="Registration" />
            </form>

        </div>
    );
};

export default Registration;