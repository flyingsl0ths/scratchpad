import React from "react";
import Slider from "@mui/material/Slider";

import { VBox } from "../Container";
import Spacer from "../Spacer";

interface LabeledSliderProps {
  defaultValue: number;
  handleChange: (value: number) => void;
  label: string;
  max: number;
  min: number;
  step: number;
}

export default function LabeledSlider(props: LabeledSliderProps): JSX.Element {
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
          onChange={(_, value) => props.handleChange(value as number)}
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
