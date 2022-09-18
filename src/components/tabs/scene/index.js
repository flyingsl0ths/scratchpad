import React from "react";
import MonitorIcon from "@mui/icons-material/Monitor";
import PropTypes from "prop-types";

import LabeledIcon from "../../LabledIcon/LabeledIcon";
import { VBox } from "../../Container/Container";
import Spacer from "../../Spacer/Spacer";
import { List } from "../../List/List";
import { EditorSection, WindowSection } from "./sections";

SceneTab.propTypes = {
  handleSceneChanges: PropTypes.func.isRequired,
  windowBgColor: PropTypes.string.isRequired
};

export default function SceneTab(props) {
  return (
    <VBox id="scene-tab" className="tab-item" centered={false}>
      <LabeledIcon label="Scene">
        <MonitorIcon />
      </LabeledIcon>
      <Spacer amount="0.5em" />
      <List orientation="v">
        <WindowSection
          windowBgColor={props.windowBgColor}
          handleSceneChanges={props.handleSceneChanges}
        />
        <EditorSection handleEditorChanges={props.handleSceneChanges} />
      </List>
    </VBox>
  );
}
