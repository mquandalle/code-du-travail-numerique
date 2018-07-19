import React from "react";
import PropTypes from "prop-types";

export const flavors = [
  "primary",
  "secondary",
  "warning",
  "success",
  "info",
  "danger"
];

// return the 1st truthy prop that is one of a Tag versions
const getFlavor = props => {
  const versionProps = Object.keys(props).filter(
    // ensure value is truthy
    flavor => flavors.indexOf(flavor) > -1 && !!props[flavor]
  );
  return (versionProps.length && versionProps[0]) || "";
};

const Tag = props => (
  <div className={`tag tag__${getFlavor(props)}`} {...props} />
);

Tag.propTypes = {
  children: PropTypes.element.isRequired
};

Tag.defaultProps = {};

Tag.propTypes = {
  /** use .btn.btn__primary */
  primary: PropTypes.bool,
  /** use .btn.btn__secondary */
  secondary: PropTypes.bool,
  /** use .btn.btn__warning */
  warning: PropTypes.bool,
  /** use .btn.btn__success */
  success: PropTypes.bool,
  /** use .btn.btnrt__info */
  info: PropTypes.bool,
  /** use .btn.btn__danger */
  danger: PropTypes.bool,
  style: PropTypes.object
};

Tag.defaultProps = {
  primary: false,
  secondary: false,
  warning: false,
  success: false,
  info: false,
  danger: false
};

export default Tag;