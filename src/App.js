import { useState, useEffect } from "react";

import { getPlacesData } from "./api/index.js";
import Map from "./components/map/map.js";
import Sidebar from "./components/sidebar/sidebar.js";
import "./App.scss";
import Error0verlay from "./components/errorOverlay/error0verlay.js";

const App = () => {
  const [pins, setPins] = useState([]);
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    getPlacesData()
      .then((data) => {
        setPins(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsError({
          message: "Ooops, we have some problems please try again later :(",
        });
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="main">
      {isError && (
        <Error0verlay setIsError={setIsError} message={isError.message} />
      )}
      <Map setCoords={setCoords} setBounds={setBounds} coords={coords} />
      <Sidebar isloading={isLoading} places={pins} />
    </section>
  );
};

export default App;
