import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PaletteIcon from "@mui/icons-material/Palette";
import CodeIcon from "@mui/icons-material/Code";
import WindowIcon from "@mui/icons-material/Window";
import PropTypes from "prop-types";

import { VBox } from "../Container/Container";
import ThemeTab from "../ThemeTab/ThemeTab";
import LanguageTab from "../LanguageTab/LanguageTab";
import SceneTab from "../SceneTab/SceneTab";

import "./SettingsTab.scss";

SettingsTabs.propTypes = {
  handleCodeWindowChanges: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  selectedTheme: PropTypes.string.isRequired,
  windowBgColor: PropTypes.string.isRequired
};

function switchTab(index, props) {
  switch (index) {
    case 0:
      return (
        <ThemeTab
          selectedTheme={props.selectedTheme}
          handleThemeChange={props.handleCodeWindowChanges}
        />
      );
    case 1:
      return (
        <LanguageTab
          selectedLanguage={props.selectedLanguage}
          handleLanguageChange={props.handleCodeWindowChanges}
        />
      );
    case 2:
      return (
        <SceneTab
          windowBgColor={props.windowBgColor}
          invalidWindowBgColor={props.invalidWindowBgColor}
          handleSceneChanges={props.handleCodeWindowChanges}
        />
      );
    default:
      return undefined;
  }
}

export default function SettingsTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
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
      {switchTab(value, props)}
    </VBox>
  );
}
