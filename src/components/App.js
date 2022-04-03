import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import useRepo from "../hooks/useRepo";
import Table from "./Table";

const App = () => {
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [fetchedRepo, fetchGithubRepoByKeyword] = useRepo("tetris");

  useEffect(() => {
    setSelectedRepo(fetchedRepo[0]);
  }, [fetchedRepo]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={fetchGithubRepoByKeyword} />
      <Table selectedRepo={selectedRepo} />
    </div>
  );
};

export default App;
