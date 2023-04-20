import { render, screen } from "@testing-library/react";
import ReservationForm from "./ReservationForm";

describe("reservation form", () => {
  it("has heading with text 'Book now'", async () => {
    render(<ReservationForm />);
    const h1 = await screen.findByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent("Book now");
  });

  it("should have a date input with label 'Choose date'", () => {
    render(<ReservationForm />);
    const dateInput = screen.getByLabelText(/Date/);
    const inputType = dateInput.getAttribute("type");
    expect(inputType).toBe("date");
  });

  it("should have a select input with label 'Choose time'", () => {
    render(<ReservationForm />);
    const selectInput = screen.getByLabelText(/Time/);
    const nodeName = selectInput.nodeName;
    expect(nodeName).toBe("SELECT");
  });

  it("should have a number input with label 'Number of guests'", () => {
    render(<ReservationForm />);
    const input = screen.getByLabelText(/How many guests?/);
    const inputType = input.getAttribute("type");
    expect(inputType).toBe("number");
  });

  it("should have a select input with label 'Occasion'", () => {
    render(<ReservationForm />);
    const selectInput = screen.getByLabelText(/Occasion/);
    const inputType = selectInput.nodeName;
    expect(inputType).toBe("SELECT");
  });

  it("should have a submit button", async () => {
    render(<ReservationForm />);
    const submitButton = await screen.findByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
});
