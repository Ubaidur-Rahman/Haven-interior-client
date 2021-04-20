import React, { useContext, useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { UserContext } from '../../../App';
import ManageSingleData from '../ManageSingleData/ManageSingleData';
import SideBar from '../SideBar/SideBar';

const ManageServices = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5055/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <section className=" row">
            <SideBar></SideBar>
            <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <div className="d-flex mt-3 justify-content-around">
                    <h4 className="dashboard-title">Manage Service</h4>
                    <h5>{loggedInUser.email}</h5>
                </div>
                <hr />
                <h4 className="text-dark text-center">Services</h4>
                <div className="row">
                    {
                        services.map(service => <ManageSingleData service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ManageServices;