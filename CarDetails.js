import React from "react";
import { useParams, Link } from "react-router-dom";

const cars = [
  { id: 1, name: "Toyota Camry", price: 50, description: "A comfortable sedan." },
  { id: 2, name: "Honda Accord", price: 45, description: "A reliable family car." },
  { id: 3, name: "Tesla Model 3", price: 100, description: "A futuristic electric vehicle." },
];

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));

  return (
    <div>
      <h2>{car.name}</h2>
      <p>{car.description}</p>
      <p>Price: ${car.price}/day</p>
      <Link to={`/book/${car.id}`}>Book Now</Link>
      <br />
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default CarDetails;
