import React from "react";
import PropTypes from "prop-types";
import Slider from "@mui/material/Slider";

import { VBox } from "../../Containers";
import Spacer from "../../Spacer";

LabeledSlider.propTypes = {
  label: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};

export default function LabeledSlider(props) {
  return (
    <VBox centered={false}>
      <h4 className="fw-n">{props.label}</h4>
      <Spacer amount="0.5em" />
      <Slider
        step={props.step}
        min={props.min}
        max={props.max}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
    </VBox>
  );
}
