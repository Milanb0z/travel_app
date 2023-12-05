import React, { useEffect, useState } from "react";
import { getPlacesData } from "../../api/index";

import classes from "./Home.module.scss";
import Sidebar from "components/Sidebar/Sidebar";
import Map from "components/Map/Map";
import PlaceList from "components/PlaceList/PlaceList";

const Home = () => {
  const [pins, setPins] = useState([]);
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPin, setSelectedPin] = useState(null);
  const [hoveredPin, setHoveredPin] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setCoords({ lat: latitude, lng: longitude });
        }
      );
    }
  }, []);

  // Fetchimg Pins on Start

  useEffect(() => {
    if (!bounds) {
      return;
    }
    setIsLoading(true);
    getPlacesData(bounds)
      .then((data) => {
        let filteredData = data.filter(({ name }) => name);
        setPins(filteredData);
        console.log(filteredData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [bounds]);

  const onGetLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  };

  const onSelectPlace = (place) => {
    setSelectedPin(place);
  };

  const onHoverEnter = (place) => {
    console.log(place);
    setHoveredPin(place);
  };

  const onHoverLeave = () => {
    setHoveredPin(null);
  };

  return (
    <div className={classes.content}>
      <PlaceList
        onPlaceHover={onHoverEnter}
        onPlaceLeave={onHoverLeave}
        getLocation={onGetLocation}
        places={pins}
        isLoading={isLoading}
      />
      <Map
        hoveredPin={hoveredPin?.location_id}
        coords={coords}
        places={pins}
        setBounds={setBounds}
        setCoords={setCoords}
      />
    </div>
  );
};

export default Home;

/**
 * 
 *   return (
    <section className="main">
      <Map
        setCoords={setCoords}
        setBounds={setBounds}
        places={pins}
        coords={coords}
      />
      <Sidebar
        selectedPin={selectedPin}
        isloading={isLoading}
        places={pins}
        onLocationSelect={onSelectPlace}
      />
    </section>
  );

 */
