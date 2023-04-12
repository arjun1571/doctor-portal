import React from "react";
import Review from "./Review";
import pepole1 from "../../../assets/images/people1.png";
import pepole2 from "../../../assets/images/people2.png";
import pepole3 from "../../../assets/images/people3.png";
import logo from "../../../assets/icons/quote.svg";

const CustomerReview = () => {
  const customerData = [
    {
      id: 1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: pepole1,
      name: "Winson Herry",
      location: "canada",
    },
    {
      id: 2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: pepole2,
      name: "Arjun Chandra Das",
      location: "gazipur",
    },
    {
      id: 3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: pepole3,
      name: "Mamun Prodhan",
      location: "Dhaka",
    },
  ];
  return (
    <div>
      <div className="mt-20 flex justify-between">
        <div>
          <h1 className="text-primary font-bold">Testimonial</h1>
          <h1 className="text-4xl">What Our Patients Says</h1>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 mt-3">
        {customerData.map((review) => (
          <Review key={review.id} reviews={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
