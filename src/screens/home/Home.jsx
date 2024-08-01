import React from "react";
import "./home.css";
import { carCardData } from "../../utils/data";
import CarCard from "../../components/car-card/CarCard";

const Home = () => {
  return (
    <div className="home-container">
      {/* <h1>My Cars</h1> */}
      <div className="car-card-container">
        {carCardData.map((car, i) => {
          return (
            <CarCard
              key={i}
              img={car.img}
              title={car.title}
              price={car.price}
              description={car.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
