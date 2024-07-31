import React from "react";
import "./soldvehicles.css";
import { customerData, soldVehicleData } from "../../utils/data";
import CarCard from "../../components/car-card/CarCard";
import CustomerCard from "../../components/costomer-card/CustomerCard";

const SoldVehicles = () => {
  return (
    <div className="sold-wrapper">
      <div className="sold-container-top">
        <h1>Sold Vehicles</h1>
        <div className="card-wrapper">
          {soldVehicleData.map((soldVehicle, i) => {
            return (
              <CarCard
                key={i}
                title={soldVehicle.title}
                description={soldVehicle.description}
                img={soldVehicle.img}
                price={soldVehicle.price}
              />
            );
          })}
        </div>
      </div>
      <div className="sold-container-bottom">
        <h1>Customer</h1>
        <div className="customer-container">
          {customerData.map((customer, i) => {
            return <CustomerCard
              key={i}
              name={customer.name}
              img={customer.img}
              status={customer.status}
              plateNumber={customer.plateNumber}
            />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SoldVehicles;
