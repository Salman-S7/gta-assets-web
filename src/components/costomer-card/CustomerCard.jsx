import React from "react";
import "./customercard.css";

const CustomerCard = ({ img, plateNumber, status, name }) => {
  return (
    <div className="customer-card-wrapper">
      <div className="customer-avatar">
        <img src={img} alt="customer avatar" />
      </div>
      <div className="customer-info">
        <span className="customer-name">{name}</span>
        <span className="customer-status">
          Status <span className="staus">{status}</span>
        </span>
        <span className="customer-plate-num">
          Plate Number <span>{plateNumber}</span>
        </span>
      </div>
    </div>
  );
};

export default CustomerCard;
