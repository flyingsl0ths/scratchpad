import React from "react";
import BrushIcon from "@mui/icons-material/Brush";
import PropTypes from "prop-types";

import { VBox } from "../Container/Container";
import EditorConstants from "../../EditorConstants";
import CodeWindowChanges from "../../CodeWindowEvents";
import Spacer from "../Spacer/Spacer";
import LabeledIcon from "../LabledIcon/LabeledIcon";
import { ButtonList } from "../List/List";

ThemeTab.propTypes = {
  selectedTheme: PropTypes.string.isRequired,
  handleThemeChange: PropTypes.func.isRequired
};

export default function ThemeTab(props) {
  const { CODE_WINDOW_CHANGES } = CodeWindowChanges;
  return (
    <VBox id="theme-tab" className="tab-item" centered={false}>
      <LabeledIcon label="Themes">
        <BrushIcon />
      </LabeledIcon>
      <Spacer amount="0.5em" />
      <ButtonList
        orientation="v"
        selected={props.selectedTheme}
        handleOnClick={event =>
          props.handleThemeChange(
            CODE_WINDOW_CHANGES.THEME,
            event.target.innerText
          )
        }
        labels={EditorConstants.THEME_NAMES}
      />
    </VBox>
  );
}
