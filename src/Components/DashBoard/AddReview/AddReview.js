import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';

const AddReview = () => {
    const { register, handleSubmit } = useForm();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);



    const onSubmit = data => {
        const reviewData = {
            ...loggedInUser,
            name: data.name,
            description: data.description,
            companyName: data.companyName,
        };
        const url = 'http://localhost:5055/addReview'

        console.log(reviewData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => res.json())
        .then(data => console.log(data))


    };


    return (
        <section className=" row">
            <SideBar></SideBar>
            <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <div className="d-flex mt-3 justify-content-around">
                    <h4 className="dashboard-title">Add a Review</h4>
                    <h5>{loggedInUser.email}</h5>
                </div>
                <hr />
                <div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" name="name" placeholder="Your Name" ref={register} />
                    <br />
                    
                    <input className="form-control" name="companyName" placeholder="Companies name designation" ref={register} />
                    <br />
                    
                    <input className="form-control" name="description" placeholder="Your Comment" ref={register} />
                    <br /><div className="container text-end">
                            <input className="btn custom-btn-bg" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
                
            </div>
        </section>
    );
};

export default AddReview;