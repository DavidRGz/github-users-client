import { Fragment } from "react";
import PropTypes from "prop-types";

const List = ({ items, renderItem: Item }) => {
  return items.map(({ id, ...rest }) => (
    <Fragment key={id}>
      <Item {...rest} />
      <hr className="my-2" />
    </Fragment>
  ));
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.elementType.isRequired,
};

export default List;
