import React from 'react';
import Footer from '../../Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Testimonial from '../Testimonial/Testimonial';
import WorkGallery from '../WorkGallery/WorkGallery';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <WorkGallery />
            <Testimonial />
            <Blogs />
            <AboutUs />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;