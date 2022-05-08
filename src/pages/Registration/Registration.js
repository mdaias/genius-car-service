import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Registration.css";

const Registration = () => {

    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        console.log(name, email, password, confirmPassword)
    }


    return (
        <div className='register-form container bg-zinc-50'>

            <h1 className=' text-center text-emerald-500'>Registration</h1>

            <form onSubmit={handleRegister} className=' mt-10'>
                <input type="text" name='name' placeholder='Enter your full-name' />

                <input type="email" name="email" placeholder='Enter a valid email address' id="" />

                <input type="password" name="password" placeholder='Password' id="" />
                <input type="password" name="confirmPassword" placeholder='Confirm Password' id="" />

                <input className='w-50 mx-auto text-white bg-blue-300' type="submit" value="Registration" />
            </form>

            <p className='text-center'>Already have an account?<span className='cursor-pointer font-bold text-orange-600' onClick={() => navigate('/login')}> Login</span></p>

        </div>
    );
};

export default Registration;