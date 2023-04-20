import { act, render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import ReservationForm from "./ReservationForm";
describe("reservation form", () => {
  const fetchAPI = jest.fn();
  xit("has heading with text 'Book now'", async () => {
    render(<ReservationForm fetchAPI={fetchAPI} />);
    const h1 = await screen.findByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent("Book now");
  });

  xit("should have a date input with label 'Choose date'", () => {
    render(<ReservationForm fetchAPI={fetchAPI} />);
    const dateInput = screen.getByLabelText(/Choose date/);
    const inputType = dateInput.getAttribute("type");
    expect(inputType).toBe("date");
  });

  xit("should have a select input with label 'Choose time'", () => {
    render(<ReservationForm fetchAPI={fetchAPI} />);
    const selectInput = screen.getByLabelText(/Choose time/);
    const nodeName = selectInput.nodeName;
    expect(nodeName).toBe("SELECT");
  });

  xit("should have a number input with label 'How many guests?'", () => {
    render(<ReservationForm fetchAPI={fetchAPI} />);
    const input = screen.getByLabelText(/How many guests?/);
    const inputType = input.getAttribute("type");
    expect(inputType).toBe("number");
  });

  xit("should have a select input with label 'Occasion'", () => {
    render(<ReservationForm fetchAPI={fetchAPI} />);
    const selectInput = screen.getByLabelText(/Occasion/);
    const inputType = selectInput.nodeName;
    expect(inputType).toBe("SELECT");
  });

  xit("should have a submit button", async () => {
    render(<ReservationForm fetchAPI={fetchAPI} />);
    const submitButton = await screen.findByRole("button");
    expect(submitButton).toBeInTheDocument();
  });

  it("should fetch available hours after date select", async () => {
    render(<ReservationForm fetchAPI={fetchAPI} />);
    const date = "2023-12-12";
    const dateInput = getDateInput();
    user.type(dateInput, date);
    expect(fetchAPI).toHaveBeenCalledWith({ date: new Date(date) });
    expect(fetchAPI).toHaveBeenCalledTimes(1);
  });
});

const getDateInput = () => {
  return screen.getByLabelText(/choose date/i) as HTMLInputElement;
};

const getTimeSelect = () => {
  return screen.getByRole("combobox", {
    name: /choose time/i,
  });
};

const getGuestsInput = () => {
  return screen.getByRole("spinbutton", {
    name: /how many guests\?/i,
  });
};

const getOccasionSelect = () => {
  return screen.getByRole("combobox", {
    name: /occasion/i,
  });
};
