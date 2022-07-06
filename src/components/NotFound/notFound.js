import Nav from "../Nav/nav";

const NotFound = () => {
  return (
    <div id="not-found-container" className="container">
      <Nav page="not-found" />
      <div id="not-found">
        <p>The page you have entered does not exist</p>
        <p>
          Please click anyone of the links on the left to navigate to our pages
        </p>
      </div>
    </div>
  );
};

export default NotFound;
