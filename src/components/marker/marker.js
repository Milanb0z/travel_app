import "./marker.scss";

const marker = ({ isHidden }) => {
  return <div className={`marker ${isHidden && "hidden"}`}></div>;
};

export default marker;
