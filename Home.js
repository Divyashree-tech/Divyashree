import React from "react";
import { Link } from "react-router-dom";

const cars = [
  { id: 1, name: "Toyota Camry", price: 50 },
  { id: 2, name: "Honda Accord", price: 45 },
  { id: 3, name: "Tesla Model 3", price: 100 },
];

const Home = () => {
  return (
    <div>
      <h2>Available Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <h3>{car.name}</h3>
            <p>Price: ${car.price}/day</p>
            <Link to={`/car/${car.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
