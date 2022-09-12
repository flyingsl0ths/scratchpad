import React from "react";
import Checkbox from "@mui/material/Checkbox";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import FormControlLabel from "@mui/material/FormControlLabel";
import PropTypes from "prop-types";

import SettingAccordion from "../SettingAccordion";
import { VBox } from "../../../Containers";
import { List } from "../../../list";
import Section from "./Section";
import LabeledSlider from "../LabeledSlider";
import TitleBar from "../../../TitleBar";
import Spacer from "../../../Spacer";
import CodeWindowChanges from "../../../../CodeWindowEvents";

WindowSection.propTypes = {
  handleSceneChanges: PropTypes.func.isRequired
};

TitleBarOptions.propTypes = {
  handleWindowTitleBarChanged: PropTypes.func.isRequired
};

WindowPaddingOptions.propTypes = {
  handleHPaddingChanged: PropTypes.func.isRequired,
  handleVPaddingChanged: PropTypes.func.isRequired
};

WindowBackdropOptions.propTypes = {
  handleWindowShadowXChanged: PropTypes.func.isRequired,
  handleWindowShadowYChanged: PropTypes.func.isRequired,
  handleWindowShadowAlphaChanged: PropTypes.func.isRequired,
  handleWindowShadowToggleChanged: PropTypes.func.isRequired
};

export default function WindowSection(props) {
  const { CODE_WINDOW_CHANGES, withEventChange } = CodeWindowChanges;

  return (
    <Section title="Window" icon={<WebAssetIcon />}>
      <SettingAccordion
        title="Window Controls"
        subTitle="Adjust the window's titlebar style">
        <TitleBarOptions
          handleWindowTitleBarChanged={withEventChange(
            CODE_WINDOW_CHANGES.TITLEBAR,
            props.handleSceneChanges
          )}
        />
      </SettingAccordion>

      <SettingAccordion
        title="Window Padding"
        subTitle="Adjust the window's padding">
        <WindowPaddingOptions
          handleHPaddingChanged={withEventChange(
            CODE_WINDOW_CHANGES.HORIZONTAL_PADDING,
            props.handleSceneChanges
          )}
          handleVPaddingChanged={withEventChange(
            CODE_WINDOW_CHANGES.VERTICAL_PADDING,
            props.handleSceneChanges
          )}
        />
      </SettingAccordion>

      <SettingAccordion
        title="Window Backdrop"
        subTitle="Adjust the window's backdrop">
        <WindowBackdropOptions
          handleWindowShadowXChanged={withEventChange(
            CODE_WINDOW_CHANGES.SHADOW_OFFSET_X,
            props.handleSceneChanges
          )}
          handleWindowShadowYChanged={withEventChange(
            CODE_WINDOW_CHANGES.SHADOW_OFFSET_Y,
            props.handleSceneChanges
          )}
          handleWindowShadowAlphaChanged={withEventChange(
            CODE_WINDOW_CHANGES.SHADOW_ALPHA,
            props.handleSceneChanges
          )}
          handleWindowShadowToggleChanged={withEventChange(
            CODE_WINDOW_CHANGES.SHADOW_TOGGLED,
            props.handleSceneChanges
          )}
        />
      </SettingAccordion>
    </Section>
  );
}

function TitleBarOptions(props) {
  return (
    <List handleOnClick={props.handleWindowTitleBarChanged} orientation="h">
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

function WindowPaddingOptions(props) {
  return (
    <VBox className="pd-s" centered={false}>
      <LabeledSlider
        label="Horizontal Padding"
        min={1}
        max={100}
        step={1}
        defaultValue={5}
        handleChange={props.handleHPaddingChanged}
      />
      <Spacer amount="1em" />
      <LabeledSlider
        label="Vertical Padding"
        min={1}
        max={100}
        step={1}
        defaultValue={5}
        handleChange={props.handleVPaddingChanged}
      />
    </VBox>
  );
}

function WindowBackdropOptions(props) {
  const spacerAmount = "1em";
  return (
    <VBox className="pd-s" centered={false}>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked={true}
            onChange={event =>
              props.handleWindowShadowToggleChanged(event.target.checked)
            }
          />
        }
        label="Show shadows"
      />
      <Spacer amount={spacerAmount} />
      <LabeledSlider
        label="Horizontal offset"
        min={1}
        max={100}
        step={1}
        defaultValue={1}
        handleChange={props.handleWindowShadowXChanged}
      />
      <Spacer amount={spacerAmount} />
      <LabeledSlider
        label="Vertical offset"
        min={1}
        max={100}
        step={1}
        defaultValue={2}
        handleChange={props.handleWindowShadowYChanged}
      />
      <Spacer amount={spacerAmount} />
      <LabeledSlider
        label="Transparency"
        min={1}
        max={100}
        step={1}
        defaultValue={2}
        handleChange={props.handleWindowShadowAlphaChanged}
      />
    </VBox>
  );
}
