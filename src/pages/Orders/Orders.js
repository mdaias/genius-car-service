import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const  [user]  = useAuthState(auth);

    useEffect(() => {

        const getOrder = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/orders?email=${email}`
            const { data } = await axios.get(url);
            setOrders(data);
        }
        getOrder()

    }, [user])
    return (
        <div>
            <h1>show all orders:{orders.length}</h1>
        </div>
    );
};

export default Orders;