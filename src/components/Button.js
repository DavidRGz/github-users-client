import { Button as ReactstrapButton, Spinner } from "reactstrap";
import PropTypes from "prop-types";

const Button = ({ loading, label, ...rest }) => {
  if (loading) {
    return (
      <ReactstrapButton {...rest}>
        <Spinner size="sm" />
        <span> {label}</span>
      </ReactstrapButton>
    );
  }

  return <ReactstrapButton {...rest}>{label}</ReactstrapButton>;
};

export default Button;

Button.propTypes = {
  loading: PropTypes.bool,
  label: PropTypes.string.isRequired,
};
