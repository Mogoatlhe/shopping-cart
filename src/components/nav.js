import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="shop">SHOP</Link>
    </nav>
  );
};

export default Nav;
