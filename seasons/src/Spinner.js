import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.spinnerMessage}</div>
    </div>
  );
};

Spinner.defaultProps = {
  spinnerMessage: "Loading...",
};

export default Spinner;
