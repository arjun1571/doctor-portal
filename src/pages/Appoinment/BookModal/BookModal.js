import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-hot-toast";

const BookModal = ({ teatment, selectedDate,setTreatment,refetch }) => {
  const { name, slots } = teatment;
  const {user}=useContext(AuthContext)
  console.log(user);
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event?.target;
    const nam = form.name?.value;
    const email = form.email?.value;
    const slot = form.slot?.value;
    const phone = form.phone?.value;
    const booking = {
      appoinmentDate: date,
      treatment: name,
      patient: nam,
      slot,
      email,
      phone,
    };
    fetch("http://localhost:5000/bookings",{
      method:"POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data?.acknowledged){
        toast.success("booking confraim")
        refetch()
      }
    })
    console.log(booking);
  };
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="mt-10 grid grid-cols-1 gap-5"
          >
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered input-md w-full "
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots &&
                slots.map((slot, i) => (
                  <option key={i} value={slot}>
                    {slot}
                  </option>
                ))}
            </select>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input input-bordered input-md w-full "
            />
            <input
              name="email"
              defaultValue={user?.email}
              disabled
              type="email"
              placeholder="Eamil"
              className="input input-bordered input-md w-full "
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              className="input input-bordered input-md w-full "
            />
            <input
              type="submit"
              htmlFor="my-modal "
              className="btn w-full"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookModal;
