import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const Testimonial = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://guarded-peak-51076.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])



    return (
        <div className='p-5' style={{ backgroundColor: "#F6F6F6" }}>
            <span className="divider component-title mb-5">
                Testimonial
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