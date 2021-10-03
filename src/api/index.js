import axios from "axios";

export const getPlacesData = async () => {
  const options = {
    params: {
      bl_latitude: "11.847676",
      tr_latitude: "12.838442",
      bl_longitude: "109.095887",
      tr_longitude: "109.149359",
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
