import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const BlankBook = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <div>
            <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <div className="d-flex mt-3 justify-content-around">
                    <h4 className="dashboard-title">Book</h4>
                    <h5>{loggedInUser.email}</h5>
                </div>
                <hr />
<h5 className="dashboard-title text-center">Please select a service first</h5>
                
            </div>
        </div>
    );
};

export default BlankBook;