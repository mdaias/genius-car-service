import React from 'react';
import { Link } from 'react-router-dom';
import "./Expert.css"

const Expert = ({ expert }) => {
    const { name, img } = expert;
    console.log(expert)

    return (
        <div className='flex flex-col justify-center items-center border-2 p-2 mx-5'>

            <img src={img} alt="" />

            <h1 className='text-3xl mt-5 font-semibold text-center'>{name}</h1>

            <p className='text-xl mt-1 font-semibold text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corrupti aut nesciunt soluta odit minima.</p>

            <Link className='mt-5' to=''>Hire Me</Link>

        </div>
    );
};

export default Expert;