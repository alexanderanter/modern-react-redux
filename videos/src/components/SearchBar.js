import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    // TODO: Make sure we call callback from parent comp
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
