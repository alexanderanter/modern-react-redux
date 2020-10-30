// http://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=SEARCHTERM

import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleOnChange = (value) => {
    setSearchTerm(value);
  };
  return (
    <div className="ui form">
      <div className="field">
        <label> Enter Search input</label>
        <input
          className="input"
          value={searchTerm}
          onChange={(e) => handleOnChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
