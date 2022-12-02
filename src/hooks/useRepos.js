import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { listRepos } from "../api/repos";

const useRepos = (cursor) => {
  const { username } = useParams();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    listRepos({ username, page: cursor, per_page: 10 })
      .then((data) => {
        setRepos(data);
      })
      .catch((error) => {
        alert(error.response?.data?.message || error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [username, cursor]);

  return { repos, loading };
};

export default useRepos;
