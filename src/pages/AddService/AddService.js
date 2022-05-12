import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    };

    return (
        <div className='register-form container bg-zinc-50'>
            <h1 className=' text-center text-emerald-500'>Add service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className='' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />

                <textarea className='w-full p-3 my-2 text-center mx-1 border-2' placeholder='discription' {...register("description")} />

                <input className='' placeholder='price' type="number" {...register("price")} />

                <input className='' placeholder='Photo Url' type="text" {...register("img")} />

                <input className='w-50 hover:bg-orange-500 font-bold mx-auto text-white bg-blue-500' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;