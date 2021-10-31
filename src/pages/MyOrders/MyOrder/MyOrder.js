import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './MyOrder.css';

const MyOrder = ({ order }) => {
    console.log(order)

    return (
        <div className='w-75 mx-auto'>
            <Container className='card shadow-lg p-2 mb-3 '>
                <Row className='d-flex align-items-center order-card'>
                    <Col lg={3} sm={12}>
                        <div>
                            <img className='order-image d-block w-100' src={order.orderedItem.img} alt='ordered' />
                        </div>
                    </Col>
                    <Col lg={5} sm={12} className='order-details'>
                        <h5>{order.orderedItem.title} Tour</h5>
                        <h6>Cost: ${order.orderedItem.price}</h6>
                        <small className='d-block'>Email : {order.email}</small>
                    </Col>
                    <Col lg={4} sm={12}>
                        <h5 className='badge text-dark fs-6 bg-warning'>Status: {order.status}</h5>
                        <small className='d-block m-1'>Order ID : {order._id}</small>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MyOrder;