import React from "react";

class SearchBar extends React.Component {
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
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
