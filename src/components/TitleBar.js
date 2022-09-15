import React from "react";
import PropTypes from "prop-types";

import { HBox } from "./Containers.js";

TitleBar.propTypes = {
  theme: PropTypes.string.isRequired
};

TitlebarItem.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string.isRequired
};

export default function TitleBar(props) {
  return (
    <HBox className={props.theme} centered={true}>
      {computeThemeProps(props.theme)}
    </HBox>
  );
}

function TitlebarItem(props) {
  const className = `${props.className}${props.color ? " " + props.color : ""}`;
  return <div className={className}></div>;
}

function computeThemeProps(theme) {
  let result;
  if (theme.includes("macos")) {
    result = [
      <TitlebarItem key={1} className="circle" color="red" />,
      <TitlebarItem key={2} className="circle" color="yellow" />,
      <TitlebarItem key={3} className="circle" color="green" />
    ];
  } else if (theme.includes("windows")) {
    result = [
      <TitlebarItem key={2} className="underscore" />,
      <TitlebarItem key={3} className="square" />,
      <TitlebarItem key={4} className="letter-x" />
    ];
  }

  return result;
}
