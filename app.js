import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CarDetails from "./components/CarDetails";
import BookingForm from "./components/BookingForm";

const App = () => {
  return (
    <div>
      <h1>Car Rental Application</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
      </Routes>
    </div>
  );
};
