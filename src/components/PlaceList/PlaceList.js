import React, { useState } from "react";

import classes from "./PlaceList.module.scss";
import { Input, Button, Toggle } from "@ui";

import PlaceCard from "components/PlaceCard/PlaceCard";

import FilterIcon from "assets/icons/filter.svg";
import LocationIcon from "assets/icons/get_location.svg";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
import useInput from "hooks/useInput";

const PlaceList = ({ places, isLoading, getLocation }) => {
  const [bool, setbool] = useState(false);
  const [search, setSearch] = useInput("");

  const filterList = () => {
    return places.filter(({ name }) => name.toLowerCase().includes(search));
  };

  const onChangeClick = () => {
    console.log("click");
    setbool((prev) => !prev);
  };

  let content = null;

  if (isLoading) {
    content = <LoadingSpinner />;
  } else if (places.length === 0) {
    content = (
      <div className={classes.message}>
        <p>No places found in this area. Please try resizig map.</p>
      </div>
    );
  } else if (places.length > 0 && filterList().length > 0) {
    content = filterList().map((place) => (
      <PlaceCard title={place.name} address={place.address} place={place} />
    ));
  } else {
    content = (
      <div className={classes.message}>
        <p>No places found for phrase "{search}". Please try another phrase.</p>
      </div>
    );
  }

  return (
    <div className={classes.list}>
      <div className={classes.header}>
        <Input value={search} onChange={setSearch} placeholder="Search" />
        <Button icon={FilterIcon} />
      </div>
      <div className={classes.filter}>
        <Toggle onClick={onChangeClick} checked={bool}>
          Show Map
        </Toggle>
        <Button
          disabled={!navigator.geolocation}
          icon={LocationIcon}
          onClick={getLocation}
        />
      </div>
      <div className={classes.cards}>{content}</div>
    </div>
  );
};

export default PlaceList;
