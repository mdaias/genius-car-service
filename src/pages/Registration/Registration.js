import React from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Registration.css";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Registration = () => {

    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      
      if(loading){

      }

      if(error){

      }

      if(user){
          navigate('/')
      }

    const handleRegister = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        console.log(name,confirmPassword)
        createUserWithEmailAndPassword(email,password)
    }


    return (
        <div className='register-form container bg-zinc-50'>

            <h1 className=' text-center text-emerald-500'>Registration</h1>

            <form onSubmit={handleRegister} className=' mt-10'>
                <input type="text" name='name' placeholder='Enter your full-name' />

                <input type="email" name="email" placeholder='Enter a valid email address' id="" />

                <input type="password" name="password" placeholder='Password' id="" />
                <input type="password" name="confirmPassword" placeholder='Confirm Password' id="" />

                <input className='w-50 hover:bg-orange-500 font-bold mx-auto text-white bg-blue-500' type="submit" value="Registration" />
            </form>

            <p className='text-center'>Already have an account?<span className='cursor-pointer font-bold text-orange-600' onClick={() => navigate('/login')}> Login</span></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Registration;