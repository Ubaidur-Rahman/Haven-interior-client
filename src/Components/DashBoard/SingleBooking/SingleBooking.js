import React from 'react';

const SingleBooking = (props) => {
    const {imageURL, status, name , description, orderTime} = props.booking
    console.log(props)
    return (
        <div className="col-md-4 shadow-lg text-center">
        <div className="border m-2">
        <div className="d-flex justify-content-between">
        <div><img style={{ maxHeight: '100px' }} src={imageURL} alt=""/></div>
        <div>
        {
            status === 'Done' ? <h6 style={{background: '#66AA75'}} className=" rounded p-2 border border-primary shadow-lg">{status}</h6> :  status === 'Ongoing' ? <h6 style={{background: '#FFE3E3'}} className="text- rounded p-2 border border-danger shadow-lg">{status}</h6> : <h6 style={{background: '#FFE3E3'}} className="text-dark text- rounded p-2 border border-danger shadow-lg">{status}</h6>
        }
       
        </div>
           
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