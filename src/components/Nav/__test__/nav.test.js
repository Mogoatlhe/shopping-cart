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

it("resets shop link when unactive", () => {
  render(
    <BrowserRouter>
      <Nav page={"home"} />
    </BrowserRouter>
  );
  const shopLink = screen.getByText(/shop/i);
  expect(shopLink.className).toBe("link ");
});

it("sets shop link class name to 'active'", () => {
  render(
    <BrowserRouter>
      <Nav page={"shop"} />
    </BrowserRouter>
  );
  const shopLink = screen.getByText(/shop/i);
  expect(shopLink.className).toBe("link active");
});

it("resets home link when unactive", () => {
  render(
    <BrowserRouter>
      <Nav page={"shop"} />
    </BrowserRouter>
  );
  const homeLink = screen.getByText(/home/i);
  expect(homeLink.className).toBe("link ");
});

it("sets both nav links to unactive when a none existing one is selected", () => {
  render(
    <BrowserRouter>
      <Nav page={"not-found"} />
    </BrowserRouter>
  );
  const navLinks = screen.getAllByRole("link");
  navLinks.forEach((navLink) => expect(navLink.className).toBe("link "));
});
