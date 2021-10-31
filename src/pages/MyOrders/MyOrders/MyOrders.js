import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const { email } = user;
    const [orders, setOrders] = useState([]);

    console.log(email);
    console.log(orders)

    useEffect(() => {
        const url = `https://frightful-moonlight-78776.herokuapp.com/orders/${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [email])

    return (
        <div className='py-5'>
            <Container>
                <h4>My Orders</h4>

                <div >
                    {
                        orders.map(order => <MyOrder key={order._id} order={order}></MyOrder>)
                    }

                </div>
            </Container>
        </div>
    );
};

export default MyOrders;