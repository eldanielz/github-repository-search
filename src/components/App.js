import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import useRepo from "../hooks/useRepo";
import Table from "./Table";

const App = () => {
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [repo, search] = useRepo("tetris");

  useEffect(() => {
    setSelectedRepo(repo[0]);
  }, [repo]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <Table selectedRepo={selectedRepo} />
    </div>
  );
};

export default App;
