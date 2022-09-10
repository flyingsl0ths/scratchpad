import React from "react";
import EditorIcon from "@mui/icons-material/Wysiwyg";
import { Checkbox } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";

import Section from "./Section";
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
  return (
    <VBox className="pd-s" centered={false}>
      <FontSelect />
      <Spacer amount="1em" />
      <FormControlLabel control={<Checkbox />} label="Show hidden characters" />
      <Spacer amount="1em" />
      <LabeledSlider label="Font size" min={1} max={100} step={1} />
    </VBox>
  );
}

function FontSelect() {
  const [selection, setFont] = React.useState("");

  const handleChange = event => {
    setFont(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Select a Font</InputLabel>
      <Select value={selection} label="Select a Font" onChange={handleChange}>
        <MenuItem value={10}>Font 1</MenuItem>
        <MenuItem value={20}>Font 2</MenuItem>
        <MenuItem value={30}>Font 3</MenuItem>
      </Select>
    </FormControl>
  );
}
