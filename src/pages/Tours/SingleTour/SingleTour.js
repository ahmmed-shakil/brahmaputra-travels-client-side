import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleTour.css'

const SingleTour = ({ tour }) => {
    const { title, description, img, price, _id } = tour;

    return (
        <div>
            <Col className='d-grid h-100'>
                <Card>
                    <Card.Img variant="top" src={img} className='card-img' />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 150)}...
                        </Card.Text>
                        <Card.Text>
                            Cost : ${price}
                        </Card.Text>
                        <Link to={`/place-order/${_id}`}><Button className='btn-regular'>BOOK {title.toUpperCase()} TOUR</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleTour;