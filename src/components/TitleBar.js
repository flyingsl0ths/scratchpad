import React from "react";
import PropTypes from "prop-types";

import { HBox } from "./Containers.js";

TitleBar.propTypes = {
  theme: PropTypes.string.isRequired,
  title: PropTypes.string
};

TitlebarItem.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string.isRequired
};

export default function TitleBar(props) {
  return (
    <HBox className={props.theme} centered={false}>
      {computeThemeProps(props.theme, props.title)}
    </HBox>
  );
}

function TitlebarItem(props) {
  const className = `${props.className}${props.color ? " " + props.color : ""}`;
  return <div className={className}></div>;
}

function computeThemeProps(theme, title) {
  let result;
  if (theme.includes("macos")) {
    result = [
      <TitlebarItem key={1} className="circle" color="red" />,
      <TitlebarItem key={2} className="circle" color="yellow" />,
      <TitlebarItem key={3} className="circle" color="green" />,
      <h4 key={4} className="m-ll fw-n">
        {title}
      </h4>
    ];
  } else if (theme.includes("windows")) {
    result = [
      <h4 key={1} className="m-ll fw-n">
        {title}
      </h4>,
      <TitlebarItem key={2} className="underscore" />,
      <TitlebarItem key={3} className="square" />,
      <TitlebarItem key={4} className="letter-x" />
    ];
  }

  return result;
}
