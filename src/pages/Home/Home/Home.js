import React from 'react';
import Tours from '../../Tours/Tours/Tours';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Partner from '../Partner/Partner';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tours></Tours>
            <Features></Features>
            <WhyUs></WhyUs>
            <Partner></Partner>
        </div>
    );
};

export default Home;