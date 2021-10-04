import { BiInfoCircle, BiArrowToRight, BiSearch } from "react-icons/bi";
import LoadingSpinner from "../../loadingSpinner/loadingSpinner";
import "./sidebar.scss";
import SidebarItem from "./sidebarItem/sidebarItem";

const Sidebar = ({ places = [], isloading }) => {
  return (
    <div className="nav">
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
            <h2>No results :(</h2>
          ) : (
            places.map((place, index) => (
              <SidebarItem
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
