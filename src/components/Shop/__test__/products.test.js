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

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("initial cart items total value", () => {
  it("cart item value is in the document", () => {
    render(<Products totalCartItems={0} />);

    const cartItemValue = screen.getByTestId("cart-items-total");
    expect(cartItemValue).toBeInTheDocument();
  });

  it("test initial cart item state", () => {
    render(<Products totalCartItems={0} />);

    const cartItemValue = screen.getByTestId("cart-items-total");
    expect(cartItemValue).toHaveTextContent("( 0 )");
  });
});

describe("update cart items total value", () => {
  it("update cart item count value", async () => {
    render(<Products totalCartItems={0} />);

    // eslint-disable-next-line testing-library/prefer-find-by
    const addToCartButton = await waitFor(() => screen.getByText("+"));
    fireEvent.click(addToCartButton);
    const cartItemValue = screen.getByTestId("cart-items-total");
    expect(cartItemValue).toHaveTextContent("( 1 )");
  });
});
