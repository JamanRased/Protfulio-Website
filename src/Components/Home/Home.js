import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Skills></Skills>
            <Works></Works>
            <Contact></Contact>
        </div>
    );
};

export default Home;