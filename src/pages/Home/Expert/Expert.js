import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Expert.css"

const Expert = ({ expert }) => {
    const { name, img } = expert;

    const navigate = useNavigate();

    return (
        <div className='flex flex-col justify-center items-center border-2 p-2 md:mx-5'>

            <img src={img} alt="" />

            <h1 className='text-3xl mt-5 font-semibold text-center'>{name}</h1>

            <p className='text-xl mt-1 font-semibold text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corrupti aut nesciunt soluta odit minima.</p>

            <button onClick={()=>navigate('/checkout')} className='rounded-full w-full bg-blue-700 text-white p-2 mt-2 font-semibold hover:bg-pink-500'>Hire Me</button>

        </div>
    );
};

export default Expert;