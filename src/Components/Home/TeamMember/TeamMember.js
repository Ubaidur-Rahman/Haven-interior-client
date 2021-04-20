import React from 'react';

const TeamMember = (props) => {
    const { name, imageURL, category } = props.member;


    return (
        <div className="col-md-4 text-center">
            <div className="border m-2 p-3">
                <img className="zoom" style={{ maxHeight: '150px' }} src={imageURL} alt="blogImage" />
                <h3>{name}</h3>
                <h5 className="card-text text-secondary mt-4">{category}</h5>
            </div>
        </div>
    );
};

export default TeamMember;