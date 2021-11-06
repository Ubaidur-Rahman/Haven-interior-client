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
            status === 'Done' ? <h6 style={{background: '#4CBB17'}} className="text-white rounded p-2 border shadow-lg">{status}</h6> :  status === 'Ongoing' ? <h6 style={{background: '#FFE55C'}} className=" rounded p-2 border shadow-lg">{status}</h6> : <h6 style={{background: '#FF746C'}} className="rounded p-2 border shadow-lg">{status}</h6>
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