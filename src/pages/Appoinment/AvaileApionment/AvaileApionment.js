import { format } from "date-fns";
import React, { useState } from "react";
import ApionmentCart from "../ApionmentCart/ApionmentCart";
import BookModal from "../BookModal/BookModal";
import { useQuery } from "@tanstack/react-query";

const AvaileApionment = ({ selectedDate }) => {
  const [teatment, setTreatment] = useState({});

  const { data: appoinmentOptions = [] } = useQuery({
    queryKey: ["appoinmentOptions"],
    queryFn: () =>
      fetch("http://localhost:5000/appoinmentOptions").then((res) =>
        res.json()
      ),
  });
  // useEffect(() => {
  //   fetch("http://localhost:5000/appoinmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setOption(data));
  // });
  return (
    <div className="mt-6">
      <p className="text-center font-bold text-primary">
        Available Services on {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-6">
        {appoinmentOptions.map((op) => (
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
