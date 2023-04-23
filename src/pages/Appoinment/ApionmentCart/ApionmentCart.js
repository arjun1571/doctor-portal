import React from "react";

const ApionmentCart = ({ op, setTreatment }) => {
  const { name, slots } = op;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-2xl text-primary">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "try another day"}</p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} availabel
          </p>
          <div className="card-actions justify-center">
            <label
              htmlFor="my-modal-3"
              onClick={() => setTreatment(op)}
              className="btn btn-primary text-white"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApionmentCart;
