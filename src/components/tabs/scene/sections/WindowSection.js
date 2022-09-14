import React from "react";
import Checkbox from "@mui/material/Checkbox";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { HexColorPicker } from "react-colorful";
import PropTypes from "prop-types";

import SettingAccordion from "../SettingAccordion";
import { HBox, VBox } from "../../../Containers";
import { List } from "../../../list";
import Section from "./Section";
import LabeledSlider from "../LabeledSlider";
import TitleBar from "../../../TitleBar";
import Spacer from "../../../Spacer";
import CodeWindowChanges from "../../../../CodeWindowEvents";

WindowSection.propTypes = {
  handleSceneChanges: PropTypes.func.isRequired,
  windowBgColor: PropTypes.string.isRequired
};

TitleBarOptions.propTypes = {
  handleWindowTitleBarChanged: PropTypes.func.isRequired,
  handleWindowTitleBarTitleChanged: PropTypes.func.isRequired
};

WindowPaddingOptions.propTypes = {
  handleHPaddingChanged: PropTypes.func.isRequired,
  handleVPaddingChanged: PropTypes.func.isRequired
};

WindowBackdropOptions.propTypes = {
  handleWindowShadowXChanged: PropTypes.func.isRequired,
  handleWindowShadowYChanged: PropTypes.func.isRequired,
  handleWindowShadowAlphaChanged: PropTypes.func.isRequired,
  handleWindowShadowToggleChanged: PropTypes.func.isRequired,
  handleWindowBgColorChanged: PropTypes.func.isRequired,
  windowBgColor: PropTypes.string.isRequired
};

TitlebarThemeContainer.propTypes = {
  theme: PropTypes.string.isRequired
};

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  handleColorChanged: PropTypes.func.isRequired
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
          handleWindowTitleBarTitleChanged={withEventChange(
            CODE_WINDOW_CHANGES.TITLEBAR_TITLE,
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
          handleWindowBgColorChanged={withEventChange(
            CODE_WINDOW_CHANGES.BG_COLOR,
            props.handleSceneChanges
          )}
          windowBgColor={props.windowBgColor}
        />
      </SettingAccordion>
    </Section>
  );
}

function TitleBarOptions(props) {
  return (
    <VBox centered={false}>
      <List
        handleOnClick={event =>
          props.handleWindowTitleBarChanged(
            event.target.closest(".rounded-border").dataset.theme
          )
        }
        orientation="h">
        <TitlebarThemeContainer theme="macos" />

        <TitlebarThemeContainer
          theme="
        windows"
        />
      </List>
      <Spacer amount="0.8em" />
      <h4 className="fw-n">{`Set the window's title`}</h4>
      <Spacer amount="0.5em" />
      <HBox centered={false}>
        <TextField
          size="medium"
          fullWidth={false}
          label="Window title"
          variant="outlined"
          defaultValue={"HelloWorld.js"}
          onChange={event =>
            props.handleWindowTitleBarTitleChanged(event.target.value)
          }
        />
        <Spacer amount="0.2em" />
      </HBox>
      <Spacer amount="0.2em" />
    </VBox>
  );
}

function TitlebarThemeContainer(props) {
  return (
    <div data-theme={props.theme} className="rounded-border">
      <TitleBar theme={props.theme} />
    </div>
  );
}

function WindowPaddingOptions(props) {
  return (
    <VBox className="pd-s" centered={false}>
      <LabeledSlider
        label="Horizontal Padding"
        min={1}
        max={20}
        step={1}
        defaultValue={5}
        handleChange={props.handleHPaddingChanged}
      />
      <Spacer amount="1em" />
      <LabeledSlider
        label="Vertical Padding"
        min={1}
        max={20}
        step={1}
        defaultValue={5}
        handleChange={props.handleVPaddingChanged}
      />
    </VBox>
  );
}

function WindowBackdropOptions(props) {
  const spacerAmount = "0.7em";
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

      <ColorPicker
        color={props.windowBgColor}
        handleColorChanged={props.handleWindowBgColorChanged}
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

function ColorPicker(props) {
  const spacerAmount = "0.7em";
  return (
    <VBox centered={false}>
      <h4 className="fw-n">{`Background color`}</h4>
      <Spacer amount={spacerAmount} />
      <HexColorPicker
        style={{ width: "100%" }}
        color={props.color}
        onChange={props.handleColorChanged}
      />
      <Spacer amount={spacerAmount} />
      <HBox centered={false}>
        <TextField
          size="medium"
          fullWidth={false}
          label="Hex color"
          value={props.color}
          variant="outlined"
          onChange={event => props.handleColorChanged(event.target.value)}
        />
        <Spacer amount="0.2em" />
      </HBox>
    </VBox>
  );
}
