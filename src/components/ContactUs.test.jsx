import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import ContactUs from "./ContactUs";
import { collection, addDoc } from "firebase/firestore";

jest.mock("./firebaseConfig", () => ({
  db: jest.fn(),
}));

jest.mock("firebase/firestore", () => ({
  collection: jest.fn(),
  addDoc: jest.fn(),
}));

// Mock MutationObserver globally
global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe() {}
  takeRecords() { return []; }
};

describe("ContactUs Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    window.alert = jest.fn(); // Mock alert
  });

  it("renders the contact form correctly", () => {
    const { getByPlaceholderText, getByText } = render(<ContactUs />);

    expect(getByPlaceholderText(/your name/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/your email/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/your message/i)).toBeInTheDocument();
    expect(getByText(/send message/i)).toBeInTheDocument();
  });

  it("allows user to input data", () => {
    const { getByPlaceholderText } = render(<ContactUs />);

    const nameInput = getByPlaceholderText(/your name/i);
    const emailInput = getByPlaceholderText(/your email/i);
    const messageInput = getByPlaceholderText(/your message/i);

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello, this is a test message." } });

    expect(nameInput.value).toBe("John Doe");
    expect(emailInput.value).toBe("john@example.com");
    expect(messageInput.value).toBe("Hello, this is a test message.");
  });

  it("submits the form successfully", async () => {
    const mockCollectionRef = {}; // Mock Firestore collection reference
    collection.mockReturnValue(mockCollectionRef); // Mock Firestore collection
    addDoc.mockResolvedValueOnce({ id: "12345" }); // Mock addDoc to resolve successfully

    const { getByPlaceholderText, getByText } = render(<ContactUs />);

    fireEvent.change(getByPlaceholderText(/your name/i), { target: { value: "John Doe" } });
    fireEvent.change(getByPlaceholderText(/your email/i), { target: { value: "john@example.com" } });
    fireEvent.change(getByPlaceholderText(/your message/i), { target: { value: "Hello!" } });

    fireEvent.click(getByText(/send message/i));

    await waitFor(() => {
      expect(addDoc).toHaveBeenCalledTimes(1);
      expect(addDoc).toHaveBeenCalledWith(mockCollectionRef, {
        name: "John Doe",
        email: "john@example.com",
        message: "Hello!",
      });
      expect(window.alert).toHaveBeenCalledWith("Message sent successfully!");
    });
  });

  it("handles errors during form submission", async () => {
    collection.mockReturnValue({}); // Mock Firestore collection
    addDoc.mockRejectedValueOnce(new Error("Firestore error")); // Mock addDoc to throw an error

    const { getByPlaceholderText, getByText } = render(<ContactUs />);

    fireEvent.change(getByPlaceholderText(/your name/i), { target: { value: "John Doe" } });
    fireEvent.change(getByPlaceholderText(/your email/i), { target: { value: "john@example.com" } });
    fireEvent.change(getByPlaceholderText(/your message/i), { target: { value: "Hello!" } });

    fireEvent.click(getByText(/send message/i));

    await waitFor(() => {
      expect(addDoc).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith("Error sending message. Please try again later.");
    });
  });
});

