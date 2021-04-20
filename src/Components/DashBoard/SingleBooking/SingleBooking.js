import React from 'react';

const SingleBooking = (props) => {
    const {imageURL, status, name , description, orderTime} = props.booking
    console.log(props)
    return (
        <div className="col-md-4 shadow-lg text-center">
        <div className="border m-2">
        <div className="d-flex justify-content-between">
        <img style={{ maxHeight: '50px' }} src={imageURL} alt=""/>
        <span style={{background: '#FFE3E3'}} className="text-danger rounded p-1 border border-danger shadow-lg">{status}</span>
           
        </div>
           <div className="text-center text-secondary">
           <h4 className="text-dark">{name}</h4>
             <h6>Order Time: {orderTime}</h6>
            <h6 className="text-dark">{description}</h6>
           </div>
        </div></div>
    );
};

export default SingleBooking;