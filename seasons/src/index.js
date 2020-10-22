import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // to update state always call setState!
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      //taking a property from the state on the app component and passing as a prop into the SeasonDisplay component
      //we take state from one component and pass it as a prop down to the child
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return (
        <Spinner spinnerMessage="Please allow to share your location for this app to work!" />
      );
    }
  }
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
