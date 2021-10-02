import { useState } from "react";
import axios from "axios";

import Map from "./components/map/map.js";
import Sidebar from "./components/sidebar/sidebar.js";
import "./App.scss";

const App = () => {
  const [pins, setPins] = useState([]);

  const onNearbySearch = async (e) => {
    e.preventDefault();
    const options = {
      params: {
        bl_latitude: "11.847676",
        tr_latitude: "12.838442",
        bl_longitude: "109.095887",
        tr_longitude: "109.149359",
        restaurant_tagcategory_standalone: "10591",
        restaurant_tagcategory: "10591",
        limit: "30",
        currency: "USD",
        open_now: "false",
        lunit: "km",
        lang: "en_US",
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API,
      },
    };

    const { data } = await axios.get(
      "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
      options
    );

    console.log(data.data);

    setPins([...data.data]);
  };

  return (
    <section className="main">
      <Map pins={pins} />
      <Sidebar onFormSubmit={onNearbySearch} />
    </section>
  );
};

export default App;
