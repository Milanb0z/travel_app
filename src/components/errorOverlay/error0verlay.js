import { GrClose } from "react-icons/gr";
import ModalWrapper from "../../hoc/modalWrapper";
import { motion } from "framer-motion";
import "./errorOverlay.scss";

const error0verlay = ({ message, setIsError }) => {
  const onCloseModal = () => {
    setIsError(null);
  };

  return (
    <ModalWrapper onCloseHandler={onCloseModal}>
      <div className="errorMessage_wrapper">
        <motion.div
          animate={{ y: "0", opacity: 1 }}
          exit={{ y: "+100%" }}
          transition={{ duration: 0.3 }}
          className="errorMessage_modal"
        >
          <div className="errorMessage_modal_heading">
            <h2 className="errorMessage_modal_heading_title">Error</h2>
            <GrClose
              className="errorMessage_modal_heading_icon"
              onClick={onCloseModal}
            />
          </div>
          <h2 className="errorMessage_modal_text">{message}</h2>
        </motion.div>
      </div>
    </ModalWrapper>
  );
};

export default error0verlay;
