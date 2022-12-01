import { Fragment } from "react";
import PropTypes from "prop-types";

const List = ({ keyName, items, renderItem: Item }) => {
  return items.map((props) => (
    <Fragment key={props[keyName]}>
      <Item {...props} />
      <hr className="my-2" />
    </Fragment>
  ));
};

List.defaultProps = {
  keyName: "id",
};

List.propTypes = {
  keyName: PropTypes.string,
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.elementType.isRequired,
};

export default List;
