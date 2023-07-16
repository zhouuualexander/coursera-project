import React, { useReducer } from "react";
import BookingForm from "./BookingForm";

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  function updateTimes(state, selectedDate) {
    // Update the available times based on the selected date
    // Replace this with your own logic to fetch or calculate the updated times
    // For now, return the same available times
    return state;
  }

  function initializeTimes() {
    return [];
  }

  return (
    <main>
      <h1>Main Component</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}

export default BookingPage;
