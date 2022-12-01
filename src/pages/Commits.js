import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { useParams } from "react-router-dom";

import List from "../components/List";
import CommitItem from "../components/CommitItem";
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
    <Container>
      <h2>Commits</h2>
      <hr className="my-2" />
      <List keyName="sha" items={commits} renderItem={CommitItem} />
    </Container>
  );
};

export default Commits;
