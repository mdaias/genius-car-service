import React from 'react';

const Service = ({ service }) => {
    const { name, price, img, description } = service;

    return (
        <article className='rounded-t-lg border-2 p-2'>
            <div className="thumbnail">
                <img className='rounded' src={img} alt="" />
            </div>
            <h1>{name}</h1>
            <p className=' text-xs'>{description}</p>
            <h3>Price: {price}</h3>
        </article>
    );
};

export default Service;