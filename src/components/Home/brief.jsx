import image from "../../images/white-all-star.avif";
import { Link } from "react-router-dom";

const Brief = () => {
  return (
    <div id="brief-container">
      <img
        src={image}
        alt="low top white converse shoes"
        id="home-page-image"
      />
      <div id="home-page-container">
        <p className="home-page-text">Asikhulume</p>
        <p className="home-page-text">Let's Talk</p>
        <p className="home-page-text">Get your Converse</p>
        <Link to="/shopping-cart/shop" className="link">
          <p className="home-page-text call-to-action">Here Now</p>
        </Link>
      </div>
    </div>
  );
};

export default Brief;
