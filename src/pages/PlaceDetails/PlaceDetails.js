import React, { useEffect } from "react";
import classes from "./PlaceDetails.module.scss";
import { useParams } from "react-router";
import axios from "axios";
import { getPlaceDetails } from "api";

const PlaceDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    getPlaceDetails(id).then((data) => console.log(data));
  }, [id]);

  return <div>PlaceDetails</div>;
};

export default PlaceDetails;
