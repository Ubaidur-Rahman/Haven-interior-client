import React from 'react';

const SingleReview = ({ review }) => {

  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-header text-center">
          <img className="my-2" style={{ maxHeight: '70px', borderRadius: '50%' }} src={review.photoURL} alt="" />
          <h6>{review.description}</h6>


        </div>
        <div className="card-body text-center">
          <blockquote className="blockquote mb-0">
            <p>{review.name}</p>
            <footer className="blockquote-footer">{review.companyName}</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;