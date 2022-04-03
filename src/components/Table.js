import React from "react";
import TableRow from "./TableRow";

const Table = ({ repos }) => {
  if (!repos) return;

  const renderedRepos = repos.map((repo) => {
    return <TableRow repo={repo} />;
  });

  return (
    <div>
      <table className="ui sortable celled table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Stars</th>
            <th>Created at</th>
          </tr>
        </thead>
        {renderedRepos}
      </table>
    </div>
  );
};

export default Table;
