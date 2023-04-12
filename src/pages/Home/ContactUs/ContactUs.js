import React from "react";
import bg from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div className="hero mt-20" style={{ background: `url(${bg})` }}>
      <div className="hero-content ">
        <div className="card  ">
          <div className="card-body">
            <div className="text-center mb-3">
              <h1 className="text-primary font-bold mb-3">Contact Us </h1>
              <h1 className="text-white text-3xl">Stay Connected With us</h1>
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Email Address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <textarea
                className="textarea textarea-success"
                placeholder="Bio"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
