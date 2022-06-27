import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../style/nav.css";

const Nav = () => {
  const [homeClass, setHomeClass] = useState("");
  const [shopClass, setShopClass] = useState("");

  useEffect(() => {
    const setActive = () => {
      // set the active class to the nav link of the current page
      // get the current url
      // compare url link text content
      // if match is current, return
      // else if match exists, but not current
      // set active to the matching nav link
      // remove it from sibling
      // else
      // remove it
    };
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
