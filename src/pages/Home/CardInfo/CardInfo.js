import React from "react";

const CardInfo = ({ card }) => {
  const { name, des, logo, bg } = card;
  return (
    <div className={`card lg:card-side ${bg} shadow-xl text-white p-4`}>
      <figure>
        <img src={logo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default CardInfo;
