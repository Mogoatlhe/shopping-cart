import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../style/nav.css";

const Nav = ({ page }) => {
  const [homeClass, setHomeClass] = useState("");
  const [shopClass, setShopClass] = useState("");

  useEffect(() => {
    if (page === "home") {
      setHomeClass("active");
      setShopClass("");
    } else if (page === "shop") {
      setHomeClass("");
      setShopClass("active");
    } else {
      setHomeClass("");
      setShopClass("");
    }
  });

  return (
    <nav>
      <Link to="/" className={`link ${homeClass}`}>
        HOME
      </Link>
      <Link to="shop" className={`link ${shopClass}`}>
        SHOP
      </Link>
    </nav>
  );
};

export default Nav;
