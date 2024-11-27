import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const BookingForm = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Thank you, ${name}. Your booking for car ID ${id} on ${date} is confirmed.`);
  };

  return (
    <div>
      <h2>Book a Car</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default BookingForm;
