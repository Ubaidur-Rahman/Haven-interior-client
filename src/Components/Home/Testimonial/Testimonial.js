import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const Testimonial = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5055/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])



    return (
        <div style={{ backgroundColor: "#F6F6F6" }}>
            <span className="divider">
                <h2 className='component-title'>Testimonial</h2>

            </span>
            <div className="row">
                {
                    reviews.map(review => <SingleReview review={review} />)
                }
            </div>
        </div>
    );
};

export default Testimonial;