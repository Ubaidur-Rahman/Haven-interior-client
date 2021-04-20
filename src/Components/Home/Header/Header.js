import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import backgroundImg from '../../../images/bedroom.jpg';
import Servicess from '../Servicess/Servicess';
import './Header.css';

const Header = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://guarded-peak-51076.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <div class="box">
                <img className='img-fluid  header-bg' src={backgroundImg} alt="" />
                <div class="text">
                    <h1 style={{ color: '#005C95', display: 'inline-block' }}>GIVING YOUR HOME <h1 style={{ color: '#203334' }}> A NEW STYLE</h1>
                    </h1>
                    <br />
                    <button className="custom-btn-bg">
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
            <div>
                <span className="divider component-title my-5">
                    Our Services
            </span>
            <h4 className="text-dark text-center">Services We Provide</h4>
            </div>
            <div className="card-deck row mt-5">
                {
                    services.map(service => <Servicess service={service} />)
                }
            </div>

        </div>

    );
};

export default Header;