import React, { useContext } from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';
import SingleOrder from '../SingleOrder/SingleOrder';

const AdminOrderList = () => {


    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    useEffect(() => {
        fetch('http://localhost:5055/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])



    return (
        <section className=" row">
            <SideBar></SideBar>
            <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <div className="d-flex mt-3 justify-content-around">
                    <h4>All Order List</h4>
                    <h5>{loggedInUser.email}</h5>
                </div>
                <hr />
                 <div className="row">
                <table class="table">
                
               
                <thead>
    <tr>
      <th scope="col">Service Name</th>
      <th scope="col">User</th>
      <th scope="col">Order Time</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
                    {
                        orders.map(order => <SingleOrder order={order} />)
                    }</table>
                </div>
                
            </div>
        </section>
    )
};

export default AdminOrderList;