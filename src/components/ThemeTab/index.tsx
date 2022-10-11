import React from "react";
import BrushIcon from "@mui/icons-material/Brush";

import { VBox } from "../Container";
import { THEMES } from "../../EditorConstants";
import Spacer from "../Spacer";
import LabeledIcon from "../LabledIcon";
import { ButtonList } from "../List";

interface ThemeTabProps {
  onThemeChange: (theme: string) => void;
  selectedTheme: string;
}

export default function ThemeTab(props: ThemeTabProps): JSX.Element {
  return (
    <VBox id="theme-tab" className="tab-item" centered={false}>
      <LabeledIcon label="Themes">
        <BrushIcon />
      </LabeledIcon>
      <Spacer amount="0.5em" />
      <ButtonList
        labels={THEMES}
        onClick={event =>
          props.onThemeChange((event.target as HTMLElement).innerText)
        }
        orientation="v"
        selected={props.selectedTheme}
      />
    </VBox>
  );
}
