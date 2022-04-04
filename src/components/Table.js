import React, { useState, useEffect } from "react";
import TableRow from "./TableRow";

const Table = ({ repos }) => {
  const [data, setData] = useState(repos);
  const [order, setOrder] = useState("ASC");

  const sortRepos = (column) => {
    column = column.split(".");
    const len = column.length;

    const checkForNestedObjects = (a, b) => {
      // looping for object properties with column.length as nesting level
      let i = 0;
      while (i < len) {
        a = a[column[i]];
        b = b[column[i]];
        i++;
      }

      return [a, b];
    };

    if (order === "ASC") {
      const sorted = [...repos].sort((a, b) => {
        [a, b] = checkForNestedObjects(a, b);

        if (!isNaN(a)) return a > b ? 1 : -1;
        return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
      });

      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...repos].sort((a, b) => {
        [a, b] = checkForNestedObjects(a, b);

        if (!isNaN(a)) return a < b ? 1 : -1;
        return a.toLowerCase() < b.toLowerCase() ? 1 : -1;
      });

      setData(sorted);
      setOrder("ASC");
    }
  };

  useEffect(() => {
    setData(repos);
  }, [repos]);

  if (!repos) {
    return;
  }

  const renderedRepos = data.map((repo) => {
    return <TableRow key={repo.id} repo={repo} />;
  });

  return (
    <div>
      <table className="ui sortable celled table">
        <thead>
          <tr>
            <th onClick={() => sortRepos("full_name")}>Name</th>
            <th onClick={() => sortRepos("owner.login")}>Owner</th>
            <th onClick={() => sortRepos("stargazers_count")}>Stars</th>
            <th onClick={() => sortRepos("created_at")}>Created at</th>
          </tr>
        </thead>
        {renderedRepos}
      </table>
    </div>
  );
};

export default Table;
