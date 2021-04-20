import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Payment from '../Payment/Payment';
import SideBar from '../SideBar/SideBar';

const Book = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { _id } = useParams();
    console.log(_id)
    
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://guarded-peak-51076.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)
    const service = services.find(sr => sr?._id === _id)
    console.log(service)


    const handleOrder = () => {
        const orderTime = new Date().toDateString('DD-MM-YYYY')
        const newOrder = { ...loggedInUser, ...service, orderTime , status: 'pending'};
        delete newOrder._id

        fetch(`https://guarded-peak-51076.herokuapp.com/addOrder`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }








    return (
        <section className=" row">
            <SideBar></SideBar>
            <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <div className="d-flex mt-3 justify-content-around">
                <h4 className="dashboard-title">Book</h4>
                <h5>{loggedInUser.email}</h5>
            </div>
            <hr/>
<Payment service={service} handleOrder={handleOrder} />
            </div>
            
        </section>
    );
};

export default Book;