import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleTour from '../SingleTour/SingleTour';

const Tours = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('https://frightful-moonlight-78776.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return (
        <div className='pt-5'>
            <Container>
                <div>
                    <h3>MOST POPULAR TOURS</h3>
                    <p>Your are invited to our premium and exciting tour plans. You are invited with is, HURRY UP!</p>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        tours.map(tour => <SingleTour key={tour._id} tour={tour}></SingleTour>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Tours;