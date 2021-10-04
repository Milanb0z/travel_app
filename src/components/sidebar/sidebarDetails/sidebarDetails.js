import "./sidebarDetails.scss";

const sidebarDetails = () => {
  return (
    <div className="placeDetails">
      <img src="" alt="" className="placeDetails_cover" />
      <div className="placeDetails_info">
        <h2>Title</h2>
        <h4>type</h4>
        <h6>location</h6>
        <div className="placeDetails_info_details"></div>
      </div>
    </div>
  );
};

export default sidebarDetails;
