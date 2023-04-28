import { format } from "date-fns";
import React, { useState } from "react";
import ApionmentCart from "../ApionmentCart/ApionmentCart";
import BookModal from "../BookModal/BookModal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../SheardPage/Loading/Loading";

const AvaileApionment = ({ selectedDate }) => {
  const [teatment, setTreatment] = useState({});
  const date = format(selectedDate,"PP")

  const { data: appoinmentOptions = [],refetch,isLoading } = useQuery({
    queryKey: ["appoinmentOptions",date],
  queryFn:async () =>{
    const res = await fetch(`http://localhost:5000/appoinmentOptions?date=${date}`)
    const data =await res.json();
    return data}
  });
  // useEffect(() => {
  //   fetch("http://localhost:5000/appoinmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setOption(data));
  // });
  if(isLoading){
    return <Loading></Loading>
  }
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
      <BookModal refetch={refetch} teatment={teatment} setTreatment={setTreatment} selectedDate={selectedDate}></BookModal>
    </div>
  );
};

export default AvaileApionment;
