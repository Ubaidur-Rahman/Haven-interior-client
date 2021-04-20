import React from 'react';
import { Link } from 'react-router-dom';

const Servicess = ({service}) => {
    const { _id } = service;
   
    return (
        <div className="col-md-4 card-bg text-center">
        <div className="border m-2">
        <img className="zoom" style={{ maxHeight: '150px' }} src={service.imageURL} alt=""/>
           <div className="text-center  text-secondary">
           <h4 className="text-dark">{service.name}</h4>
            <h4>Service Charge: $<span className="text-warning">{service.price}</span></h4>
            <h5>Designers: {service.designer}</h5>
            <h6>Workers: {service.worker}</h6>
            <h6 className="text-dark">{service.description}</h6>
            
           </div>
           <Link className="custom-link-style" to={`/order/${_id}`}><button className='btn custom-btn-bg' >Buy Now</button></Link>
        </div></div>
    );
};

export default Servicess;