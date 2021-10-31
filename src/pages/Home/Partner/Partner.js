import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Partner = () => {
    return (
        <div style={{ margin: '20px 0 0', padding: "20px 0" }
        }>
            <h4 className="text-center mt-2 mb-4">OUR PARTNERS</h4>
            <Container>
                <Row className="g-3">
                    <Col className="shadow-lg m-2 my-2">
                        <img className="d-block m-auto p-2" src="https://i.ibb.co/4F7W54j/294695-amazon-icon.png" alt="" />
                    </Col>
                    <Col className="shadow-lg m-2 my-2">
                        <img className="d-block m-auto p-2" src="https://i.ibb.co/4sqD5HV/317725-linkedin-social-icon.png" alt="" />
                    </Col>
                    <Col className="shadow-lg m-2 my-2">
                        <img className="d-block m-auto p-2" src="https://i.ibb.co/DkMytjW/2993685-brand-brands-google-logo-logos-icon.png" alt="" />
                    </Col>
                    <Col className="shadow-lg m-2 my-2">
                        <img className="d-block m-auto p-2" src="https://i.ibb.co/7QV7kdV/5296499-fb-facebook-facebook-logo-icon.png" alt="" />
                    </Col>
                    <Col className="shadow-lg m-2 my-2">
                        <img className="d-block m-auto p-2" src="https://i.ibb.co/C9zMxkD/5869378-alibaba-ecommerce-shopping-icon.png" alt="" />
                    </Col>
                    <Col className="shadow-lg m-2 my-2">
                        <img className="d-block m-auto p-2" src="https://i.ibb.co/27K2QFR/7422457-kfc-burger-hamburger-fast-food-cheeseburger-icon.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Partner;