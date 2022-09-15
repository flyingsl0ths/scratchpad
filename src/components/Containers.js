import React from "react";
import PropTypes from "prop-types";

HBox.propTypes = {
  centered: PropTypes.bool.isRequired,
  className: PropTypes.string,
  handleOnClick: PropTypes.func,
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
  const { className = " " } = props;
  return props.handleOnClick ? (
    <div
      onClick={event => {
        forwardEvent(event, props, ["vbox", "cvbox", className]);
      }}
      id={props.id}
      style={props.style}
      className={`${props.centered ? "cvbox" : "vbox"} ${className}`}>
      {
        // eslint-disable-next-line react/prop-types
        props.children
      }
    </div>
  ) : (
    <div
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
  const { className = " " } = props;
  return props.handleOnClick ? (
    <div
      onClick={event => {
        forwardEvent(event, props, ["hbox", "chbox", className]);
      }}
      id={props.id}
      style={props.style}
      className={`${props.centered ? "chbox" : "hbox"} ${className}`}>
      {
        // eslint-disable-next-line react/prop-types
        props.children
      }
    </div>
  ) : (
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

function forwardEvent(event, props, [firstFilter, secondFilter, thirdFilter]) {
  const target = event.target;
  if (
    !(
      target.classList.contains(firstFilter) ||
      target.classList.contains(secondFilter) ||
      target.classList.contains(thirdFilter)
    )
  ) {
    props.handleOnClick(event);
  }
}
