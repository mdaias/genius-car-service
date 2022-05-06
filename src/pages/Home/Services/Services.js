import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <div>
            <h1 className='mx-5 text-center text-4xl font-bold my-5'>Our Services</h1>
            <div className='md:mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;