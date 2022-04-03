import React, { useState } from "react";
import SearchBar from "./SearchBar";
import useFetch from "../hooks/useFetch";
import Table from "./Table";

const App = () => {
  const initialQuery = "tonik";
  const [query, setQuery] = useState(initialQuery);

  const url =
    query &&
    `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc`;

  const { status, data, error } = useFetch(url);

  const onFormSubmit = (term) => {
    if (term) {
      setQuery(term);
    }
  };

  const repos = data.items;

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onFormSubmit} initialQuery={initialQuery} />
      <div className="ui segment">
        {status === "idle" && (
          <h4 className="ui header">
            {" "}
            Let's get started by searching for a repository!{" "}
          </h4>
        )}
        {status === "error" && <h4 className="ui header">{error}</h4>}
        {status === "fetching" && (
          <>
            <div className="ui basic segment">
              <p></p>
              <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading</div>
              </div>
            </div>
          </>
        )}
        {status === "fetched" && (
          <>
            <h4 className="ui header"> Search results for {query} </h4>
            {repos.length === 0 ? (
              <div> No repositories found :( </div>
            ) : (
              <Table repos={repos} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
