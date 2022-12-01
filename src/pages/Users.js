import { useEffect, useState } from "react";

import { listUsers } from "../api/users";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    listUsers({ since: 0, per_page: 10 })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        alert(error.response?.data?.message || error.message);
      });
  }, []);

  return (
    <>
      <h2>Users</h2>
      {users.map(({ id, username }) => (
        <p key={id}>{username}</p>
      ))}
    </>
  );
};

export default Users;
