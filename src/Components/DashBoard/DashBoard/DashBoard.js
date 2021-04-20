import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Payment from '../Payment/Payment';
import SideBar from '../SideBar/SideBar';

const DashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    return (
        <section className="row">
            <SideBar />
            <div className="col-md-9 p-4" style={{ right: 0, backgroundColor: "#F4FDFB" }}>
            <div className="d-flex mt-3 justify-content-around">
                <h4 className="dashboard-title">Book</h4>
                <h5>{loggedInUser.email}</h5>
            </div>
            <hr/>
            <Payment />
            </div>
        </section>
    );
};

export default DashBoard;