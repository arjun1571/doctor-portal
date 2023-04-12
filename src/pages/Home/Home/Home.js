import React from "react";
import Banner from "../Banner/Banner";
import CardsInfo from "../CardInfo/CardsInfo";
import Services from "../Services/Services";
import Tream from "../Tream/Tream";
import MakeApionment from "../MakeApionment/MakeApionment";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <CardsInfo></CardsInfo>
      <Services></Services>
      <Tream></Tream>
      <MakeApionment></MakeApionment>
    </div>
  );
};

export default Home;
