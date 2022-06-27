import { render, screen } from "@testing-library/react";
import Nav from "../nav";
import { BrowserRouter } from "react-router-dom";

it("sets home link class name to 'active'", () => {
  render(
    <BrowserRouter>
      <Nav page={"home"} />
    </BrowserRouter>
  );
  const homeLink = screen.getByText(/home/i);
  expect(homeLink.className).toBe("link active");
});

it("sets shop link class name to 'active'", () => {
  render(
    <BrowserRouter>
      <Nav page={"shop"} />
    </BrowserRouter>
  );
  const homeLink = screen.getByText(/shop/i);
  expect(homeLink.className).toBe("link active");
});
