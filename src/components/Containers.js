import React from "react";
import PropTypes from "prop-types";

HBox.propTypes = {
  centered: PropTypes.bool.isRequired,
  className: PropTypes.string,
  id: PropTypes.string
};

VBox.propTypes = {
  centered: PropTypes.bool.isRequired,
  className: PropTypes.string,
  id: PropTypes.string
};

export function VBox(props) {
  const { className = "" } = props;
  return (
    <div
      id={props.id}
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
      className={`${props.centered ? "chbox" : "hbox"} ${className}`}>
      {
        // eslint-disable-next-line react/prop-types
        props.children
      }
    </div>
  );
}
