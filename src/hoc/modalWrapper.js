import { motion } from "framer-motion";

const modalWrapper = ({ onCloseHandler, children }) => {
  return (
    <motion.div
      transition={{ duration: 0.4 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="errorMessage"
    >
      {children}

      <div className="errorMessage_overlay" onClick={onCloseHandler}></div>
    </motion.div>
  );
};

export default modalWrapper;
