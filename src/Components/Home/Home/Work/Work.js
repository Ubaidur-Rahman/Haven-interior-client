import React from 'react';

const Work = ({ work }) => {
    return (
        <div className="col-md-4 text-center">
            <div className="border m-2 p-3">
                <img style={{ maxHeight: '200px' }} src={work.img} alt="" />
                <h5 className="mt-3 mb-3">{work.name}</h5>
                <h6 className="text-secondary">{work.place}</h6>
            </div>
        </div>
    );
};

export default Work;