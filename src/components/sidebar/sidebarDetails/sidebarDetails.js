import { motion } from "framer-motion";
import "./sidebarDetails.scss";

const sidebarDetails = ({ place }) => {
  console.log(place);
  console.log("Jell");
  return (
    <motion.div
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5 }}
      className="placeDetails"
    >
      <img
        src={place.photo.images.medium.url}
        alt=""
        className="placeDetails_cover"
      />
      <div className="placeDetails_info">
        <h2>{place.name}</h2>
        <h4>
          {place.address}, {place.address_obj.city}
        </h4>
        <h6>{place.category.name}</h6>
        <div className="placeDetails_info_details"></div>
      </div>
    </motion.div>
  );
};

export default sidebarDetails;
