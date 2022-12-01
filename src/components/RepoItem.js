import { Button, Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const RepoItem = ({ name, forks, stars, owner }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${owner}/${name}`);
  };

  return (
    <Row className="align-items-center">
      <Col>
        <p className="lead m-0">{name}</p>
        <p className="text-muted m-0">forks: {forks}</p>
        <p className="text-muted m-0">stars: {stars}</p>
      </Col>
      <Col className="d-grid pt-2 pt-md-0" xs="12" md="auto">
        <Button outline color="primary" onClick={handleClick}>
          Ver commits
        </Button>
      </Col>
    </Row>
  );
};

RepoItem.propTypes = {
  name: PropTypes.string.isRequired,
  forks: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  owner: PropTypes.string.isRequired,
};

export default RepoItem;
