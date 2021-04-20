import React from 'react';

const BlogPost = (props) => {
    const { title, description, img } = props.blog;
    return (
        <div className="col-md-4 text-center">
            <div className="border m-2">

                <img className="zoom" style={{ maxHeight: '150px' }} src={img} alt="blogImage" />
                <h5>{title}</h5>
                <p className="card-text text-secondary mt-4">{description}</p>
                <button className=" btn custom-btn-style">Read More</button>

            </div>

        </div>
    );
};

export default BlogPost;