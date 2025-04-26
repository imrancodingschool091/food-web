import React, { useState } from 'react';
import "./Table.css";
import axios from 'axios';

function Table() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/book", form);
      alert("Booking submitted successfully!");
      console.log(response.data);
    } catch (error) {
      alert("Error submitting booking: " + error.message);
    }
  };

  return (
    <div>
      <h1 className="text-center text-danger fs-4 my-4">Book a Table</h1>
      <h1 className="text-center text-black fs-4 my-3">
        Book Your <span className="text-danger">Stay With Us</span>
      </h1>
      <div className="parent4">
        <div className="container5">
          <div className="img1">
            <img
              src="https://www.sheinterior.com.sg/wp-content/uploads/2023/05/6399f785bf3ea32a196ccad5_market-house_Website-Header-1-scaled.jpeg"
              alt="Restaurant"
              className="image2 mx-5"
            />
          </div>
          <form className="form mx-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="form1"
              onChange={handleInput}
              value={form.name}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form1"
              onChange={handleInput}
              value={form.email}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your phone"
              className="form1"
              onChange={handleInput}
              value={form.phone}
            />
            <br />
            <input
              type="date"
              name="date"
              className="form3"
              onChange={handleInput}
              value={form.date}
            />
            <input
              type="time"
              name="time"
              className="form3"
              onChange={handleInput}
              value={form.time}
            />
            <input
              type="number"
              name="people"
              placeholder="# of people"
              className="form3"
              onChange={handleInput}
              value={form.people}
            />
            <br /><br />
            <textarea
              name="message"
              placeholder="Message"
              className="form2"
              onChange={handleInput}
              value={form.message}
            />
            <br /><br />
            <button type="submit" className="button">Book a Table</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Table;
