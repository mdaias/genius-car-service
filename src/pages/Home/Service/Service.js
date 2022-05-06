import React from 'react';

const Service = ({ service }) => {
    const { name, price, img, description } = service;

    return (
        <article className='rounded-t-lg flex flex-col justify-center items-center border-2 p-2'>
            <div className="thumbnail">
                <img className='rounded' src={img} alt="" />
            </div>
            <div className="details mt-5 font-semibold text-center">
                <h1 className='text-3xl'>{name}</h1>
                <h3 className='text-2xl'>Price: {price}</h3>
                <p className=' text-xl'>{description}</p>

                <button className='rounded-full bg-blue-700 text-white p-2 mt-2 font-semibold hover:bg-pink-500'>Book: {name}</button>
            </div>
            <div>
               
            </div>
        </article>
    );
};

export default Service;