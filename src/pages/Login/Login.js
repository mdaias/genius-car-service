import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
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

    if (error) {

    }

    if (user) {
        navigate(from, { replace: true });
    }

    // create email pass reference
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='login-page bg-red-100 mx-auto container rounded-lg border-4 p-2'>
            <h1 className='text-center text-blue-500 font-bold'>LogIn</h1>

            <Form onSubmit={handleSubmit} className='mx-5 mb-3'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='font-semibold fs-4 text-sky-500'>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='font-semibold fs-4 text-sky-500'>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='mx-auto d-block mt-6 w-50 text-white' variant="info" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-center'>New to genius Car Service? <span className='cursor-pointer text-orange-600 font-bold' onClick={() => navigate('/registration')}>Registration</span></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;