import React, { useEffect, useState } from "react";
import { getPlacesData } from "../../api/index";

import classes from "./Home.module.scss";

const Home = () => {
  const [pins, setPins] = useState([]);
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPin, setSelectedPin] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setCoords({ lat: latitude, lng: longitude });
        },
        () => {
          setIsError({ message: "Please you need to enable location" });
        }
      );
    } else {
      setIsError({
        message: "Please choose another browser that support user location",
      });
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
        setPins(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        setIsError({
          message: "Ooops, we have some problems please try again later :(",
        });
        setIsLoading(false);
      });
  }, [bounds]);

  const onSelectPlace = (place) => {
    setSelectedPin(place);
  };

  return null;

  return (
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
};

export default Home;
