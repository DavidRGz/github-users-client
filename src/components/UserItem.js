import { Button, Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const UserItem = ({ avatar, username, github }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(username);
  };

  return (
    <Row className="align-items-center">
      <Col xs="auto">
        <img className="avatar" alt={username} src={avatar} />
      </Col>
      <Col>
        <p className="lead m-0">{username}</p>
        <a
          className="text-muted"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          {github}
        </a>
      </Col>
      <Col className="d-grid pt-2 pt-md-0" xs="12" md="auto">
        <Button outline color="primary" onClick={handleClick}>
          Ver repositorios
        </Button>
      </Col>
    </Row>
  );
};

UserItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default UserItem;
