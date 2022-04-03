import React, { useState } from "react";

const SearchBar = () => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Repository search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
