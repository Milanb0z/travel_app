import { BiInfoCircle, BiArrowToRight, BiSearch } from "react-icons/bi";
import { AnimatePresence } from "framer-motion";

import LoadingSpinner from "../loadingSpinner/loadingSpinner";
import SidebarDetails from "./sidebarDetails/sidebarDetails";
import SidebarItem from "./sidebarItem/sidebarItem";
import "./sidebar.scss";

const Sidebar = ({ places = [], isloading, onLocationSelect, selectedPin }) => {
  return (
    <div className="nav">
      <AnimatePresence>{selectedPin && <SidebarDetails />}</AnimatePresence>

      <div className="nav-header">
        <BiArrowToRight className="nav-header_icon" />
        <h2 className="nav-header_title">traveller</h2>
        <BiInfoCircle className="nav-header_icon" />
      </div>
      <div className="nav-search">
        <form>
          <input
            type="text"
            placeholder="Search..."
            className="nav-search_field"
          />
          <BiSearch className="nav-search_icon" />
        </form>
      </div>
      <div className="nav-filter">filter me daddy</div>
      {isloading ? (
        <div className="nav-loading">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="nav-list">
          {places.length === 0 ? (
            <div className="nav-loading">
              <h2>No results :(</h2>
            </div>
          ) : (
            places.map((place, index) => (
              <SidebarItem
                onClick={onLocationSelect}
                data={place}
                key={`${index}sideitem${place.location_id}`}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
