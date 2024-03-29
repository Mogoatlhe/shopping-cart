import { useState, useEffect, useRef } from "react";
import uniqid from "uniqid";
import Cart from "./cart";
import Checkout from "./checkout";
import Product from "./product";
import Loading from "./loading";

const Products = () => {
  const total = useRef(0);
  const [productsData, setProductsData] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [hidden, setHidden] = useState("hidden");
  const [loading, setLoading] = useState("hidden");

  useEffect(() => {
    const totalAmount = Number(localStorage.getItem("total"));

    if (totalAmount !== 0) {
      total.current = totalAmount;
      setTotalCartItems(totalAmount);
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
      setLoading("");
      let response = await fetch(
        "https://ofplbackend-production.up.railway.app/superbalist-converse"
      );

      response = await response.json();
      const data = changeBaseUrl(response);

      if (productsData.length === 0) setProductsData(data);
      setLoading("hidden");
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
  }, [productsData]);

  return (
    <>
      <div
        id="products-container"
        style={{ display: hidden === "hidden" ? "flex" : "none" }}
      >
        <Cart totalCartItems={totalCartItems} setHidden={setHidden} />
        {products}
      </div>
      <Loading hidden={loading} />
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
