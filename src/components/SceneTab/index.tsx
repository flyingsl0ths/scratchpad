import React from "react";
import MonitorIcon from "@mui/icons-material/Monitor";

import LabeledIcon from "../LabledIcon";
import { VBox } from "../Container";
import Spacer from "../Spacer";
import { List } from "../List";
import EditorSection from "../EditorSection";
import WindowSection from "../WindowSection";
import { CodeWindowChange } from "../../CodeWindowEvents";

interface SceneTabProps {
  onSceneChange: CodeWindowChange;
  windowBgColor: string;
}

export default function SceneTab(props: SceneTabProps): JSX.Element {
  return (
    <VBox id="scene-tab" className="tab-item" centered={false}>
      <LabeledIcon label="Scene">
        <MonitorIcon />
      </LabeledIcon>
      <Spacer amount="0.5em" />
      <List orientation="v">
        <WindowSection
          windowBgColor={props.windowBgColor}
          onSceneChange={props.onSceneChange}
        />
        <EditorSection onEditorSettingsChange={props.onSceneChange} />
      </List>
    </VBox>
  );
}
