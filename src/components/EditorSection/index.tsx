import React from "react";
import EditorIcon from "@mui/icons-material/Wysiwyg";
import { Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

import {
  CodeWindowChange,
  CodeWindowEvents,
  EventChange,
  withChange
} from "../../CodeWindowEvents";
import { FONTS } from "../../EditorConstants";
import Section from "../Section";
import Selection from "../Selection";
import SettingAccordion from "../SettingAccordion";
import { VBox } from "../Container";
import Spacer from "../Spacer";
import LabeledSlider from "../LabeledSlider";

interface EditorSectionProps {
  onEditorSettingsChange: CodeWindowChange;
}

interface EditorLinesOptionsProps {
  onEditorLineHeightChange: EventChange<number>;
  onEditorLinesToggle: EventChange<boolean>;
}

interface EditorFontOptionsProps {
  onEditorFontChange: EventChange<string>;
  onEditorFontSizeChange: EventChange<number>;
}

export default function EditorSection(props: EditorSectionProps): JSX.Element {
  return (
    <Section title="Editor" icon={<EditorIcon />}>
      <SettingAccordion
        subTitle="Adjust the editor's font settings"
        title="Font">
        <EditorFontOptions
          onEditorFontChange={withChange(
            CodeWindowEvents.EDITOR_FONT_CHANGED,
            props.onEditorSettingsChange
          )}
          onEditorFontSizeChange={withChange(
            CodeWindowEvents.EDITOR_FONT_SIZE_INCREASED,
            props.onEditorSettingsChange
          )}
        />
      </SettingAccordion>

      <SettingAccordion
        subTitle="Adjust the editor's line settings"
        title="Lines">
        <EditorLinesOptions
          onEditorLineHeightChange={withChange(
            CodeWindowEvents.EDITOR_LINES_INCREASED,
            props.onEditorSettingsChange
          )}
          onEditorLinesToggle={withChange(
            CodeWindowEvents.EDITOR_LINES_TOGGLED,
            props.onEditorSettingsChange
          )}
        />
      </SettingAccordion>
    </Section>
  );
}

function EditorLinesOptions(props: EditorLinesOptionsProps): JSX.Element {
  return (
    <VBox className="pd-s" centered={false}>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked={true}
            onChange={event => props.onEditorLinesToggle(event.target.checked)}
          />
        }
        label="Show line numbers"
      />

      <Spacer amount="1em" />

      <LabeledSlider
        defaultValue={1.2}
        label="Line height"
        max={100}
        min={1}
        onChange={props.onEditorLineHeightChange}
        step={0.1}
      />
    </VBox>
  );
}

function EditorFontOptions(props: EditorFontOptionsProps): JSX.Element {
  const spacerAmount = "1em";

  return (
    <VBox className="pd-s" centered={false}>
      <Selection
        defaultValue={2}
        label="Select a font"
        onSelectionChange={props.onEditorFontChange}
        values={FONTS}
      />

      <Spacer amount={spacerAmount} />

      <LabeledSlider
        defaultValue={21}
        label="Font size"
        max={100}
        min={1}
        onChange={props.onEditorFontSizeChange}
        step={1}
      />
    </VBox>
  );
}
