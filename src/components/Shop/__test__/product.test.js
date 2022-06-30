import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Product from "../product";

const mockedShoeData = {
  name: "Chucks",
  price: "999",
  assets: [
    {
      base_url: "",
    },
  ],
};

it("hides cart-count value", () => {
  render(
    <BrowserRouter>
      <Product shoeData={mockedShoeData} />
    </BrowserRouter>
  );

  const cartCountValue = screen.getByText("0");
  expect(cartCountValue).toHaveClass("hidden");
});

it("hides remove from cart button", () => {
  render(
    <BrowserRouter>
      <Product shoeData={mockedShoeData} />
    </BrowserRouter>
  );

  const removeFromCartButton = screen.getByText("-");
  expect(removeFromCartButton).toHaveClass("hidden");
});

it("shows cart-count value", () => {
  render(
    <BrowserRouter>
      <Product shoeData={mockedShoeData} />
    </BrowserRouter>
  );

  const addToCartButton = screen.getByText("+");
  fireEvent.click(addToCartButton);
  const cartCountValue = screen.getByText("1");
  expect(cartCountValue).not.toHaveClass("hidden");
});
