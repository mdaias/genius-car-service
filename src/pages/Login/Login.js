import React, { useRef } from 'react';
// import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Login.css";
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {

    const navigate = useNavigate();

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (loading) {

    }

    let errorElement;

    if (error) {
        errorElement =
            <div>
                <p className=' text-red-500 text-center'>Error: {error?.message}</p>
            </div>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    // create email pass reference
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleLogin = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='login-form container bg-zinc-50 my-3'>
            <h1 className='text-center text-blue-500 font-bold'>LogIn</h1>

            <form onSubmit={handleLogin} className=' mt-10'>

                <input type="email" name="email" ref={emailRef} placeholder='Enter a valid email address' required />

                <input type="password" name="password" ref={passwordRef} placeholder='Password' required />
 
                <input className='w-50 hover:bg-orange-500 font-bold mx-auto text-white bg-blue-500 rounded-lg' type="submit" value="Login" />
            </form>
                {errorElement}
            <p className='text-center'>New to genius Car Service? <span className='cursor-pointer text-orange-600 font-bold' onClick={() => navigate('/registration')}>Registration</span></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;