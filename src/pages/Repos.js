import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";

import List from "../components/List";
import RepoItem from "../components/RepoItem";
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
    <Container>
      <h2>Repos</h2>
      <List items={repos} renderItem={RepoItem} />
    </Container>
  );
};

export default Repos;
