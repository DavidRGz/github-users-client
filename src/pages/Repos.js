import { useState } from "react";
import { Container } from "reactstrap";

import List from "../components/List";
import RepoItem from "../components/RepoItem";
import Pagination from "../components/Pagination";
import useRepos from "../hooks/useRepos";
import useScrollToTop from "../hooks/useScrollToTop";

const Repos = () => {
  const [cursor, setCursor] = useState(1);
  const { repos, loading } = useRepos(cursor);
  useScrollToTop(repos);

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
        loading={loading}
      />
    </Container>
  );
};

export default Repos;
