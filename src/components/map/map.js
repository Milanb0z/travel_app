import GoogleMapReact from "google-map-react";
import "./map.scss";

const Map = () => {
  return (
    <div className="mapbox">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33,
        }}
        defaultZoom={11}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
