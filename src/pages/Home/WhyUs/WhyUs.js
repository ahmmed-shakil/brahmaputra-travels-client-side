import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import './WhyUs.css'

const WhyUs = () => {
    return (
        <div className="App my-5 py-5">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col md={6}>
                        <img src="https://i.ibb.co/PthZjyh/whyus.jpg" alt="" className="img-fluid rounded img-thumbnail img-why-us" />
                    </Col >
                    <Col md={6}>
                        <h2>Why Choose Us?</h2>
                        <Row className='py-5 text-center'>
                            <Col>
                                <i class="fas fa-user-friends fa-2x text-secondary"></i>
                                <h6 className='py-3 fw-bold'>ONLINE BOOKING</h6>
                            </Col>
                            <Col>
                                <i className="fas fa-hotel fa-2x text-secondary "></i>
                                <h6 className='py-3 fw-bold'>PREMIUM SERVICES</h6>
                            </Col>
                            <Col >
                                <i className="fas fa-hamburger fa-2x text-secondary"></i>
                                <h6 className='py-3 fw-bold'>FREE FOOD ON JOURNEY</h6>
                            </Col>
                            <Col >
                                <i className="fas fa-notes-medical fa-2x text-secondary"></i>
                                <h6 className='py-3 fw-bold'>MEDICAL SUPPORT</h6>
                            </Col>
                        </Row>
                        <Row className="px-md-5 px-3">
                            <ListGroup variant="flush">
                                <ListGroup.Item>Your entire holiday is designed around your requirements</ListGroup.Item>
                                <ListGroup.Item>All our specialists have travelled extensively or lived in their specialist regions</ListGroup.Item>
                                <ListGroup.Item>Make the difference between a good trip and an outstanding one</ListGroup.Item>
                                <ListGroup.Item>Offering more than just dates and names, they strive to offer real insight into their country</ListGroup.Item>
                            </ListGroup>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WhyUs;