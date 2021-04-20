import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';

const MakeAnAdmin = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit } = useForm();
   
    const onSubmit = data => {
        const adminData = {
            email: data.email,
            
        };
        const url = 'https://guarded-peak-51076.herokuapp.com/makeAnAdmin'

        console.log(adminData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
        .then(res => res.json())
        .then(data => console.log(data))


    };



    return (
        <section className=" row">
            <SideBar></SideBar>
            <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <div className="d-flex mt-3 justify-content-around">
                <h4 className="dashboard-title">Make an Admin</h4>
                <h5>{loggedInUser.email}</h5>
            </div>
            <hr/>
            <form onSubmit={handleSubmit(onSubmit)}>
            
            <input className="form-control" name="email" placeholder="Enter email" ref={register} />
                    <br /><div className="container text-end">
                            <input className="btn custom-btn-bg" type="submit" value="Submit" />
                        </div>
                    </form>
               
            </div>
        </section>
    );
};

export default MakeAnAdmin;