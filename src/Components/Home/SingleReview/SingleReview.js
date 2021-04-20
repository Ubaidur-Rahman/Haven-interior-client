import React from 'react';

const SingleReview = ({review}) => {
    
    return (
        <div className="col-md-4">
            <div className="card">
  <div className="card-header">
  <img style={{ maxHeight: '50px' ,borderRadius: '50%' }} src={review.photoURL} alt=""/>
  <h6>{review.description}</h6>
  
  
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>{review.name}</p>
      <footer className="blockquote-footer">{review.companyName
}</footer>
    </blockquote>
  </div>
</div>
        </div>
    );
};

export default SingleReview;