import { Link } from "react-router-dom";
import "../../style/nav.css";

const Nav = ({ page }) => {
  return (
    <nav>
      <Link to="/" className={`link ${page === "home" ? "active" : ""}`}>
        HOME
      </Link>
      <Link to="/shop" className={`link ${page === "shop" ? "active" : ""}`}>
        SHOP
      </Link>
    </nav>
  );
};

export default Nav;
