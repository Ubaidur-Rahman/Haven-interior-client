import React from 'react';
import StarHouse from '../../../images/blog-details.jpg';
import HighTech from '../../../images/connor-wang-MNz7IGrcEl0-unsplash.jpg';
import Clementinam from '../../../images/deborah-cortelazzi-gREquCUXQLI-unsplash.jpg';
import CobbleHill from '../../../images/huy-nguyen-9Nl7YnbQI1M-unsplash.jpg';
import Laboratorio from '../../../images/jason-rojas-6BeTdz3pM0w-unsplash.jpg';
import Canarios from '../../../images/roberto-nickson-rEJxpBskj3Q-unsplash.jpg';
import Work from '../Home/Work/Work';

const WorkGallery = () => {

    const ourWorks = [
        {
            name: 'Cobble Hill Duplex',
            img: CobbleHill,
            place: 'Rome, Italy'
        },
        {
            name: 'High-tech interiors',
            img: HighTech,
            place: 'Lisbon, Portugal'
        },
        {
            name: 'Laboratorio de Arquitectura',
            img: Laboratorio,
            place: 'New Delhi, India'
        },{
            name: 'Clementinam Suite Colosseum',
            img: Clementinam,
            place: 'Hijan, NorWay'
        },
        {
            name: 'Canarios Apartments Catarina',
            img: Canarios,
            place: 'Catalunia, Spain'
        },
        {
            name: 'The Star House',
            img: StarHouse,
            place: 'Barcelona, Spain'
        }
    ]


    return (
        <div className=" my-3 mb-5 p-5" style={{ backgroundColor: "#F4FDFB" }}>
            <span className="divider component-title my-3">
                Work Gallery
            </span>
            <h6 className="text-center text-dark">OUR RECENT WORKS</h6>
            <div className="row">
            
            {
                ourWorks.map(work => <Work work={work} />)
            }
            </div>
        </div>
    );
};

export default WorkGallery;