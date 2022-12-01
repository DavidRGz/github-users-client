import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { listRepos } from "../api/repos";

const Repos = () => {
  const { username } = useParams();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    listRepos({ username })
      .then((data) => {
        setRepos(data);
      })
      .catch((error) => {
        alert(error.response?.data?.message || error.message);
      });
  }, [username]);

  return (
    <>
      <h2>Repos</h2>
      {repos.map(({ id, name }) => (
        <p key={id}>{name}</p>
      ))}
    </>
  );
};

export default Repos;
