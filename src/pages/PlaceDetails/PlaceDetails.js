import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getPlaceDetails } from "api";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
import Map from "components/Map/Map";
import RatingDetails from "components/RatingDetails/RatingDetails";

import StarIcon from "assets/icons/star.svg";

import classes from "./PlaceDetails.module.scss";
import WorkingHours from "components/WorkingHours/WorkingHours";
import { Button } from "@ui";

import TripAdvisorIcon from "assets/icons/trip-advisor.svg";
import LinkIcon from "assets/icons/link.svg";

const PlaceDetails = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPlaceDetails(id)
      .then((data) => {
        console.log("Edit");
        console.log(data);
        setPlace(data);
        setIsLoading(false);
      })
      .catch((data) => {
        console.log("error");
        console.log(data);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (place) {
    return (
      <section className={classes.content}>
        <div className={classes.details}>
          <div className={classes.grid}>
            <img src={place.photo.images.original.url} alt={place.name} />
          </div>
          {/** Scrollable Text Starts Here Here */}
          <div className={classes.wrapper}>
            <div className={classes.text}>
              <div className={classes.header}>
                <div className={classes.header_text}>
                  <h1>{place.name}</h1>
                  <p>{place.ranking}</p>

                  <span>{place.is_closed ? "Closed Now" : "Open Now"}</span>
                </div>
                <div className={classes.rating}>
                  <img src={StarIcon} alt="" className={classes.rating_icon} />
                  <span className={classes.rating_text}>{place.rating}</span>
                </div>
              </div>
              <div className={classes.address}>
                <p>{place.address}</p>
              </div>
              <div className={classes.details}>
                <p>{place.description}</p>
              </div>
              <WorkingHours hours={place.hours.week_ranges} />
              <RatingDetails ratings={Object.values(place.rating_histogram)} />
              <div className={classes.actions}>
                <Button icon={TripAdvisorIcon} />
                <Button icon={LinkIcon} />
              </div>
            </div>
          </div>
          {/** Scrollable Text Ends Here Here */}
          <div className={classes.progress_bar}></div>
        </div>
        {/** Map Starts Here */}
        <div className={classes.map}>
          <Map
            coords={{ lat: place.latitude, lng: place.longitude }}
            places={[place]}
          />
        </div>
      </section>
    );
  }

  return null;
};

export default PlaceDetails;

//<img src={place.photo.images.original.url} alt={place.name} />;
