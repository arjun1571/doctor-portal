import React, { useState } from "react";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";
import AvaileApionment from "../AvaileApionment/AvaileApionment";

const Appoinment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppoinmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppoinmentBanner>
      <AvaileApionment selectedDate={selectedDate}></AvaileApionment>
    </div>
  );
};

export default Appoinment;
