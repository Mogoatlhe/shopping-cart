import { useState } from "react";
import uniqid from "uniqid";
import Cart from "./cart";
import Product from "./product";

const Products = ({ totalCartItems, updateCartItems }) => {
  const [productsData, setProductsData] = useState([]);
  let imageLink = `http://assets.superbalistcdn.co.za/`;

  const changeBaseUrl = (response) => {
    return response.search.data.map((data) => {
      data.assets = data.assets.map((image) => {
        image.base_url = `${imageLink}${data.asset.base_url.slice(-20)}`;
        return image;
      });
      return data;
    });
  };

  const fetchData = async () => {
    let response = await fetch(
      "https://superbalist.com/api/public/es/catalogue?brand=converse&department=men&category=shoes&route=%7B%22path%22:%22%2Fbrands%2Fconverse%2Fmen%2Fshoes%22%7D"
    );

    response = await response.json();
    const data = changeBaseUrl(response);

    if (productsData.length === 0) setProductsData(data);
  };

  fetchData();

  const displayProducts = () => {
    const products = productsData.map((productData) => {
      const shoeData = {
        name: productData.short_name,
        price: productData.price_range.min.price,
        assets: productData.assets,
      };

      return <Product key={uniqid()} shoeData={shoeData} />;
    });

    return products;
  };

  return (
    <div id="products-container">
      <Cart totalCartItems={totalCartItems} />
      {displayProducts().map((product) => product)}
    </div>
  );
};

export default Products;
