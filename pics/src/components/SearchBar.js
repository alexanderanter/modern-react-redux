import React from "react";
class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    //the arrow function makes sure the value of this is the same as our instance of the Searchbar

    // call props with this.props as its a class-based component!
    // invoking a parents function by calling a function that was sent into the child as a prop
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="searchfield">Search term</label>
            <input
              name="searchfield"
              type="text"
              placeholder="fill in your searchterm"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
