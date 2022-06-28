import Nav from "../Nav/nav";
import { useEffect, useState } from "react";

const Shop = () => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
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
  }, [productsData]);
  return (
    <div id="shop-container" className="container">
      <Nav page="shop" />
    </div>
  );
};

export default Shop;
