import React from "react";
import MonitorIcon from "@mui/icons-material/Monitor";

import LabeledIcon from "../../LabeledIcon";
import { VBox } from "../../Containers";
import Spacer from "../../Spacer";
import { List } from "../../list";
import { EditorSection, WindowSection } from "./sections";

export default function SceneTab(props) {
  return (
    <VBox id="scene-tab" className="tab-item" centered={false}>
      <LabeledIcon label="Scene">
        <MonitorIcon />
      </LabeledIcon>
      <Spacer amount="0.5em" />
      <List orientation="v">
        <WindowSection />
        <EditorSection />
      </List>
    </VBox>
  );
}
