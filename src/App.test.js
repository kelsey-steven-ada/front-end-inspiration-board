import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders heading", () => {
  render(<App />);
  const linkElement = screen.getByText(/inspiration board/i);
  expect(linkElement).toBeInTheDocument();
});
