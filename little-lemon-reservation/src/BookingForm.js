import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm({ availableTimes, handleDateChange }) {
  const [date, setDate] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleDateInputChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
  };

  const handleNumberOfGuestsChange = (e) => {
    const guests = e.target.value;
    setNumberOfGuests(guests);
  };

  const handleOccasionChange = (e) => {
    const selectedOccasion = e.target.value;
    setOccasion(selectedOccasion);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // Access the selected date, number of guests, and occasion using the state variables
    console.log("Date:", date);
    console.log("Number of Guests:", numberOfGuests);
    console.log("Occasion:", occasion);
  };

  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateInputChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={availableTimes[0]} readOnly>
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={numberOfGuests}
        onChange={handleNumberOfGuestsChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange}>
        <option value="">Select an Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
