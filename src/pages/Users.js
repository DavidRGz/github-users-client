import { useEffect, useState } from "react";
import { Container } from "reactstrap";

import List from "../components/List";
import UserItem from "../components/UserItem";
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
    <Container>
      <h2>Users</h2>
      <hr className="my-2" />
      <List items={users} renderItem={UserItem} />
    </Container>
  );
};

export default Users;
