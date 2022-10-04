import React from "react";
import PropTypes from "prop-types";

Spacer.propTypes = {
  amount: PropTypes.string.isRequired
};

export default function Spacer(props) {
  return <div style={{ margin: props.amount }}></div>;
}
