import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders welcome message", () => {
  render(<App />);
  const heroTitle = screen.getByText(/welcome to paradise/i);
  expect(heroTitle).toBeInTheDocument();
});

