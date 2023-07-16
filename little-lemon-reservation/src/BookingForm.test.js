import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  test("renders the form fields", () => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        handleDateChange={jest.fn()}
      />
    );

    const dateInput = screen.getByLabelText("Choose date");
    const timeSelect = screen.getByLabelText("Choose time");
    const guestsInput = screen.getByLabelText("Number of guests");
    const occasionSelect = screen.getByLabelText("Occasion");
    const submitButton = screen.getByText("Make Your reservation");

    expect(dateInput).toBeInTheDocument();
    expect(timeSelect).toBeInTheDocument();
    expect(guestsInput).toBeInTheDocument();
    expect(occasionSelect).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("handles form submission", () => {
    const handleDateChangeMock = jest.fn();
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        handleDateChange={handleDateChangeMock}
      />
    );

    const dateInput = screen.getByLabelText("Choose date");
    const guestsInput = screen.getByLabelText("Number of guests");
    const occasionSelect = screen.getByLabelText("Occasion");
    const submitButton = screen.getByText("Make Your reservation");

    fireEvent.change(dateInput, { target: { value: "2023-07-31" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });
    fireEvent.click(submitButton);

    expect(handleDateChangeMock).toHaveBeenCalledTimes(1);
    expect(handleDateChangeMock).toHaveBeenCalledWith("2023-07-31");
    // Add additional assertions or expectations based on your form submission logic
  });
});
