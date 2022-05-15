import React from 'react';
import useServices from '../../Hooks/useService';


const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your services</h2>
            {
                services.map(service =>
                    <div className='flex justify-between items-center bg-orange-400 p-3' key={service._id}>

                        <h5 className='p-2 text-white border-fuchsia-300'>{service.name}</h5>

                        <div>
                            <button className='rounded-lg ml-3 bg-blue-600 p-2 border-2 hover:bg-orange-400 text-white'
                                onClick={() => handleDelete(service._id)}
                            >delete</button>
                        </div>

                    </div>)
            }
        </div>
    );
};

export default ManageServices;