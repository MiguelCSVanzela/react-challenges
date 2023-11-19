import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

test("Verifica se o evento foi lançado", () => {
  render(<Button />);
  const buttonElement = screen.getByRole("button", { name: /BTN/i });
  const text = screen.getByTestId("text");
  expect(text).toHaveTextContent("Initial Text");
  fireEvent.click(buttonElement);
  expect(text).toHaveTextContent("Text changed with your click");
});
