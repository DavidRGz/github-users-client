import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { listCommits } from "../api/commits";

const useCommits = (cursor) => {
  const { owner, repo } = useParams();
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    listCommits({
      owner,
      repo,
      page: cursor,
      per_page: 10,
    })
      .then((data) => {
        setCommits(data);
      })
      .catch((error) => {
        alert(error.response?.data?.message || error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [owner, repo, cursor]);

  return { commits, loading };
};

export default useCommits;
