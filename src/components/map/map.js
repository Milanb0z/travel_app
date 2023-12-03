import React from "react";
import GoogleMapReact from "google-map-react";

import Marker from "../Marker/Marker";
import classes from "./Map.module.scss";

const Map = ({ coords, places, setCoords, setBounds }) => {
  console.log(places);
  return (
    <div className={classes.map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        center={coords}
        defaultCenter={{ lat: 0, lng: 0 }}
        options={{ disableDefaultUI: true }}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        onChange={(event) => {
          setCoords({ lat: event.center.lat, lng: event.center.lng });
          setBounds({ ne: event.marginBounds.ne, sw: event.marginBounds.sw });
        }}
      >
        {places.map((place, index) => (
          <Marker
            data={place}
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

/**
 *
 */
