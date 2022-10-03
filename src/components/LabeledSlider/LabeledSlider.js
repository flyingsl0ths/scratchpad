import React from "react";
import PropTypes from "prop-types";
import Slider from "@mui/material/Slider";

import { VBox } from "../Container/Container";
import Spacer from "../Spacer/Spacer";

LabeledSlider.propTypes = {
  label: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  defaultValue: PropTypes.number.isRequired,
  handleChange: PropTypes.func
};

export default function LabeledSlider(props) {
  return (
    <VBox centered={false}>
      <h4 className="fw-n">{props.label}</h4>
      <Spacer amount="0.5em" />
      {props.handleChange ? (
        <Slider
          step={props.step}
          min={props.min}
          max={props.max}
          defaultValue={props.defaultValue}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={(_, value) => props.handleChange(value)}
        />
      ) : (
        <Slider
          step={props.step}
          min={props.min}
          max={props.max}
          defaultValue={props.defaultValue}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      )}
    </VBox>
  );
}
