import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import Button from "../../../component/Button/Button";

const MakeApionment = () => {
  return (
    <div className="hero mt-36" style={{ background: `url(${appointment})` }}>
      <div className="hero-content flex-col lg:flex-row ">
        <img
          src={doctor}
          className="-mt-36 lg:w-1/2  lg:block md:block hidden"
          alt=""
        />
        <div>
          <p className="text-primary mb-2">Appointment</p>
          <h1 className="lg:text-5xl text-3xl font-bold text-white">
            Make an appointment Today!
          </h1>
          <p className="lg:py-6 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page.
          </p>
          <Button>Appointment</Button>
        </div>
      </div>
    </div>
  );
};

export default MakeApionment;
