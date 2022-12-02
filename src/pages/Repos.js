import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";

import List from "../components/List";
import RepoItem from "../components/RepoItem";
import Pagination from "../components/Pagination";
import { listRepos } from "../api/repos";

const Repos = () => {
  const { username } = useParams();
  const [repos, setRepos] = useState([]);
  const [cursor, setCursor] = useState(1);

  useEffect(() => {
    listRepos({ username, page: cursor, per_page: 10 })
      .then((data) => {
        setRepos(data);
      })
      .catch((error) => {
        alert(error.response?.data?.message || error.message);
      });
  }, [username, cursor]);

  return (
    <Container>
      <h2>Repos</h2>
      <hr className="my-2" />
      <List items={repos} renderItem={RepoItem} />
      <Pagination
        cursor={cursor}
        nextCursor={() => cursor + 1}
        onChange={setCursor}
        isFirst={cursor === 1}
        isLast={repos.length < 10}
      />
    </Container>
  );
};

export default Repos;
