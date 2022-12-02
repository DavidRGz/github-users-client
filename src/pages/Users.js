import { useState } from "react";
import { Container } from "reactstrap";

import List from "../components/List";
import UserItem from "../components/UserItem";
import Pagination from "../components/Pagination";
import useUsers from "../hooks/useUsers";
import useScrollToTop from "../hooks/useScrollToTop";

const Users = () => {
  const [cursor, setCursor] = useState(0);
  const { users, loading } = useUsers(cursor);
  useScrollToTop(users);

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
        loading={loading}
      />
    </Container>
  );
};

export default Users;
