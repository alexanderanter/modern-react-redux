// Import the React and ReactDOM libs
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  const buttonText = { text: "Click me!" };
  const style = { backgroundColor: "blue", color: "white" };
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" />
      <button style={style}>{buttonText.text}</button>
    </div>
  );
};

function getTime() {
  return new Date().toLocaleTimeString();
}

// Creates a functional component
const AppB = () => {
  return (
    <div>
      <div>Current Time:</div>
      <h3>{getTime()}</h3>
    </div>
  );
};

// Take the react component and show it on the screen

ReactDOM.render(<AppB />, document.querySelector("#root"));
