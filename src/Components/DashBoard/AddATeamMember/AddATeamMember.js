import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react/cjs/react.development';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';

const AddATeamMember = () => {

    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const onSubmit = data => {
    const teamMembersData = {
        name: data.name,
        
        category: data.category,
        
        imageURL: imageURL

    };
    const url = 'http://localhost:5055/addATeamMember'

    console.log(teamMembersData)
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(teamMembersData)
    })
    .then(res => res.json())
    .then(data => console.log(data))


};
const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'd1bcf6f63e1c6e8b6406c8c11ab2fc0f')
    imageData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response) {
            console.log(response.data.data.display_url)
            setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
            console.log(error);
        });

}




    return (
        <section className=" row">
            <SideBar></SideBar>
            <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <div className="d-flex mt-3 justify-content-around">
                <h4 className="dashboard-title">Add a Team Member</h4>
                <h5>{loggedInUser.email}</h5>
            </div>
            <hr/>
                <div>


                    <form style={{ marginTop: "130px"}} onSubmit={handleSubmit(onSubmit)}>
                                <label><h5>Name</h5></label> <br />
                                <input className="form-control" name="name" placeholder="Enter Members Name" ref={register} />
                                <br />
                                <label><h5>Job Category</h5></label> <br />
                                <input className="form-control" name="category" placeholder="Enter Category" ref={register} />
                                <br />
                                
                                <label><h5>Add Photo</h5></label> <br />
                                <input className="form-control" type="file" onChange={handleImageUpload} id="formFile" />
                                <br />
                        <div className="container text-end">
                            <input className="btn custom-btn-bg" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddATeamMember;