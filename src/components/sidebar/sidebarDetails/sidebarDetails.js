import { motion } from "framer-motion";
import "./sidebarDetails.scss";

const sidebarDetails = () => {
  return (
    <motion.div
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5 }}
      className="placeDetails"
    >
      <img src="" alt="" className="placeDetails_cover" />
      <div className="placeDetails_info">
        <h2>Title</h2>
        <h4>type</h4>
        <h6>location</h6>
        <div className="placeDetails_info_details"></div>
      </div>
    </motion.div>
  );
};

export default sidebarDetails;
