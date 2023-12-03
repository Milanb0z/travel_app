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
  const [search, setSearch] = useInput("kafana");

  const onChangeClick = () => {
    console.log("click");
    setbool((prev) => !prev);
  };

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
      <div className={classes.cards}>
        {isLoading && <LoadingSpinner />}
        {places
          .filter(({ name }) => name.toLowerCase().includes(search))
          .map((place) => (
            <PlaceCard
              title={place.name}
              address={place.address}
              place={place}
            />
          ))}
      </div>
    </div>
  );
};

export default PlaceList;
