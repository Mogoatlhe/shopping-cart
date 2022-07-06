import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Products from "../products";

const mockedShoeData = {
  search: {
    data: [
      {
        short_name: "Chucks",
        price_range: {
          min: {
            price: "999",
          },
        },
        asset: {
          base_url:
            "http://assets.superbalistcdn.co.za/{size}filters:quality({quality}):format({extension})/2730967/original.jpg",
        },
        assets: [
          {
            base_url:
              "http://assets.superbalistcdn.co.za/{size}filters:quality({quality}):format({extension})/2730967/original.jpg",
          },
        ],
      },
    ],
  },
};

const server = setupServer(
  rest.get(
    "https://superbalist.com/api/public/es/catalogue",
    (req, res, ctx) => {
      return res(ctx.json(mockedShoeData));
    }
  )
);

const getProducts = () => {
  return <Products />;
};

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("cart button works", () => {
  it("cart icon button is in the document", () => {
    render(getProducts());
    const allButtons = screen.getAllByRole("button");
    const cartIconButton = allButtons[0];
    expect(cartIconButton).toHaveAttribute("id", "cart-button");
  });

  it("cart icon button shows checkout when clicked", () => {
    render(getProducts());
    const allButtons = screen.getAllByRole("button");
    const cartIconButton = allButtons[0];
    fireEvent.click(cartIconButton);
    const checkoutContainer = screen.getByTestId("checkout-container");
    expect(checkoutContainer).not.toHaveClass("hidden");
  });

  it("cart icon button shows checkout when clicked", () => {
    render(getProducts());
    const allButtons = screen.getAllByRole("button");
    const cartIconButton = allButtons[0];
    fireEvent.click(cartIconButton);
    const checkoutContainer = screen.getByTestId("checkout-container");
    expect(checkoutContainer).not.toHaveClass("hidden");
  });
  // it("test initial cart item state", () => {
  //   render(<Products totalCartItems={0} />);
  //   expect(cartItemValue).toHaveTextContent("( 0 )");
  // });
});

// describe("update cart items total value", () => {
//   it("update cart item count value", async () => {
//     render(<Products totalCartItems={0} />);

//     // eslint-disable-next-line testing-library/prefer-find-by
//     const addToCartButton = await waitFor(() => screen.getByText("+"));
//     fireEvent.click(addToCartButton);
//     const cartItemValue = screen.getByTestId("cart-items-total");
//     expect(cartItemValue).toHaveTextContent("( 1 )");
//   });
// });
