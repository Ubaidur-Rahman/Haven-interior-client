import React from 'react';

const ManageSingleData = ({ service }) => {

    const handleDeleteService = (id) => {
        console.log(id)
        fetch("/delete/" + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => console.log('deleted success', result))
            .catch(err => console.log(err));
    }


    return (
        <div className="col-md-4 card-bg text-center">
            <div className="border m-2">

                <img style={{ maxHeight: '50px' }} src={service.imageURL} alt="" />
                <h5>Service Name: {service.name}</h5>
                <h6>Price: {service.price}</h6>


                <button onClick={() => handleDeleteService(service._id)} className='btn custom-btn-bg' >Delete Service</button>
            </div></div>
    );
};

export default ManageSingleData;