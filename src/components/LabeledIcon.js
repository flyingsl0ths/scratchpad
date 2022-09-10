import React from "react";
import PropTypes from "prop-types";

import { HBox } from "./Containers";

LabeledIcon.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.string,
  children: PropTypes.object.isRequired
};

export default function LabeledIcon(props) {
  return (
    <HBox className="mx-w" id={props.id} centered={true}>
      <h2
        className={
          props.labelStyle ? "m-ls l-icon" : `m-ls l-icon ${props.labelStyle}`
        }>
        {props.label}
      </h2>

      {props.children}
    </HBox>
  );
}
