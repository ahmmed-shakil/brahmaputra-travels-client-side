import React from 'react';
import { Container, Button, Carousel } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Banner.css'

const Banner = () => {

    const history = useHistory()

    const goToTours = () => {
        history.push('./tours')
    }

    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/ZBmhNFH/2560px-Cox-s-Bazar-beach-3991311.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='mb-4'>
                            <h1>Explore Your Travel</h1>
                            <p>Just browse trough and choose your own voyage of discovery</p>
                            <Button onClick={goToTours} className='btn-regular mb-lg-5 mb-3 btn-lg border-0 rounded-0'><i className="fas fa-bus"></i> Book A Tour</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/8rnsY96/illimani-mountain-bolivia-h.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div>
                            <h1>Mountains Are Your Home</h1>
                            <p>Just browse trough and choose your own voyage of discovery</p>
                            <Button onClick={goToTours} className='btn-regular mb-lg-5 mb-3 btn-lg border-0 rounded-0'><i className="fas fa-bus"></i> Book A Tour</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/NnryQ5j/La-Gruyere-district-Fribourg-canton-Switzerland.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div>
                            <h1>The Sky is Your Limit</h1>
                            <p>Just browse trough and choose your own voyage of discovery</p>
                            <Button onClick={goToTours} className='btn-regular mb-lg-5 mb-3 btn-lg border-0 rounded-0'><i className="fas fa-bus"></i> Book A Tour</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;