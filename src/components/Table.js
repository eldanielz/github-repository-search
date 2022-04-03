import React from "react";

const Table = ({ selectedRepo }) => {
  if (!selectedRepo) {
    return <div>Loading...</div>;
  }

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
        <tbody>
          <tr>
            <td>{selectedRepo.full_name}</td>
            <td>{selectedRepo.owner.login}</td>
            <td>{selectedRepo.stargazers_count}</td>
            <td>{selectedRepo.created_at}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
