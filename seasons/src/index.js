import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // to update state always call setState!
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  //conditional rendering
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      //taking a property from the state on the app component and passing as a prop into the SeasonDisplay component
      //we take state from one component and pass it as a prop down to the child
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <div>Loading!</div>;
    }
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
