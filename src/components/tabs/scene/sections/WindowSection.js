import React from "react";
import Checkbox from "@mui/material/Checkbox";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import FormControlLabel from "@mui/material/FormControlLabel";

import SettingAccordion from "../SettingAccordion";
import { VBox } from "../../../Containers";
import { List } from "../../../list";
import Section from "./Section";
import LabeledSlider from "../LabeledSlider";
import TitleBar from "../../../TitleBar";
import Spacer from "../../../Spacer";

export default function WindowSection() {
  return (
    <Section title="Window" icon={<WebAssetIcon />}>
      <SettingAccordion
        title="Window Controls"
        subTitle="Adjust the window's button style">
        <TitleBarOptions />
      </SettingAccordion>

      <SettingAccordion
        title="Window Padding"
        subTitle="Adjust the window's padding">
        <WindowPaddingOptions />
      </SettingAccordion>

      <SettingAccordion
        title="Window Backdrop"
        subTitle="Adjust the window's backdrop">
        <WindowBackdropOptions />
      </SettingAccordion>
    </Section>
  );
}

function TitleBarOptions() {
  return (
    <List orientation="h">
      <div className="rounded-border">
        <TitleBar theme="macos-left-tb" />
      </div>

      <div className="rounded-border">
        <TitleBar theme="macos-right-tb" />
      </div>

      <div className="rounded-border">
        <TitleBar theme="macos-left-tb" />
      </div>

      <div className="rounded-border">
        <TitleBar theme="macos-right-tb" />
      </div>
    </List>
  );
}

function WindowPaddingOptions() {
  return (
    <VBox className="pd-s" centered={false}>
      <LabeledSlider label="Horizontal Padding" min={1} max={100} step={1} />
      <Spacer amount="1em" />
      <LabeledSlider label="Vertical Padding" min={1} max={100} step={1} />
    </VBox>
  );
}

function WindowBackdropOptions() {
  return (
    <VBox className="pd-s" centered={false}>
      <FormControlLabel control={<Checkbox />} label="Show shadows" />
      <Spacer amount="1em" />
      <LabeledSlider label="Horizontal offset" min={1} max={100} step={1} />
      <Spacer amount="1em" />
      <LabeledSlider label="Vertical offset" min={1} max={100} step={1} />
    </VBox>
  );
}
