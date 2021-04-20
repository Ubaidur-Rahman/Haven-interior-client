import { faServicestack } from '@fortawesome/free-brands-svg-icons';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import { faBook, faComment, faHome, faList, faPlus, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo black.jpg';
import './SideBar.css';




const SideBar = () => {

    const [loggedInUser, setLoggedInUser] = useState(UserContext);

    const [isAdmin, setIsAdmin] = useState(null);

    useEffect(() => {
        fetch('https://guarded-peak-51076.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-3 col-12 py-5 px-4" style={{ height: "100vh" }}>
            <div className="me-5">
                <Link to="/"><img style={{ height: '56px' }} src={logo} alt="" /></Link>
            </div>
            <ul className="list-unStyled">
                <li>
                    <Link to="/" className="link-style mt-5">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <div>
                    <li>
                        <Link to="/book" className="link-style">
                            <FontAwesomeIcon icon={faBook} /> <span>Book</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/booking-list" className="link-style">
                            <FontAwesomeIcon icon={faListAlt} /><span>Booking List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addReview" className="link-style">
                            <FontAwesomeIcon icon={faComment} /> <span>Review</span>
                        </Link>
                    </li>
                </div>
                <div>
                    <li>
                        <Link to="/order-list" className="link-style">
                            <FontAwesomeIcon icon={faList} /> <span>Order List</span>
                        </Link>
                    </li>
                    <div>
                        <li>
                            <Link to="/addService" className="link-style">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/makeAnAdmin" className="link-style">
                                <FontAwesomeIcon icon={faUsers} /> <span>Make an Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addATeamMember" className="link-style">
                                <FontAwesomeIcon icon={faUsers} /> <span>Add A Team Member</span>
                            </Link>
                        </li>
                        <li>
                            <h5>
                            <Link to="/manage-services" className="link-style">
                                <FontAwesomeIcon icon={faServicestack} /> <span>Manage Services</span>
                            </Link>
                            
                            </h5>
                        </li>
                    </div>
                </div>
            </ul>
            <div>
                <Link to="/" className="link-style"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default SideBar;