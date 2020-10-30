// http://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=SEARCHTERM

import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleOnChange = (value) => {
    setSearchTerm(value);
  };
  console.log(results);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: searchTerm,
        },
      });

      setResults(data.query.search);
    };
    //only search after a searchterm have been provided
    if (searchTerm) {
      search();
    }
  }, [searchTerm]);
  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
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
      <div className="ui celled list ">{renderedResults}</div>
    </div>
  );
};

export default Search;
