import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PaletteIcon from "@mui/icons-material/Palette";
import CodeIcon from "@mui/icons-material/Code";
import WindowIcon from "@mui/icons-material/Window";

import { VBox } from "../Container";
import ThemeTab from "../ThemeTab";
import LanguageTab from "../LanguageTab";
import SceneTab from "../SceneTab";

import {
  CodeWindowChange,
  CodeWindowEvents,
  withChange
} from "../../CodeWindowEvents";

import "./styles.scss";

interface SettingsTabsProps {
  onCodeWindowChange: CodeWindowChange;
  selectedLanguage: string;
  selectedTheme: string;
  windowBgColor: string;
}

function switchTab(
  index: number,
  props: SettingsTabsProps
): JSX.Element | null {
  switch (index) {
    case 0:
      return (
        <ThemeTab
          onThemeChange={withChange(
            CodeWindowEvents.THEME,
            props.onCodeWindowChange
          )}
          selectedTheme={props.selectedTheme}
        />
      );
    case 1:
      return (
        <LanguageTab
          onEditorLanguageChange={withChange(
            CodeWindowEvents.LANGUAGE,
            props.onCodeWindowChange
          )}
          selectedLanguage={props.selectedLanguage}
        />
      );
    case 2:
      return (
        <SceneTab
          onSceneChange={props.onCodeWindowChange}
          windowBgColor={props.windowBgColor}
        />
      );
    default:
      return null;
  }
}

export default function SettingsTabs(props: SettingsTabsProps): JSX.Element {
  const [value, setValue] = React.useState(0);

  const handleChange = (
    _: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  const newTab = switchTab(value, props);

  return newTab ? (
    <VBox id="settings-tab" centered={false}>
      <Tabs onChange={handleChange} value={value} variant="fullWidth">
        <Tab icon={<PaletteIcon />} label="Theme" />
        <Tab icon={<CodeIcon />} label="Language" />
        <Tab icon={<WindowIcon />} label="Scene" />
      </Tabs>
      {newTab}
    </VBox>
  ) : (
    <VBox id="settings-tab" centered={false}>
      <Tabs onChange={handleChange} value={value} variant="fullWidth">
        <Tab icon={<PaletteIcon />} label="Theme" />
        <Tab icon={<CodeIcon />} label="Language" />
        <Tab icon={<WindowIcon />} label="Scene" />
      </Tabs>
    </VBox>
  );
}
