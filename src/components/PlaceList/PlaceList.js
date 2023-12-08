import React, { useState } from "react";
import { motion } from "framer-motion";

//Hooks
import useInput from "hooks/useInput";

//Components
import { Input, Button, Toggle } from "@ui";
import PlaceCard from "components/PlaceCard/PlaceCard";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";

//Icons
import FilterIcon from "assets/icons/filter.svg";
import LocationIcon from "assets/icons/get_location.svg";

//Styles
import classes from "./PlaceList.module.scss";

const containerVariants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  initial: {
    opacity: 0,
    x: -20,
  },
};

const PlaceList = ({
  places,
  isLoading,
  getLocation,
  onPlaceHover,
  onPlaceLeave,
}) => {
  const [bool, setbool] = useState(false);
  const [search, setSearch] = useInput("");
  const [clicked, setClicked] = useState(null);

  const filterList = () => {
    return places.filter(({ name }) => name.toLowerCase().includes(search));
  };

  const onChangeClick = () => {
    console.log("click");
    setbool((prev) => !prev);
  };

  return (
    <div className={classes.list}>
      <div className={classes.header}>
        <Input
          value={search}
          onChange={setSearch}
          placeholder="Filter Places"
        />
        <Button onClick={onChangeClick} icon={FilterIcon} />
      </div>
      {bool && (
        <div className={classes.filter}>
          <div className={classes.filter_left}>
            <p>{places.length} Results</p>
          </div>
          <Toggle onClick={onChangeClick} checked={bool}>
            Show Map
          </Toggle>
          <Button
            disabled={!navigator.geolocation}
            icon={LocationIcon}
            onClick={getLocation}
          />
        </div>
      )}
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="visible"
        className={classes.cards}
        transition={{ staggerChildren: 0.3, delayChildren: 1 }}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : places.length > 0 && filterList().length > 0 ? (
          filterList().map((place) => (
            <PlaceCard
              onClickHandler={() => setClicked(place.location_id)}
              isClicked={place.location_id === clicked}
              key={place.location_id}
              onHover={null}
              onLeave={null}
              title={place.name}
              address={place.address}
              place={place}
            />
          ))
        ) : (
          <div className={classes.message}>
            <p>
              No places found for phrase "{search}". Please try another phrase.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PlaceList;
