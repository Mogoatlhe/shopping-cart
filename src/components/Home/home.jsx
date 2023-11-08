import Brief from "./brief";
import Nav from "../Nav/nav";

const Home = () => {
  return (
    <div id="home-container" className="container">
      <Nav page="home" />
      <Brief />
    </div>
  );
};

export default Home;
