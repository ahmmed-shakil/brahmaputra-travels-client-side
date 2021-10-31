import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const ManageOrder = (props) => {
    const { order } = props;

    const handleUpdateStatus = id => {
        const updatedOrder = { ...order };
        updatedOrder.status = 'Approved';
        const url = `https://frightful-moonlight-78776.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Order Approved')
                    window.location.reload();
                }
            })
    }

    return (
        <Container className='card mb-3 p-2 shadow w-75 mx-auto'>
            <Row className='d-flex align-items-center justify-content-evenly'>
                <Col lg={6} sm={12} className='text-lg-start text-center'>
                    <h5>{order.orderedItem.title}</h5>
                    <h6>Cost: ${order.orderedItem.price}</h6>
                    <h6>Name: {order.name}</h6>
                    <h6>Email: {order.email}</h6>
                    <h5 className='badge text-dark fs-6 bg-warning'>Status: {order.status}</h5>
                    <small className='d-block'>Order ID: {order._id}</small>
                </Col>
                <Col lg={6} sm={12}>
                    <Button onClick={() => handleUpdateStatus(order._id)} className='btn-success my-3 d-block w-50 mx-auto me-lg-0'>Approve</Button>
                    <Button onClick={() => props.handleDeleteOrder(order._id)} className='btn-danger d-block w-50 mx-auto me-lg-0'>Delete Order</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ManageOrder;