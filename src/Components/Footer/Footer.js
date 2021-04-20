import { faFacebookF, faGooglePlusG, faTelegramPlane, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import footerLogo from '../../images/logo green.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
        <div className="container-fluid p-3">
        <h2 className='text-center fs-2 component-title'>Get In Touch</h2>
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className='icon'/>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>1010 Avenue, Uttara, Dhaka</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                        <FontAwesomeIcon icon={faPhone} className='icon' />
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>+8801234567890</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            
                            <FontAwesomeIcon icon={faEnvelopeOpen} className='icon'/>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>haven@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="#"><img src={footerLogo} className="img-fluid" alt="logo" /></a>
                            </div>
                            <div className="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="https://web.facebook.com/ubaidurarian/"><FontAwesomeIcon icon={faFacebookF} className="socialIcon facebook-bg"/></a>
                                <a href="https://web.facebook.com/ubaidurarian/"><FontAwesomeIcon icon={faTwitter}  className="socialIcon twitter-bg"/></a>
                                <a href="https://web.facebook.com/ubaidurarian/"><FontAwesomeIcon icon={faGooglePlusG} className="socialIcon google-bg"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">Dashboard</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Expert Team</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe. Stay in touch</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address" />
                                    <button><FontAwesomeIcon className="subscribe-btn" icon={faTelegramPlane} /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2021, All Right Reserved <a href="https://web.facebook.com/ubaidurarian/">Ubaidur</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;