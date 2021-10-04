import "./marker.scss";

const marker = ({ isHidden, data }) => {
  return <div className={`marker ${isHidden && "hidden"}`}></div>;
};

export default marker;
