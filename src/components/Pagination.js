import { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import PropTypes from "prop-types";

const Pagination = ({ cursor, nextCursor, onChange, isFirst, isLast }) => {
  const [points, setPoints] = useState([cursor]);

  const handleBack = () => {
    const index = points.indexOf(cursor);
    onChange(points[index - 1]);
  };

  const handleNext = () => {
    const next = nextCursor();
    setPoints([...points, next]);
    onChange(next);
  };

  return (
    <Row>
      <Col className="mx-auto" xs="auto">
        <Button className="m-2" disabled={isFirst} onClick={handleBack}>
          Atras
        </Button>
        <Button className="m-2" disabled={isLast} onClick={handleNext}>
          Siguiente
        </Button>
      </Col>
    </Row>
  );
};

export default Pagination;

Pagination.propTypes = {
  cursor: PropTypes.number.isRequired,
  nextCursor: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
};
