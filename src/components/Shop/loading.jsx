import image from "../../images/loading.gif";
const Loading = ({ hidden }) => {
  return (
    <div className={`loading ${hidden}`}>
      <img src={image} alt="loading gif" />
    </div>
  );
};

export default Loading;
