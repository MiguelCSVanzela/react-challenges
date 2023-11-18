import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Greeting from "./Greeting";

test("Verificar se o titulo está presente", () => {
  render(<Greeting name="Miguel" />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toHaveTextContent("Hello, Miguel");
});
