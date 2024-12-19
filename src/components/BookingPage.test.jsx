import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import BookingPage from "./BookingPage";
import { collection, addDoc } from "firebase/firestore";

jest.mock("./firebaseConfig", () => ({
  db: jest.fn(),
}));
jest.mock("firebase/firestore", () => ({
  collection: jest.fn(),
  addDoc: jest.fn(),
}));

beforeAll(() => {
  global.MutationObserver = class {
    constructor(callback) {}
    observe(target, options) {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  };
});

describe("BookingPage Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    window.alert = jest.fn(); // Mock window.alert
  });

  it("submits the form successfully", async () => {
    const mockCollectionRef = {}; // Mock collection reference
    collection.mockReturnValue(mockCollectionRef); // Mock Firestore collection

    addDoc.mockResolvedValueOnce({}); // Mock Firestore addDoc to resolve successfully

    const { getByLabelText, getByText } = render(<BookingPage />);

    fireEvent.change(getByLabelText(/full name/i), { target: { value: "John Doe" } });
    fireEvent.change(getByLabelText(/email address/i), { target: { value: "john@example.com" } });
    fireEvent.change(getByLabelText(/check-in date/i), { target: { value: "2024-12-20" } });
    fireEvent.change(getByLabelText(/check-out date/i), { target: { value: "2024-12-25" } });
    fireEvent.change(getByLabelText(/room type/i), { target: { value: "Ocean View Suite" } });
    fireEvent.change(getByLabelText(/number of guests/i), { target: { value: "2" } });

    fireEvent.click(getByText(/confirm booking/i));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith("Booking confirmed! Thank you for choosing us.");
    });

    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(addDoc).toHaveBeenCalledWith(mockCollectionRef, {
      name: "John Doe",
      email: "john@example.com",
      checkIn: "2024-12-20",
      checkOut: "2024-12-25",
      roomType: "Ocean View Suite",
      guests: "2",
    });
  });
});




