import React from "react";
import Banner from "../Banner/Banner";
import CardsInfo from "../CardInfo/CardsInfo";
import Services from "../Services/Services";
import Tream from "../Tream/Tream";
import MakeApionment from "../MakeApionment/MakeApionment";
import CustomerReview from "../CustomerReview/CustomerReview";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <CardsInfo></CardsInfo>
      <Services></Services>
      <Tream></Tream>
      <MakeApionment></MakeApionment>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
