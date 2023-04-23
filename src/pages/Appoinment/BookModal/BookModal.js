import { format } from "date-fns";
import React from "react";

const BookModal = ({ teatment, selectedDate }) => {
  const { name, slots } = teatment;
  const date = format(selectedDate, "PP");
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
          <form className="mt-10 grid grid-cols-1 gap-5">
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered input-md w-full "
            />
            <select className="select select-bordered w-full ">
              {slots &&
                slots.map((slot) => <option value={slot}>{slot}</option>)}
            </select>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-md w-full "
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-md w-full "
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-md w-full "
            />
            <label htmlFor="my-modal " className="btn w-full">
              Submit
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookModal;
