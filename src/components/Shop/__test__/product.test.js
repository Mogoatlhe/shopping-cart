import { render, screen, fireEvent } from "@testing-library/react";
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

const mockedTotal = {
  current: 0,
};

const mockedSetTotalCartItems = jest.fn();

it("hides cart-count value", () => {
  render(
    <Product
      shoeData={mockedShoeData}
      setTotalCartItems={mockedSetTotalCartItems}
      total={mockedTotal}
    />
  );

  const cartCountValue = screen.getByText("0");
  expect(cartCountValue).toHaveClass("hidden");
});

it("hides cart-count value when count is 0", () => {
  render(
    <Product
      shoeData={mockedShoeData}
      setTotalCartItems={mockedSetTotalCartItems}
      total={mockedTotal}
    />
  );

  const addToCartButton = screen.getByText("+");
  fireEvent.click(addToCartButton);
  const removeFromCartButton = screen.getByText("-");
  fireEvent.click(removeFromCartButton);
  const cartCountValue = screen.getByText("0");
  expect(cartCountValue).toHaveClass("hidden");
});

it("hides remove from cart button when count is 0", () => {
  render(
    <Product
      shoeData={mockedShoeData}
      setTotalCartItems={mockedSetTotalCartItems}
      total={mockedTotal}
    />
  );

  const addToCartButton = screen.getByText("+");
  fireEvent.click(addToCartButton);
  const removeFromCartButton = screen.getByText("-");
  fireEvent.click(removeFromCartButton);
  expect(removeFromCartButton).toHaveClass("hidden");
});

it("hides remove from cart button", () => {
  render(
    <Product
      shoeData={mockedShoeData}
      setTotalCartItems={mockedSetTotalCartItems}
      total={mockedTotal}
    />
  );

  const removeFromCartButton = screen.getByText("-");
  expect(removeFromCartButton).toHaveClass("hidden");
});

it("shows cart-count value", () => {
  render(
    <Product
      shoeData={mockedShoeData}
      setTotalCartItems={mockedSetTotalCartItems}
      total={mockedTotal}
    />
  );

  const addToCartButton = screen.getByText("+");
  fireEvent.click(addToCartButton);
  const cartCountValue = screen.getByText("1");
  expect(cartCountValue).not.toHaveClass("hidden");
});

it("shows remove from cart button", () => {
  render(
    <Product
      shoeData={mockedShoeData}
      setTotalCartItems={mockedSetTotalCartItems}
      total={mockedTotal}
    />
  );

  const addToCartButton = screen.getByText("+");
  fireEvent.click(addToCartButton);
  const removeFromCartButton = screen.getByText("-");
  expect(removeFromCartButton).not.toHaveClass("hidden");
});

it("prevents reducing count when count is 0", () => {
  render(
    <Product
      shoeData={mockedShoeData}
      setTotalCartItems={mockedSetTotalCartItems}
      total={mockedTotal}
    />
  );

  const addToCartButton = screen.getByText("+");
  fireEvent.click(addToCartButton);
  const removeFromCartButton = screen.getByText("-");
  fireEvent.click(removeFromCartButton);
  fireEvent.click(removeFromCartButton);
  fireEvent.click(removeFromCartButton);
  const cartCountValue = screen.getByText("0");
  expect(cartCountValue).toHaveTextContent("0");
});
