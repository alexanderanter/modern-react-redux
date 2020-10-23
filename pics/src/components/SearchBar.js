import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="searchfield">Search term</label>
            <input
              name="searchfield"
              type="text"
              placeholder="fill in your searchterm"
              onChange={
                this.onInputChange
                // DO NOT put () on functions when passing them to an event handler like onChange, that would call the function everytime its rendered instead of everytime there is a change.
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
