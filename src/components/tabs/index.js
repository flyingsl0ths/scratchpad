import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PaletteIcon from "@mui/icons-material/Palette";
import CodeIcon from "@mui/icons-material/Code";
import WindowIcon from "@mui/icons-material/Window";

import { VBox } from "../Containers";
import ThemeTab from "./Theme";
import LanguageTab from "./Language";
import SceneTab from "./scene";

function switchTab(index) {
  switch (index) {
    case 0:
      return <ThemeTab />;
    case 1:
      return <LanguageTab />;
    case 2:
      return <SceneTab />;
    default:
      return undefined;
  }
}

export default function SettingsTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
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
      {switchTab(value)}
    </VBox>
  );
}
