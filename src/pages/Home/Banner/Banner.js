import React from "react";
import bannerImg from "../../../assets/images/chair.png";
import bgImage from "../../../assets/images/bg.png";

const Banner = () => {
  const bgImag = {
    backgroundImage: `url(${bgImage})`,
  };
  return (
    <div className="hero " style={bgImag}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className=" rounded-lg lg:w-1/2 shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
