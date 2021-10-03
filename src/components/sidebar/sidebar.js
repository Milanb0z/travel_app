import { BiInfoCircle, BiArrowToRight, BiSearch } from "react-icons/bi";
import LoadingSpinner from "../../loadingSpinner/loadingSpinner";
import "./sidebar.scss";

const Sidebar = ({ places, isloading }) => {
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
          {places.map((place) => (
            <div className="card" key={place.location_id}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoVIXoZvwRhL_KYkaisIujJ9z3BbxDvYyB0TDjxo6aeHbB-8m6HalR73WApUELEpPLHvk&usqp=CAU"
                alt=""
                className="card-img"
              />
              <div className="card-info">
                <h2 className="card-info_heading">{place.name}</h2>
                <div className="card-info_secondary">
                  <p className="card-info_secondary_miles">
                    {place.distance_string}
                  </p>
                  <p className="card-info_secondary_time">
                    {places.is_closed ? "Closed" : "Open"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
