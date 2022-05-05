import React from 'react';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    console.log(expert)

    return (
        <div className='flex flex-col justify-center items-center border-2 p-2'>

            <img src={img} alt="" />

            <h1 className='text-3xl mt-5 font-semibold text-center'>{name}</h1>

        </div>
    );
};

export default Expert;