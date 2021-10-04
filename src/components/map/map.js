import GoogleMapReact from "google-map-react";
import Marker from "../marker/marker.js";
import "./map.scss";

const Map = ({ setCoords, setBounds, coords, places }) => {
  return (
    <div className="mapbox">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        center={coords}
        defaultCenter={{ lat: 0, lng: 0 }}
        defaultZoom={11}
        margin={[50, 50, 50, 50]}
        onChange={(event) => {
          setCoords({ lat: event.center.lat, lng: event.center.lng });
          setBounds({ ne: event.marginBounds.ne, sw: event.marginBounds.sw });
        }}
      >
        {places.map((place) => {
          console.log(place);
          return (
            <Marker
              key={place.locaiton_id}
              lat={place.latitude}
              lng={place.longitude}
              text={place.name}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
