import "./SeasonDisplay.css";
import React from "react";
import Clock from "./Clock";
const seasonConfig = {
  summer: {
    seasonResponse: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    seasonResponse: "Burr, it's chilly",
    iconName: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { seasonResponse, iconName } = seasonConfig[season]; //pass in the current name to get the desired properties from our seasonConfig object and place them into 2 variables
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>
        {seasonResponse} <Clock />
      </h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
