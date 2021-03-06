import axios from "axios";

export const getPlacesData = async (coords) => {
  const options = {
    params: {
      bl_latitude: coords.sw.lat,
      bl_longitude: coords.sw.lng,
      tr_longitude: coords.ne.lng,
      tr_latitude: coords.ne.lat,
    },
    headers: {
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_RAPID_API,
    },
  };

  try {
    const {
      data: { data },
    } = await axios.get(
      "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",

      options
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};
