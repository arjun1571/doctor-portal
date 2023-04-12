import React from "react";
import Service from "./Service";
import logo1 from "../../../assets/images/fluoride.png";
import logo2 from "../../../assets/images/cavity.png";
import logo3 from "../../../assets/images/whitening.png";

const Services = () => {
  const serviceCartInfo = [
    {
      id: 1,
      name: "Fluoride Treatment",
      des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      logo: logo1,
    },
    {
      id: 2,
      name: "Cavity Filling",
      des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      logo: logo2,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      des: `Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the`,
      logo: logo3,
    },
  ];
  return (
    <div>
      <div className="text-center mt-32">
        <h2 className="text-primary text-xl font-bold">OUR SERVICES</h2>
        <h1 className="text-4xl mt-2 font-bold">Services We Provide</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-16">
        {serviceCartInfo.map((card) => (
          <Service key={card.id} card={card}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
