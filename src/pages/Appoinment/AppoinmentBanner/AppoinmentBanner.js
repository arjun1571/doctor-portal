import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppoinmentBanner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="hero my-5  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="lg:w-1/2 lg:max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div className="lg:mr-10">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          ></DayPicker>
          <p>you have selected date: {format(selectedDate, "PP")}</p>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
