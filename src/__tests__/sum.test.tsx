import { screen, render } from "@testing-library/react";
import { sum } from "./sum";
import App from "../App";

describe("Sum Function", () => {
  it("render the App component", () => {
    render(<App />);
    screen.debug();
  });

  it("should add two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
