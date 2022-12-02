import { useState } from "react";
import { Container } from "reactstrap";

import List from "../components/List";
import CommitItem from "../components/CommitItem";
import Pagination from "../components/Pagination";
import useCommits from "../hooks/useCommits";
import useScrollToTop from "../hooks/useScrollToTop";

const Commits = () => {
  const [cursor, setCursor] = useState(1);
  const { commits, loading } = useCommits(cursor);
  useScrollToTop(commits);

  return (
    <Container>
      <h2>Commits</h2>
      <hr className="my-2" />
      <List keyName="sha" items={commits} renderItem={CommitItem} />
      <Pagination
        cursor={cursor}
        nextCursor={() => cursor + 1}
        onChange={setCursor}
        isFirst={cursor === 1}
        isLast={commits.length < 10}
        loading={loading}
      />
    </Container>
  );
};

export default Commits;
