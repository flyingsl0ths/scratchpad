import React from "react";
import EditorIcon from "@mui/icons-material/Wysiwyg";
import { Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

import {
  CodeWindowEvents,
  EventChange,
  withEventChange,
  CodeWindowChange
} from "../../CodeWindowEvents";
import { FONTS } from "../../EditorConstants";
import Section from "../Section";
import Selection from "../Selection";
import SettingAccordion from "../SettingAccordion";
import { VBox } from "../Container";
import Spacer from "../Spacer";
import LabeledSlider from "../LabeledSlider";

interface EditorSectionProps {
  handleEditorChanges: CodeWindowChange;
}

interface EditorLinesOptionsProps {
  handleEditorLinesChanged: EventChange<number>;
  handleEditorLinesToggled: EventChange<boolean>;
}

interface EditorFontOptionsProps {
  handleEditorFontChanged: EventChange<string>;
  handleEditorFontSizeChanged: EventChange<number>;
}

export default function EditorSection(props: EditorSectionProps): JSX.Element {
  return (
    <Section title="Editor" icon={<EditorIcon />}>
      <SettingAccordion
        title="Font"
        subTitle="Adjust the editor's font settings">
        <EditorFontOptions
          handleEditorFontChanged={withEventChange(
            CodeWindowEvents.EDITOR_FONT_CHANGED,
            props.handleEditorChanges
          )}
          handleEditorFontSizeChanged={withEventChange(
            CodeWindowEvents.EDITOR_FONT_SIZE_INCREASED,
            props.handleEditorChanges
          )}
        />
      </SettingAccordion>

      <SettingAccordion
        title="Lines"
        subTitle="Adjust the editor's line settings">
        <EditorLinesOptions
          handleEditorLinesChanged={withEventChange(
            CodeWindowEvents.EDITOR_LINES_INCREASED,
            props.handleEditorChanges
          )}
          handleEditorLinesToggled={withEventChange(
            CodeWindowEvents.EDITOR_LINES_TOGGLED,
            props.handleEditorChanges
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
            onChange={event =>
              props.handleEditorLinesToggled(event.target.checked)
            }
          />
        }
        label="Show line numbers"
      />

      <Spacer amount="1em" />

      <LabeledSlider
        label="Line height"
        min={1}
        max={100}
        step={0.1}
        defaultValue={1.2}
        handleChange={props.handleEditorLinesChanged}
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
        values={FONTS}
        onSelectionChanged={props.handleEditorFontChanged}
      />

      <Spacer amount={spacerAmount} />

      <LabeledSlider
        label="Font size"
        min={1}
        max={100}
        step={1}
        defaultValue={21}
        handleChange={props.handleEditorFontSizeChanged}
      />
    </VBox>
  );
}
