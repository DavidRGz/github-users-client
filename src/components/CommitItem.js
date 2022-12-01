import { Col, Row } from "reactstrap";
import PropTypes from "prop-types";

const CommitItem = ({ sha, name, email, date, message }) => {
  const formattedDate = new Date(date).toLocaleString();

  return (
    <Row className="align-items-center">
      <Col>
        <p className="lead m-0">{sha}</p>
        <p className="text-muted m-0">
          {name} ({email})
        </p>
        <p className="text-muted m-0">{message}</p>
      </Col>
      <Col className="pt-2 pt-md-0" xs="12" md="auto">
        <p className="float-end text-muted m-0">{formattedDate}</p>
      </Col>
    </Row>
  );
};

CommitItem.propTypes = {
  sha: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default CommitItem;
