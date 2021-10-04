import { GrClose } from "react-icons/gr";
import ModalWrapper from "../../hoc/modalWrapper";
import "./errorOverlay.scss";

const error0verlay = ({ message, setIsError }) => {
  const onCloseModal = () => {
    setIsError(null);
  };

  return (
    <ModalWrapper onCloseHandler={onCloseModal}>
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
    </ModalWrapper>
  );
};

export default error0verlay;
