import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className="m-4 pt-5">
            <h2>Have Some Questions?</h2>
            <hr />
            <Container>
                <Row className="d-flex align-items-center justify-content-center p-4 rounded-3 shadow-lg contact mx-auto">
                    <Col lg={12} sm={12}>
                        <p className="text-secondary"><i className="fas fa-envelope-open-text fa-9x me-5"></i></p>
                    </Col>
                    <Col lg={12} sm={12}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control className="rounded-pill" type="email" placeholder="First Name" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control className="rounded-pill" type="password" placeholder="Last Name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control className="rounded-pill" type="password" placeholder="What's your Email?" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control className="rounded-pill" type="password" placeholder="Your Questions" />
                            </Form.Group>
                            <Button className="btn-regular d-block w-100 text-white fw-bolder rounded-pill" type="submit">
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div >
    );
};

export default Contact;