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
  CodeWindowEvents,
  withEventChange,
  CodeWindowChange
} from "../../CodeWindowEvents";

import "./styles.scss";

interface SettingsTabsProps {
  handleCodeWindowChanges: CodeWindowChange;
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
          selectedTheme={props.selectedTheme}
          handleThemeChange={withEventChange(
            CodeWindowEvents.THEME,
            props.handleCodeWindowChanges
          )}
        />
      );
    case 1:
      return (
        <LanguageTab
          selectedLanguage={props.selectedLanguage}
          handleLanguageChange={withEventChange(
            CodeWindowEvents.LANGUAGE,
            props.handleCodeWindowChanges
          )}
        />
      );
    case 2:
      return (
        <SceneTab
          windowBgColor={props.windowBgColor}
          handleSceneChanges={props.handleCodeWindowChanges}
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
      <Tabs
        value={value}
        variant="fullWidth"
        onChange={handleChange}
        aria-label="icon label tabs example">
        <Tab icon={<PaletteIcon />} label="Theme" />
        <Tab icon={<CodeIcon />} label="Language" />
        <Tab icon={<WindowIcon />} label="Scene" />
      </Tabs>
      {newTab}
    </VBox>
  ) : (
    <VBox id="settings-tab" centered={false}>
      <Tabs
        value={value}
        variant="fullWidth"
        onChange={handleChange}
        aria-label="icon label tabs example">
        <Tab icon={<PaletteIcon />} label="Theme" />
        <Tab icon={<CodeIcon />} label="Language" />
        <Tab icon={<WindowIcon />} label="Scene" />
      </Tabs>
    </VBox>
  );
}
