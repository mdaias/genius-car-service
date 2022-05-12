import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const { serviceId }= useParams();

    const [service, setService] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[serviceId])


    return (
        <article className='container w-75 rounded-t-lg flex flex-col md:flex-row justify-between items-center border-2 p-2'>
            <div className="">
                <img className='rounded' src={service.img} alt="" />
            </div>
            <div className="details mt-1 font-semibold text-center">
                <h1 className='text-3xl'>{service.name}</h1>
                <h3 className='text-2xl'>Price: {service.price}</h3>
                <p className=' text-xl'>{service.description}</p>

                <button className='rounded-full w-50 bg-blue-700 text-white p-2 mt-2 font-semibold hover:bg-pink-500'>Booking</button>
            </div>
        </article>
    );
};

export default ServiceDetails;