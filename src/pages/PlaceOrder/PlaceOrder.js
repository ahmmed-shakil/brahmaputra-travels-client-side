import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = (props) => {
    const { user } = useAuth();
    const { id } = useParams();
    const [tour, setTour] = useState({});
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/tours/${id}`)
            .then(res => res.json())
            .then(data => setTour(data))
    }, [])

    const onSubmit = data => {
        data.status = 'pending';
        data.orderedItem = {
            id: tour._id,
            title: tour.title,
            price: tour.price
        };
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed successfully!')
                    reset();
                }
            })
    };
    return (
        <div className='pt-5'>
            <Container>
                <Row>
                    <Col lg={6} sm={12} className='card p-2 shadow'>
                        <div className='shadow-lg'>
                            <img src={tour.img} alt="tour=plan" className='w-100' />
                        </div>
                        <div className='my-3 bg-dark text-white d-flex align-items-center'>
                            <Col lg={6} md={12}>
                                <h4>{tour.title}</h4>
                            </Col>
                            <Col lg={6} md={12}>
                                <h5>Total Cost : ${tour.price}</h5>
                            </Col>
                        </div>

                        <p>{tour.description}</p>

                    </Col>
                    <Col lg={6} sm={12} className='fw-bold text-start'>
                        <form onSubmit={handleSubmit(onSubmit)} className='w-100'>
                            <Form.Group as={Col} controlId="formGridName" className='mb-3'>
                                <Form.Control {...register("name")} defaultValue={user.displayName} type="text" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail" className='mb-3'>
                                <Form.Control {...register("email")} defaultValue={user.email} type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Control {...register("address")} placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Control {...register("address2")} placeholder="Apartment, studio, or floor" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridPhone">
                                <Form.Control {...register("phone")} type='phone' placeholder="Phone Number" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCity" className='mb-3'>
                                <Form.Control {...register("city")} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridNumber" className='mb-3'>
                                <Form.Control {...register("members")} type='number' placeholder='Total members to travel' />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridDate" className='mb-3'>
                                <Form.Control {...register("date")} type='date' placeholder='Expected date to depart' />
                            </Form.Group>
                            <input type="submit" className='btn-regular text-white py-2 px-4 my-4' value='CONFIRM BOOKING' />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceOrder;