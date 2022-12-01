import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { listCommits } from "../api/commits";

const Commits = () => {
  const { owner, repo } = useParams();
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    listCommits({
      owner,
      repo,
      page: 1,
      per_page: 10,
    })
      .then((data) => {
        setCommits(data);
      })
      .catch((error) => {
        alert(error.response?.data?.message || error.message);
      });
  }, [owner, repo]);

  return (
    <>
      <h2>Commits</h2>
      {commits.map(({ sha, email }) => (
        <p key={sha}>{email}</p>
      ))}
    </>
  );
};

export default Commits;
