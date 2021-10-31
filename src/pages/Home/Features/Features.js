import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Features.css'

const Features = () => {
    return (
        <div className='pt-5 my-lg-5 my-0 feature-bg'>
            <div>
                <h4 className='mb-4 text-white'>WE WILL OFFER YOU THE BEST SERVICE IN THE WORLD!</h4>
                <Container>
                    <Row className='text-white rounded-3'>
                        <Col lg={3} md={6} sm={12} className='shadow p-3'>
                            <i className="fas fa-bus-alt fa-4x"></i>
                            <h5 className='mt-4 fw-bold'>PRIVATE TRANSPORTS</h5>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='shadow p-3'>
                            <i className="fas fa-road fa-4x"></i>
                            <h5 className='mt-4 fw-bold'>DIVERSE DESTINATIONS</h5>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='shadow p-3'>
                            <i className="fas fa-wine-glass-alt fa-4x"></i>
                            <h5 className='mt-4 fw-bold'>DRINKS INCLUDED</h5>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='shadow p-3'>
                            <i className="fas fa-house-user fa-4x"></i>
                            <h5 className='mt-4 fw-bold'>FAST BOOKING</h5>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div >
    );
};

export default Features;