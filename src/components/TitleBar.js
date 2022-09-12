import React from "react";
import PropTypes from "prop-types";

import { HBox } from "./Containers.js";

TitleBar.propTypes = {
  theme: PropTypes.string.isRequired
};

Circle.propTypes = {
  color: PropTypes.string.isRequired
};

function Circle(props) {
  return <div className={`button ${props.color}`}></div>;
}

export default function TitleBar(props) {
  return (
    <HBox className={props.theme} centered={false}>
      <Circle color="red" />
      <Circle color="yellow" />
      <Circle color="green" />
    </HBox>
  );
}
