import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="nav">
      <div className="nav-header">
        <h2 className="nav-header_title">traveller</h2>
      </div>
      <div className="nav-filter">filter me daddy</div>
      <div className="nav-list">
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoVIXoZvwRhL_KYkaisIujJ9z3BbxDvYyB0TDjxo6aeHbB-8m6HalR73WApUELEpPLHvk&usqp=CAU"
            alt=""
            className="card-img"
          />
          <div className="card-info">
            <h2 className="card-info_heading">Mcdonalds - Kraljevo</h2>
            <div className="card-info_secondary">
              <p className="card-info_secondary_miles">0.1mi</p>
              <p className="card-info_secondary_time">Open 'till 6pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
