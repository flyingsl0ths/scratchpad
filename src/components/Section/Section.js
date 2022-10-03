import React from "react";
import PropTypes from "prop-types";

import { VBox } from "../Container/Container";
import LabeledIcon from "../LabledIcon/LabeledIcon";
import Spacer from "../Spacer/Spacer";

Section.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired
};

export default function Section(props) {
  return (
    <VBox className="section" centered={false}>
      <LabeledIcon label={props.title}>{props.icon}</LabeledIcon>
      <Spacer amount="0.25em" />
      {
        // eslint-disable-next-line react/prop-types
        props.children
      }
    </VBox>
  );
}
