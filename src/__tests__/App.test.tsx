import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("App", () => {
  it("renders App component", () => {
    render(<App />);
  });

  it("render Hello World heading", () => {
    render(<App />);

    const heading = screen.getByRole("heading", {
      name: /hello world/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders App component unchanged", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
