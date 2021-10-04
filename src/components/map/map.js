import GoogleMapReact from "google-map-react";
import { useState } from "react";
import Marker from "../marker/marker.js";
import "./map.scss";

const Map = ({ setCoords, setBounds, coords, places = [] }) => {
  const [isDragging, setIsDragging] = useState(false);
  return (
    <div className="mapbox">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        center={coords}
        defaultCenter={{ lat: 0, lng: 0 }}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        onChange={(event) => {
          setCoords({ lat: event.center.lat, lng: event.center.lng });
          setBounds({ ne: event.marginBounds.ne, sw: event.marginBounds.sw });
        }}
        onDrag={() => {
          if (!isDragging) {
            setIsDragging(true);
          }
        }}
        onDragEnd={() => {
          if (isDragging) {
            setIsDragging(false);
          }
        }}
      >
        {places.map((place, index) => (
          <Marker
            data={place}
            isHidden={isDragging}
            key={place.location_id + index}
            lat={place.latitude}
            lng={place.longitude}
            text={place.name}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
