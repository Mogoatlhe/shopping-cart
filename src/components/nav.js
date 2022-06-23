import { Link } from "react-router-dom";
import "../style/nav.css";

const Nav = () => {

  const setActive = () => {

  }

  return (
    <nav>
      <Link to="/" className = "link active" onClick = { setActive }>HOME</Link>
      <Link to="shop" className = "link" onClick = { setActive }>SHOP</Link>
    </nav>
  );
};

export default Nav;
