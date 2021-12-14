import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div id="contact">
            <div className="contact-main">
                <h1 className="contact-header" >Send Me Your Query</h1>
        
            <div className="contact-form p-3">
                <div className="row  d-flex justify-content-center ">
                    <div className="mt-5">
                        <input
                        className="input-field"
                        type="text"
                        placeholder="Enter Your Name"
                        />
                        <br />
                        <input
                        className="input-field"
                        type="Email"
                        placeholder="Enter Your Email"
                        />
                        <br />
                        <textarea className='textArea' rows="6" cols="50" name="comment" placeholder =' Enter your messege here...' form="usrform">
                       </textarea>
                        <br/>
                        <input className="input-btn" type="submit" value="Submit" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;