import { GrClose } from "react-icons/gr";
import "./errorOverlay.scss";

const error0verlay = ({ message, setIsError }) => {
  const onCloseModal = () => {
    setIsError(null);
  };

  return (
    <div className="errorMessage">
      <div className="errorMessage_modal">
        <div className="errorMessage_modal_heading">
          <h2 className="errorMessage_modal_heading_title">Error</h2>
          <GrClose
            className="errorMessage_modal_heading_icon"
            onClick={onCloseModal}
          />
        </div>
        <h2 className="errorMessage_modal_text">{message}</h2>
      </div>
      <div className="errorMessage_overlay" onClick={onCloseModal}></div>
    </div>
  );
};

export default error0verlay;
