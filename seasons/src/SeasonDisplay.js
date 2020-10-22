import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  let seasonResponse = "";
  let iconName = "";
  if (season === "winter") {
    seasonResponse = "Burr, it's chilly";
    iconName = "snowflake";
  } else {
    seasonResponse = "Let's hit the beach";
    iconName = "sun";
  }

  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{seasonResponse}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
