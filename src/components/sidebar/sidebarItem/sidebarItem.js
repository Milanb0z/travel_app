import { BiRestaurant } from "react-icons/bi";
import "./sidebarItem.scss";

const sidebarItem = ({ data, onClick }) => {
  if (!data.name) {
    return null;
  }

  let image = null;

  if (data.photo) {
    image = (
      <img src={data.photo.images.small.url} alt="" className="sideCard-img" />
    );
  } else {
    image = (
      <div className="sideCard-img">
        <BiRestaurant className={"sideCard-icon"} />
      </div>
    );
  }

  return (
    <div className="sideCard" onClick={() => onClick(data)}>
      {image}
      <div className="sideCard-info">
        <h2 className="sideCard-info_heading">{data.name}</h2>
        <div className="sideCard-info_secondary">
          {data.distance_string && (
            <p className="sideCard-info_secondary_miles">
              {data.distance_string}
            </p>
          )}
          <p className="sideCard-info_secondary_time">
            {data.is_closed ? "Closed" : "Open"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default sidebarItem;
