import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='mb-5' style={{ backgroundColor: "#F4FDFB" }}>
            <span className="divider component-title my-5">
                Contact us
            </span>
            <div className="container">
            <h3 className='text-center'>Let us handle your project professionally</h3>
  <form >
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
    <label for="fname">Email</label>
    <input type="text" id="email" name="email" placeholder="Email Address" />

    <label for="lname">Phone Number</label>
    <input type="number" id="phone" name="phone" placeholder="Your Phone number" />

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write Your Message" style={{height:"200px"}}></textarea>

    <input className="btn custom-btn-bg" type="submit" value="Submit" />
  </form>
</div>

        </div>
    );
};

export default Contact;