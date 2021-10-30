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
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cox%27s_Bazar_beach_%283991311%29.jpg/2560px-Cox%27s_Bazar_beach_%283991311%29.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='mb-4'>
                            <h1>Explore Your Travel</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <Button className='btn-regular mb-lg-5 mb-3 btn-lg border-0 rounded-0'>Book A Tour</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.outsideonline.com/wp-content/uploads/2021/09/illimani-mountain-bolivia_h.jpg?width=1200"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div>
                            <h1>Explore Your Travel</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <Button className='btn-regular mb-lg-5 mb-3 btn-lg border-0 rounded-0'>Book A Tour</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.britannica.com/34/102134-050-6DE65DE1/La-Gruyere-district-Fribourg-canton-Switzerland.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div>
                            <h1>Explore Your Travel</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <Button className='btn-regular mb-lg-5 mb-3 btn-lg border-0 rounded-0'>Book A Tour</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;