import React from "react";

const Table = ({ fetchedRepo }) => {
  if (!fetchedRepo) return;

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
            <td>{fetchedRepo.full_name}</td>
            <td>{fetchedRepo.owner.login}</td>
            <td>{fetchedRepo.stargazers_count}</td>
            <td>{fetchedRepo.created_at}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
