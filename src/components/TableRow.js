import React from "react";

const TableRow = ({ repo }) => {
  return (
    <tbody>
      <tr>
        <td>{repo.full_name}</td>
        <td>{repo.owner.login}</td>
        <td>{repo.stargazers_count}</td>
        <td>{repo.created_at}</td>
      </tr>
    </tbody>
  );
};

export default TableRow;
