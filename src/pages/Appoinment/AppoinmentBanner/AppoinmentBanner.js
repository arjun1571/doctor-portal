import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppoinmentBanner = ({ setSelectedDate, selectedDate }) => {
  return (
    <div className="hero my-5  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="lg:w-1/2  rounded-lg shadow-2xl" alt="" />
        <div className="lg:w-2/2">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          ></DayPicker>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
