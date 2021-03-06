import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { getPlacesData } from "./api/index.js";
import Map from "./components/map/map.js";
import Sidebar from "./components/sidebar/sidebar.js";
import Error0verlay from "./components/errorOverlay/error0verlay.js";
import "./App.scss";

const App = () => {
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

  useEffect(() => {
    if (!bounds) {
      return;
    }
    setIsLoading(true);
    getPlacesData(bounds)
      .then((data) => {
        setPins(data);
        setIsLoading(false);
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

  return (
    <section className="main">
      <AnimatePresence>
        {isError && (
          <Error0verlay setIsError={setIsError} message={isError.message} />
        )}
      </AnimatePresence>
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

export default App;
