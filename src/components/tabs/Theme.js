import React from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import BrushIcon from "@mui/icons-material/Brush";
import PropTypes from "prop-types";

import { VBox, HBox } from "../Containers";
import Spacer from "../Spacer";
import LabeledIcon from "../LabeledIcon";
import { ButtonList } from "../list";

ThemeTab.propTypes = {
  selectedTheme: PropTypes.string.isRequired,
  handleThemeChange: PropTypes.func.isRequired
};

export default function ThemeTab(props) {
  return (
    <VBox id="theme-tab" className="tab-item" centered={false}>
      <HBox className="sp-b" centered={false}>
        <LabeledIcon label="Themes">
          <BrushIcon />
        </LabeledIcon>
        <IconButton color="primary" aria-label="Add theme">
          <AddIcon />
        </IconButton>
      </HBox>
      <Spacer amount="0.5em" />
      <ButtonList
        orientation="v"
        selected={props.selectedTheme}
        handleOnClick={props.handleThemeChange}
        labels={[
          "light",
          "monokai",
          "catppuccin",
          "gruvBox",
          "dracula",
          "tokyo Night"
        ]}
      />
    </VBox>
  );
}
