import React from "react";
import PropTypes from "prop-types";

HBox.propTypes = {
  centered: PropTypes.bool.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object
};

VBox.propTypes = {
  centered: PropTypes.bool.isRequired,
  className: PropTypes.string,
  handleOnClick: PropTypes.func,
  id: PropTypes.string,
  style: PropTypes.object
};

export function VBox(props) {
  const { className = "" } = props;
  return (
    <div
      onClick={props.handleOnClick}
      id={props.id}
      style={props.style}
      className={`${props.centered ? "cvbox" : "vbox"} ${className}`}>
      {
        // eslint-disable-next-line react/prop-types
        props.children
      }
    </div>
  );
}

export function HBox(props) {
  const { className = "" } = props;
  return (
    <div
      id={props.id}
      style={props.style}
      className={`${props.centered ? "chbox" : "hbox"} ${className}`}>
      {
        // eslint-disable-next-line react/prop-types
        props.children
      }
    </div>
  );
}
