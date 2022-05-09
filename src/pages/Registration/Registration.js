import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Registration.css";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';

const Registration = () => {

    const [agree, setAgree] = useState(false);

    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (error || updateError) {

    }

    if (user) {
        console.log('user', user)
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (agree & password===confirmPassword) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            console.log('Updated profile');
            navigate(from, { replace: true });
        }
    }


    return (
        <div className='register-form container bg-zinc-50'>

            <h1 className=' text-center text-emerald-500'>Registration</h1>

            <form onSubmit={handleRegister} className=' mt-10'>
                <input type="text" name='name' placeholder='Enter your full-name' required />

                <input type="email" name="email" placeholder='Enter a valid email address' required />

                <input type="password" name="password" placeholder='Password' required />
                <input type="password" name="confirmPassword" placeholder='Confirm Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label
                    className={`ml-2 ${agree ? 'text-blue-700' : 'text-red-500'}`}
                    htmlFor="terms">Accept Genius Car Terms and Conditions
                </label>

                <input disabled={!agree} className='w-50 hover:bg-orange-500 font-bold mx-auto text-white bg-blue-500' type="submit" value="Registration" />
            </form>

            <p className='text-center'>Already have an account?<span className='cursor-pointer font-bold text-orange-600' onClick={() => navigate('/login')}> Login</span></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Registration;