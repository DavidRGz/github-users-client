import { useEffect, useState } from "react";
import { Container } from "reactstrap";

import List from "../components/List";
import UserItem from "../components/UserItem";
import Pagination from "../components/Pagination";
import useScrollToTop from "../hooks/useScrollToTop";
import { listUsers } from "../api/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [cursor, setCursor] = useState(0);
  useScrollToTop(users);

  useEffect(() => {
    listUsers({ since: cursor, per_page: 10 })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        alert(error.response?.data?.message || error.message);
      });
  }, [cursor]);

  return (
    <Container>
      <h2>Users</h2>
      <hr className="my-2" />
      <List items={users} renderItem={UserItem} />
      <Pagination
        cursor={cursor}
        nextCursor={() => users[users.length - 1].id}
        onChange={setCursor}
        isFirst={cursor === 0}
        isLast={users.length < 10}
      />
    </Container>
  );
};

export default Users;
