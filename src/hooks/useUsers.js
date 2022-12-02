import { useEffect, useState } from "react";

import { listUsers } from "../api/users";

const useUsers = (cursor) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    listUsers({ since: cursor, per_page: 10 })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        alert(error.response?.data?.message || error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [cursor]);

  return { users, loading };
};

export default useUsers;
