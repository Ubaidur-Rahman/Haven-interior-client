import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            price: data.price,
            designer: data.designer,
            description: data.description,
            worker: data.worker,
            imageURL: imageURL

        };
        const url = 'https://guarded-peak-51076.herokuapp.com/addService'

        console.log(serviceData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
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
                <h4 className="dashboard-title">Add a Service</h4>
                <h5>{loggedInUser.email}</h5>
            </div>
            <hr/>
                <div>


                    <form style={{ marginTop: "130px"}} onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex justify-content-around p-3">
                            <div>

                                <label><h5>Title</h5></label> <br />
                                <input className="form-control" name="name" placeholder="Enter Title" ref={register} />
                                <br />
                                <label><h5>Price</h5></label> <br />
                                <input className="form-control" name="price" placeholder="Enter Price" ref={register} />
                                <br />
                                <label><h5>Designer</h5></label> <br />
                                <input className="form-control" name="designer" placeholder="Enter how many designer" ref={register} />
                                <br />
                            </div>
                            <div>
                                <label><h5>Description</h5></label> <br />
                                <input className="form-control" name="description" placeholder="Enter Description" ref={register} />
                                <br />
                                <label><h5>worker</h5></label> <br />
                                <input className="form-control" name="worker" placeholder="Enter how many workers" ref={register} />
                                <br />
                                <label><h5>Add Photo</h5></label> <br />
                                <input className="form-control" name="exampleRequired" type="file" onChange={handleImageUpload} id="formFile" />
                                <br />
                                
                            </div>
                        </div>
                        <div className="container text-end">
                            <input className="btn custom-btn-bg" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddService;