import React from "react";

const Review = ({ reviews }) => {
  const { review, img, name, location } = reviews;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review}</p>
      </div>
      <div className="flex p-5 items-center">
        <div>
          <img src={img} alt="Shoes" />
        </div>
        <div className="mx-2">
          <h2 className="card-title">{name}</h2>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
