import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    console.log(orders)


    useEffect(() => {
        fetch('https://frightful-moonlight-78776.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    const handleDeleteOrder = id => {
        const url = `https://frightful-moonlight-78776.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remainingOrders = orders.filter(order => order._id !== id);
                    console.log(remainingOrders)
                    setOrders(remainingOrders);
                    alert('Deleted successfully')
                }
            })

    }

    return (
        <div className='pt-5'>
            <h2>Manage All Orders</h2>
            <Container>
                {
                    orders.map(order => <ManageOrder key={order._id} order={order} handleDeleteOrder={handleDeleteOrder}></ManageOrder>)
                }
            </Container>
        </div>
    );
};

export default ManageOrders;