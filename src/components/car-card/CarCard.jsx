import React from "react";
import "./carcard.css";

const CarCard = ({ title, img, description, price }) => {
  return (
    <div className="car-card">
      <div className="car-card-image">
        <img src={img} alt={title} />
      </div>
      <div className="car-details">
        <div className="car-details-1">
          <span>{title}</span>
          <span className="card-price">$ {price}</span>
        </div>
        <div className="car-details-2">{description}</div>
      </div>
    </div>
  );
};

export default CarCard;
