import { useState, useEffect, useRef } from "react";
import uniqid from "uniqid";
import Cart from "./cart";
import Checkout from "./checkout";
import Product from "./product";

const Products = () => {
  const total = useRef(0);
  const [productsData, setProductsData] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [hidden, setHidden] = useState("hidden");

  useEffect(() => {
    const getTotal = () => Number(localStorage.getItem("total"));

    if (getTotal() !== 0) {
      total.current = getTotal();
      setTotalCartItems(getTotal());
    }

    const changeBaseUrl = (response) => {
      let imageLink = `http://assets.superbalistcdn.co.za/`;
      return response.search.data.map((data) => {
        data.assets = data.assets.map((image) => {
          image.base_url = `${imageLink}${data.asset.base_url.slice(-20)}`;
          return image;
        });
        return data;
      });
    };

    (async () => {
      let response = await fetch(
        "https://my-cors-proxy-sc.herokuapp.com/https://superbalist.com/api/public/es/catalogue?brand=converse&department=men&category=shoes&route=%7B%22path%22:%22%2Fbrands%2Fconverse%2Fmen%2Fshoes%22%7D"
      );

      response = await response.json();
      const data = changeBaseUrl(response);

      if (productsData.length === 0) setProductsData(data);
    })();

    setProducts(
      productsData.map((productData) => {
        const shoeData = {
          name: productData.short_name,
          price: productData.price_range.min.price,
          assets: productData.assets,
        };

        return (
          <Product
            key={uniqid()}
            shoeData={shoeData}
            setTotalCartItems={setTotalCartItems}
            total={total}
          />
        );
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsData, totalCartItems]);

  return (
    <>
      <div
        id="products-container"
        style={{ display: hidden === "hidden" ? "flex" : "none" }}
      >
        <Cart totalCartItems={totalCartItems} setHidden={setHidden} />
        {products}
      </div>
      <Checkout
        hidden={hidden}
        setHidden={setHidden}
        setTotalCartItems={setTotalCartItems}
        overall={total}
      />
    </>
  );
};

export default Products;
