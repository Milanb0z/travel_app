import GoogleMapReact from "google-map-react";
import { plugins } from "pretty-format";
import Marker from "../marker/marker";
import "./map.scss";

const Map = ({ pins }) => {
  const onDaggingMap = (event) => {
    console.log(event);
  };
  return (
    <div className="mapbox">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33,
        }}
        onDragEnd={onDaggingMap}
        defaultZoom={11}
      >
        {pins.map((pin) => (
          <Marker
            lat={pin.latitude}
            lng={pin.longitude}
            text={pin.location_string}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
