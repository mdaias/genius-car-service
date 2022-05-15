import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../Hooks/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Order = () => {
    const {serviceId} = useParams()
    const [service] = useServiceDetails(serviceId)
    const [user] = useAuthState(auth); 

    const handleSubmit = event => {
        event.preventDefault();
        
       const order = {
        name :user.displayName,
        email: user.email,
        service: service.name,
        address: event.target.address.value,
        number: event.target.phone.value,
       }

       axios.post('http://localhost:5000/order', order)
       .then(response => {
           const {data} = response;
           if(data.insertedId){
               toast('your order is booked!!!');
               event.target.reset();
           }
       })

       
    }

    return (
        <div>
            <h2 className='text-center mt-3'>Order item: {service.name}</h2>
            
            <form className='register-form border-none' onSubmit={handleSubmit}>
                <input className='mb-2 w-full text-lg font-bold' type="text" name='name' value={user.displayName} placeholder='Name' readOnly required disabled/>

                <input className='mb-2 w-full text-lg font-bold' type="text" name='email' value={user.email} placeholder='Email address' readOnly required disabled/>

                <input className='mb-2 w-full text-lg font-bold' type="text" name='service' value={service.name} placeholder='service' readOnly required disabled/>
                
                <input className='mb-2 w-full text-lg font-bold' type="text" name='address' placeholder='Address' required/>

                <input className='mb-2 w-full text-lg font-bold' type="text" name='phone' placeholder='phone' required/>

                <input className='w-50 hover:bg-orange-500 font-bold mx-auto text-white bg-amber-600' type="submit" value="Place Order" />
            </form>

        </div>
    );
};

export default Order;