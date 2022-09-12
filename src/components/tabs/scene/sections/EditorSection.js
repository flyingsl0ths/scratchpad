import React from "react";
import EditorIcon from "@mui/icons-material/Wysiwyg";
import { Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import PropTypes from "prop-types";

import CodeWindowEvents from "../../../../CodeWindowEvents";
import Section from "./Section";
import Selection from "../../../Selection";
import SettingAccordion from "../SettingAccordion";
import { VBox } from "../../../Containers";
import Spacer from "../../../Spacer";
import LabeledSlider from "../LabeledSlider";

EditorSection.propTypes = {
  handleEditorChanges: PropTypes.func.isRequired
};

EditorLinesOptions.propTypes = {
  handleEditorLinesChanged: PropTypes.func.isRequired,
  handleEditorLinesToggled: PropTypes.func.isRequired
};

EditorFontOptions.propTypes = {
  handleEditorFontSizeChanged: PropTypes.func.isRequired
};

export default function EditorSection(props) {
  const { CODE_WINDOW_CHANGES, withEventChange } = CodeWindowEvents;

  return (
    <Section title="Editor" icon={<EditorIcon />}>
      <SettingAccordion
        title="Font"
        subTitle="Adjust the editor's font settings">
        <EditorFontOptions
          handleEditorFontSizeChanged={withEventChange(
            CODE_WINDOW_CHANGES.EDITOR_FONT_SIZE_INCREASED,
            props.handleEditorChanges
          )}
        />
      </SettingAccordion>

      <SettingAccordion
        title="Lines"
        subTitle="Adjust the editor's line settings">
        <EditorLinesOptions
          handleEditorLinesChanged={withEventChange(
            CODE_WINDOW_CHANGES.EDITOR_LINES_INCREASED,
            props.handleEditorChanges
          )}
          handleEditorLinesToggled={withEventChange(
            CODE_WINDOW_CHANGES.EDITOR_LINES_TOGGLED,
            props.handleEditorChanges
          )}
        />
      </SettingAccordion>
    </Section>
  );
}

function EditorLinesOptions(props) {
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
        step={1}
        defaultValue={1}
        handleChange={props.handleEditorLinesChanged}
      />
    </VBox>
  );
}

function EditorFontOptions(props) {
  const fonts = ["Font 1", "Font 2", "Font 3"];
  const spacerAmount = "1em";

  return (
    <VBox className="pd-s" centered={false}>
      <Selection
        defaultValue={1}
        label="Select a font"
        values={fonts}
        onSelectionChanged={console.log}
      />

      <Spacer amount={spacerAmount} />

      <FormControlLabel control={<Checkbox />} label="Show hidden characters" />

      <Spacer amount={spacerAmount} />
      <LabeledSlider
        label="Font size"
        min={1}
        max={100}
        step={1}
        defaultValue={1}
        handleChange={props.handleEditorFontSizeChanged}
      />
    </VBox>
  );
}
