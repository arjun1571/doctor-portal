import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import ApionmentCart from "../ApionmentCart/ApionmentCart";
import BookModal from "../BookModal/BookModal";

const AvaileApionment = ({ selectedDate }) => {
  const [option, setOption] = useState([]);
  const [teatment, setTreatment] = useState({});
  useEffect(() => {
    fetch("appoinmentOptions.json")
      .then((res) => res.json())
      .then((data) => setOption(data));
  });
  return (
    <div className="mt-6">
      <p className="text-center font-bold text-primary">
        Available Services on {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-6">
        {option.map((op) => (
          <ApionmentCart
            setTreatment={setTreatment}
            key={op._id}
            op={op}
          ></ApionmentCart>
        ))}
      </div>
      <BookModal teatment={teatment} selectedDate={selectedDate}></BookModal>
    </div>
  );
};

export default AvaileApionment;
