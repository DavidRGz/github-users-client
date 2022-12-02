import { useState } from "react";
import { Col, Row } from "reactstrap";
import PropTypes from "prop-types";

import Button from "./Button";

const Pagination = ({
  cursor,
  nextCursor,
  onChange,
  isFirst,
  isLast,
  loading,
}) => {
  const [points, setPoints] = useState([cursor]);
  const [isNext, setIsNext] = useState(true);

  const handleBack = () => {
    const index = points.indexOf(cursor);
    onChange(points[index - 1]);
    setIsNext(false);
  };

  const handleNext = () => {
    const next = nextCursor();
    setPoints([...points, next]);
    onChange(next);
    setIsNext(true);
  };

  return (
    <Row>
      <Col className="mx-auto" xs="auto">
        <Button
          label="Atras"
          className="m-2"
          disabled={isFirst}
          loading={loading && !isNext}
          onClick={handleBack}
        />
        <Button
          label="Siguiente"
          className="m-2"
          disabled={isLast}
          loading={loading && isNext}
          onClick={handleNext}
        />
      </Col>
    </Row>
  );
};

export default Pagination;

Pagination.defaultProps = {
  loading: false,
};

Pagination.propTypes = {
  cursor: PropTypes.number.isRequired,
  nextCursor: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
};
