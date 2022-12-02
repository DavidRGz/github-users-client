import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { useParams } from "react-router-dom";

import List from "../components/List";
import CommitItem from "../components/CommitItem";
import Pagination from "../components/Pagination";
import { listCommits } from "../api/commits";

const Commits = () => {
  const { owner, repo } = useParams();
  const [commits, setCommits] = useState([]);
  const [cursor, setCursor] = useState(1);

  useEffect(() => {
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
      });
  }, [owner, repo, cursor]);

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
      />
    </Container>
  );
};

export default Commits;
