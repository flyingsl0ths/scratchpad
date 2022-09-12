import React from "react";
import EditorIcon from "@mui/icons-material/Wysiwyg";
import { Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

import Section from "./Section";
import Selection from "../../../Selection";
import SettingAccordion from "../SettingAccordion";
import { VBox } from "../../../Containers";
import Spacer from "../../../Spacer";
import LabeledSlider from "../LabeledSlider";

export default function EditorSection() {
  return (
    <Section title="Editor" icon={<EditorIcon />}>
      <SettingAccordion title="Font" subTitle="Adjust the editor's font">
        <EditorFontOptions />
      </SettingAccordion>

      <SettingAccordion title="Lines" subTitle="Adjust the editor's lines">
        <EditorLinesOptions />
      </SettingAccordion>
    </Section>
  );
}

function EditorLinesOptions() {
  return (
    <VBox className="pd-s" centered={false}>
      <FormControlLabel control={<Checkbox />} label="Show line numbers" />
      <Spacer amount="1em" />
      <LabeledSlider label="Line height" min={1} max={100} step={1} />
    </VBox>
  );
}

function EditorFontOptions() {
  const fonts = ["Font 1", "Font 2", "Font 3"];

  return (
    <VBox className="pd-s" centered={false}>
      <Selection
        defaultValue={1}
        label="Select a font"
        values={fonts}
        onSelectionChanged={console.log}
      />
      <Spacer amount="1em" />
      <FormControlLabel control={<Checkbox />} label="Show hidden characters" />
      <Spacer amount="1em" />
      <LabeledSlider label="Font size" min={1} max={100} step={1} />
    </VBox>
  );
}
