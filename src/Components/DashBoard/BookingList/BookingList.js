import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';
import SingleBooking from '../SingleBooking/SingleBooking';

const BookingList = () => {

    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:5055/orders')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])



    return (
        <section className=" row">
            <SideBar></SideBar>
            <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <div className="d-flex mt-3 justify-content-around">
                <h4 className="dashboard-title">booking List</h4>
                <h5>{loggedInUser.email}</h5>
            </div>
            <hr/>
<div className="row">
    {
        bookings.map(booking => <SingleBooking booking={booking} />)
    }
</div>
            </div>
        </section>
    );
};

export default BookingList;